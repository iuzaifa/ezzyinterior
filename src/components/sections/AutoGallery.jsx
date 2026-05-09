import React, { useMemo, useState } from 'react';
import { buildPublicImageMap } from '../../utils/imageAutoMapper';

const Card = ({ item, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full text-left bg-white/70 hover:bg-white rounded-2xl overflow-hidden border border-[#bb9457]/15 hover:border-[#bb9457]/25 shadow-sm hover:shadow-md transition-all"
    >
      <div className="relative aspect-[4/3] bg-black/10">
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

        <div className="absolute left-3 right-3 bottom-3 flex items-center justify-between gap-3">
          <span className="text-[11px] font-medium px-2 py-1 rounded-full bg-white/15 text-white border border-white/20 backdrop-blur">
            {item.category}
          </span>
          <span className="text-[11px] font-semibold text-white/90">
            View
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-sm text-[#283618] truncate">
          {item.title}
        </h3>
        <p className="text-xs text-[#283618]/80 mt-1 line-clamp-2">
          {item.description}
        </p>
      </div>
    </button>
  );
};

const Modal = ({ open, image, onClose }) => {
  if (!open || !image) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-6xl rounded-3xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 p-5 border-b border-black/5">
          <div>
            <div className="text-xs font-semibold text-[#283618]/70">
              {image.category}
            </div>
            <h2 className="text-lg font-bold text-[#283618]">
              {image.title}
            </h2>
            <p className="text-sm text-[#283618]/75 mt-1">
              {image.description}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 text-2xl leading-none p-2 rounded-full hover:bg-black/5 active:scale-95 transition-transform"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="p-5">
          <div className="rounded-2xl bg-black/5 border border-black/5 p-2">
            <img
              src={image.src}
              alt={image.title}
              className="w-full max-h-[70vh] object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default function AutoGallery() {
  const [selected, setSelected] = useState(null);

  const mapped = useMemo(() => buildPublicImageMap(), []);

  const categories = mapped.categories.map((cat) => ({
    ...cat,
    images: cat.images.map((img) => ({
      ...img,
      description: cat.description,
    })),
  }));

  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = categories[activeIndex] || null;

  const totalCount = categories.reduce((sum, c) => sum + c.images.length, 0);

  const heading =
    activeIndex === -1
      ? {
          title: 'All Categories',
          subtitle: 'Browse all project images across every category.',
          total: totalCount,
        }
      : activeCategory
        ? {
            title: activeCategory.name,
            subtitle: activeCategory.description,
            total: activeCategory.images.length,
          }
        : null;

  const cards =
    activeIndex === -1
      ? (() => {
          // Prevent repeated images if any duplicate src exists across categories.
          const seen = new Set();
          return categories.flatMap((cat) =>
            cat.images
              .filter((item) => {
                if (seen.has(item.src)) return false;
                seen.add(item.src);
                return true;
              })
              .map((item) => (
                <Card
                  key={item.src}
                  item={{
                    ...item,
                    category: cat.name,
                  }}
                  onClick={() =>
                    setSelected({
                      ...item,
                      category: cat.name,
                    })
                  }
                />
              )),
          );
        })()
      : activeCategory
        ? activeCategory.images
            // Also guard against duplicates inside a category.
            .filter((item, idx, arr) =>
              arr.findIndex((x) => x.src === item.src) === idx
            )
            .map((item) => (
              <Card
                key={item.src}
                item={{
                  ...item,
                  category: activeCategory.name,
                }}
                onClick={() =>
                  setSelected({
                    ...item,
                    category: activeCategory.name,
                  })
                }
              />
            ))
        : null;


  return (
    <section className="bg-gradient-to-b from-[#ffecd9] via-white to-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#bb9457]/25 bg-white/70 px-4 py-2 shadow-sm">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#bb9457]" />
            <span className="text-xs sm:text-sm font-medium text-[#283618]">
              Portfolio Gallery
            </span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-[#404040]">
            Our Projects
          </h1>
          <p className="text-[#283618] mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Browse category-wise interiors. New images added to{' '}
            <code className="text-[#283618]">/public</code> will automatically appear here.
          </p>
        </header>

        {/* Segmented control */}
        <div className="mb-8 rounded-2xl border border-[#bb9457]/25 bg-white/70 backdrop-blur px-3 py-2 shadow-sm">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="shrink-0 text-xs font-medium text-[#283618] px-2">
              Categories
            </div>

            <div className="flex-1 overflow-x-auto">
              <div className="flex items-center gap-2 min-w-max pb-1">
                {/* All Categories */}
                <button
                  type="button"
                  onClick={() => setActiveIndex(-1)}
                  className={
                    'shrink-0 px-4 py-2 rounded-full text-sm transition-all border ' +
                    (activeIndex === -1
                      ? 'bg-[#FEFAE0] text-[#283618] border-[#bb9457]/30 shadow-sm'
                      : 'bg-white/70 text-[#283618] border-transparent hover:border-[#bb9457]/30 hover:bg-white')
                  }
                >
                  All
                </button>

                {categories.map((cat, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={cat.rawCategory}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={
                        'shrink-0 px-4 py-2 rounded-full text-sm transition-all border ' +
                        (isActive
                          ? 'bg-[#FEFAE0] text-[#283618] border-[#bb9457]/30 shadow-sm'
                          : 'bg-white/70 text-[#283618] border-transparent hover:border-[#bb9457]/30 hover:bg-white')
                      }
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {heading && (
            <div className="px-5 pb-5">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-5">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#283618]">
                    {heading.title}
                  </h2>
                  <p className="text-[#283618] mt-2 text-sm sm:text-base">
                    {heading.subtitle}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#283618]">Total</div>
                  <div className="text-2xl font-bold text-[#283618]">{heading.total}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {cards}
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal open={!!selected} image={selected} onClose={() => setSelected(null)} />
    </section>
  );
}


