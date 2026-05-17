import React from "react";

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  kicker,
}) {
  return (
    <div
      className={
        align === "left"
          ? "text-left"
          : align === "right"
            ? "text-right"
            : "text-center"
      }
    >
      {kicker ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-[#bb9457]/25 bg-white/70 px-4 py-2 shadow-sm">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#bb9457]" />
          <span className="text-xs sm:text-sm font-medium text-[#283618]">
            {kicker}
          </span>
        </div>
      ) : null}

      {title ? (
        <h2
          className={
            align === "left"
              ? "text-3xl sm:text-4xl font-semibold text-[#283618]"
              : "text-3xl sm:text-4xl font-semibold text-[#283618]"
          }
        >
          {title}
        </h2>
      ) : null}

      {subtitle ? (
        <p className="text-[#283618] mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
