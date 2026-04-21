import React from "react";
<<<<<<< HEAD
import { websiteData } from "../../data/websitedata";
=======
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578

export default function CTA() {
  const handleConsultationClick = () => {
    const form = document.getElementById("contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="p-[1px] rounded-3xl bg-gradient-to-r from-[#DDA15E]/30 to-[#BC6C25]/30">
        <div className="rounded-3xl bg-gradient-to-r from-[#FEFAE0] to-[#FEFAE0]/90 py-14 px-6 text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-[#FEFAE0] px-4 py-1.5 rounded-full shadow text-xs font-medium text-[#283618]">
<<<<<<< HEAD
            {websiteData.sections.cta.tag}
=======
            ✨ Transform Your Space
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-semibold mt-4 leading-tight text-[#283618]">
<<<<<<< HEAD
            {websiteData.sections.cta.title}
=======
            Ready to Design Your
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
            <br />
            <span className="bg-gradient-to-r from-[#606C38] to-[#DDA15E] bg-clip-text text-transparent">
              Dream Space?
            </span>
          </h2>

          {/* Description */}
          <p className="text-[#1a1423] mt-4 max-w-xl mx-auto text-sm md:text-base">
<<<<<<< HEAD
            {websiteData.sections.cta.subtitle}
=======
            From modern homes to luxury commercial interiors, we turn your
            vision into reality with creativity, precision, and elegance.
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <button
              onClick={handleConsultationClick}
              className="bg-gradient-to-r from-[#606C38] to-[#DDA15E] text-[#FEFAE0] px-6 py-3 rounded-xl font-medium hover:scale-105 active:scale-95 transition duration-300"
            >
<<<<<<< HEAD
              {websiteData.sections.cta.buttons.primary}
            </button>

            <button className="border border-[#1a1423]/50 px-6 py-3 rounded-xl font-medium hover:bg-[#FEFAE0]/50 transition text-[#283618]">
              {websiteData.sections.cta.buttons.secondary}
=======
              Get Free Consultation
            </button>

            <button className="border border-[#1a1423]/50 px-6 py-3 rounded-xl font-medium hover:bg-[#FEFAE0]/50 transition text-[#283618]">
              View Our Work
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
