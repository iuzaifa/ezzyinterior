import React, { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { websiteData } from "../../data/websitedata";

export default function CTA() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleConsultationClick = useCallback(() => {
    if (location.pathname === "/contact") {
      const form = document.getElementById("contact-form");
      if (form) form.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  }, [location.pathname, navigate]);

  const handleViewWork = useCallback(() => {
    navigate("/project");
  }, [navigate]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="p-[1px] rounded-3xl bg-gradient-to-r from-[#DDA15E]/30 to-[#BC6C25]/30">
        <div className="rounded-3xl bg-gradient-to-r from-[#FEFAE0] to-[#FEFAE0]/90 py-14 px-6 text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-[#FEFAE0] px-4 py-1.5 rounded-full shadow text-xs font-medium text-[#283618]">
            {websiteData.sections.cta.tag}
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-semibold mt-4 leading-tight text-[#283618]">
            {websiteData.sections.cta.title}
            <br />
            <span className="bg-gradient-to-r from-[#606C38] to-[#DDA15E] bg-clip-text text-transparent">
              Dream Space?
            </span>
          </h2>

          {/* Description */}
          <p className="text-[#1a1423] mt-4 max-w-xl mx-auto text-sm md:text-base">
            {websiteData.sections.cta.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <button
              onClick={handleConsultationClick}
              className="cursor-pointer bg-gradient-to-r from-[#606C38] to-[#DDA15E] text-[#FEFAE0] px-6 py-3 rounded-xl font-medium hover:scale-105 hover:shadow-xl active:scale-95 shadow-lg transition-all duration-300"
            >
              {websiteData.sections.cta.buttons.primary}
            </button>

            <button
              onClick={handleViewWork}
              className="cursor-pointer border border-[#1a1423]/50 px-6 py-3 rounded-xl font-medium hover:scale-105 hover:bg-[#FEFAE0]/50 shadow-lg hover:shadow-xl transition-all duration-300 text-[#283618]"
            >
              {websiteData.sections.cta.buttons.secondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
