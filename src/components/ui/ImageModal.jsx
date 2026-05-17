import React from "react";
import { FiX } from "react-icons/fi";

export default function ImageModal({
  open,
  image,
  onClose,
  showCategory = true,
}) {
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
            {showCategory ? (
              <div className="text-xs font-semibold text-[#283618]/70">
                {image.category}
              </div>
            ) : null}
            <h2 className="text-lg font-bold text-[#283618]">{image.title}</h2>
            {image.description ? (
              <p className="text-sm text-[#283618]/75 mt-1">
                {image.description}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 text-2xl leading-none p-2 rounded-full hover:bg-black/5 active:scale-95 transition-transform"
            aria-label="Close"
          >
            <FiX />
          </button>
        </div>

        <div className="p-5">
          <div className="rounded-2xl bg-black/5 border border-black/5 p-2">
            <img
              src={image.src}
              alt={image.title}
              loading="eager"
              decoding="async"
              className="w-full max-h-[70vh] object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
