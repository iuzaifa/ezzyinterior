/**
 * Auto-maps images from /public into a data structure usable by the UI.
 *
 * Important:
 * - In browser runtime we cannot read filesystem contents.
 * - This module relies on Vite's import.meta.glob to statically include images
 *   under given public subfolders at build time.
 */

const defaultCategories = [
  'bedroom',
  'commercial-projects',
  'dinning-room',
  'exterior',
  'kitchen',
  'living-room',
  'puja-poom',
  'washroom',
];

const titleize = (str) =>
  str
    .replace(/\.[^/.]+$/, '') // remove extension
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

const sentenceCase = (str) => {
  const s = str.trim();
  if (!s) return s;
  return s[0].toUpperCase() + s.slice(1);
};

const categoryDescription = (category) => {
  const c = category.toLowerCase();

  if (c === 'bedroom') return 'Bedroom interiors that balance comfort, style, and functional layout ideas.';
  if (c === 'kitchen') return 'Kitchen designs featuring smart space planning, modern finishes, and everyday usability.';
  if (c === 'living-room') return 'Living room concepts designed for warmth, flow, and premium visual appeal.';
  if (c === 'dinning-room' || c === 'dining-room')
    return 'Dining space inspirations with refined ambiance and practical seating layouts.';
  if (c === 'exterior')
    return 'Exterior design ideas focusing on curb appeal, light usage, and cohesive materials.';
  if (c === 'puja-poom')
    return 'Puja room themes that blend calm aesthetics, thoughtful storage, and elegant detailing.';
  if (c === 'washroom' || c === 'bathroom')
    return 'Washroom designs built around hygiene, durable finishes, and efficient layouts.';
  if (c === 'commercial-projects') return 'Commercial project visuals for offices, showrooms, salons, and service spaces.';

  return 'Interior project ideas curated for style, functionality, and modern design details.';
};

const filenameToTitle = (filename) => {
  // Special-case formatting for filenames/folders like:
  //   "chaputoli 1 r2.jpg" / "chaputoli 1 r3.jpg" / "chaputoli 3r.jpg"
  // We want the displayed title to be exactly: "Chaputoli 1, Chaputoli 12"
  const cleaned = filename
    .replace(/\.[^/.]+$/, '')
    .replace(/\s+/g, ' ')
    .trim();

  const chapMatch = cleaned.match(/\bchaputoli\s*(\d+)\b/i);
  if (chapMatch) {
    const n = chapMatch[1];
    return `Chaputoli ${n}`;
  }

  return titleize(filename);
};


/**
 * Generates a map of:
 * { categories: [{ name, description, images: [{ title, src, imageName, category }] }] }
 */
export function buildPublicImageMap({
  // kept for API compatibility
  categories = defaultCategories,
} = {}) {
  // Vite import.meta.glob needs a STATIC string.
  // So we import EVERYTHING under /public/<category> and then filter by category.
  // This stays scalable: new images/folders automatically appear.
  // Note: we accept `exts` in the signature for API compatibility,
  // but Vite's glob requires a literal string, so we keep the extension list static.
  const allImages = import.meta.glob(
    `/public/{bedroom,commercial-projects,dinning-room,exterior,kitchen,living-room,puja-poom,washroom}/**/*.{jpg,jpeg,png,webp,gif,svg}`,
    { eager: true, import: 'default' }
  );


  const include = Object.fromEntries(
    categories.map((cat) => {
      const prefix = `/public/${cat}/`;
      const filtered = Object.fromEntries(
        Object.entries(allImages).filter(([filePath]) => filePath.startsWith(prefix))
      );
      return [cat, filtered];
    })
  );



  const result = categories
    .map((category) => {
      const files = include[category];
      const images = Object.entries(files)
        .filter(([k]) => !k.endsWith('/'))
        .map(([filePath]) => {
          // filePath example: /public/bedroom/1.jpg
          const normalized = filePath.replace(/^\/public\//, '').replace(/^public\//, '');
          const parts = normalized.split('/');
          const imageName = parts[parts.length - 1];

          // We cannot reliably import from /public as modules.
          // For UI we should use the public URL path directly.
          const publicUrl = filePath
            .replace(/^\/public\//, '/public/')
            .replace(/^\/public\//, '/')
            .replace(/^public\//, '/');

          return {
            category,
            imageName,
            title: filenameToTitle(imageName),
            src: publicUrl,
          };
        })
        .sort((a, b) => a.imageName.localeCompare(b.imageName));

      return {
        name:
          category === 'washroom'
            ? 'Bathroom'
            : sentenceCase(category.replace(/-/g, ' ')),
        rawCategory: category,
        description: categoryDescription(category),
        images,
      };
    })
    .filter((c) => c.images.length > 0);

  return { categories: result };
}


