import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { websiteData } from "../../data/websitedata";

export default function Testimonials() {
  const testimonials = websiteData.testimonials;

  return (
    <div className="flex flex-col items-center text-center py-20 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold max-w-[740px] mb-[72px] text-[#283618]">
        {websiteData.sections.testimonials.title}
      </h1>

      {/* 4 × 1 GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-[#fefae03a] px-4 py-8 rounded-lg border border-[#1a1423]/30 text-sm text-center text-[#1a1423]"
          >
            {/* Avatar */}
            <div className="relative mb-4">
              <img
                className="h-16 w-16 rounded-full"
                src={item.image}
                alt={item.name}
              />

              {/* React Icon instead of SVG */}
              <div className="absolute -top-1 -right-2 bg-[#606C38] text-[#FEFAE0] rounded-full p-1">
                <FaQuoteRight size={10} />
              </div>
            </div>

            <p className="text-[#606060]">"{item.text}"</p>

            <p className="text-lg text-[#283618] font-medium mt-5">
              {item.name}
            </p>
            <p className="text-xs text-[#161419c7]">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
