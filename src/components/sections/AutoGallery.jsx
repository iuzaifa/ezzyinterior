import React, { useMemo, useState } from "react";
import { buildPublicImageMap } from "../../utils/imageAutoMapper";
import PageContainer from "../ui/PageContainer";
import ProjectCard from "../ui/ProjectCard";
import ImageModal from "../ui/ImageModal";
import SectionHeading from "../ui/SectionHeading";

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
                <ProjectCard
                  key={item.src}
                  item={{
                    ...item,
                    category: cat.name,
                    description: cat.description,
                  }}
                  onClick={() =>
                    setSelected({
                      ...item,
                      category: cat.name,
                      description: cat.description,
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
              <ProjectCard
                key={item.src}
                item={{
                  ...item,
                  category: activeCategory.name,
                  description: activeCategory.description,
                }}
                onClick={() =>
                  setSelected({
                    ...item,
                    category: activeCategory.name,
                    description: activeCategory.description,
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

      <ImageModal
        open={!!selected}
        image={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}






