import React from "react";

export default function ProjectCard({ item, onClick, badge }) {
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
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

        <div className="absolute left-3 right-3 bottom-3 flex items-center justify-between gap-3">
          {badge ? (
            <span className="text-[11px] font-medium px-2 py-1 rounded-full bg-white/15 text-white border border-white/20 backdrop-blur">
              {badge}
            </span>
          ) : item.category ? (
            <span className="text-[11px] font-medium px-2 py-1 rounded-full bg-white/15 text-white border border-white/20 backdrop-blur">
              {item.category}
            </span>
          ) : null}
          <span className="text-[11px] font-semibold text-white/90">View</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-sm text-[#283618] truncate">
          {item.title}
        </h3>
        {item.description ? (
          <p className="text-xs text-[#283618]/80 mt-1 line-clamp-2">
            {item.description}
          </p>
        ) : null}
      </div>
    </button>
  );
}
