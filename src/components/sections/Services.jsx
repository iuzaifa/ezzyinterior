import React from "react";
import {
  FiUsers,
  FiMonitor,
  FiGlobe,
  FiLayers,
  FiRefreshCw,
  FiZap,
  FiTool,
  FiCode,
} from "react-icons/fi";
import { websiteData } from "../../data/websitedata";

const Services = () => {
  const iconMap = {
    FiUsers: FiUsers,
    FiMonitor: FiMonitor,
    FiGlobe: FiGlobe,
    FiLayers: FiLayers,
    FiRefreshCw: FiRefreshCw,
    FiZap: FiZap,
    FiTool: FiTool,
    FiCode: FiCode,
  };

  const features = websiteData.services.map(({ icon: iconName, ...rest }) => ({
    ...rest,
    icon: React.createElement(iconMap[iconName], {
      size: 18,
    }),
  }));

  return (
    <>
      <section className=" px-6 md:px-12 lg:px-20 py-20 flex flex-col items-center">
        {/* TITLE */}
        <div className="max-w-5xl w-full mb-10 text-center md:mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#283618] mb-4">
            {websiteData.sections.services.title}
          </h1>
          <p className="text-sm text-[#1a1423] max-w-xl mx-auto">
            {websiteData.sections.services.subtitle}
          </p>
        </div>

        {/* GRID */}
        <div className="grid cursor-pointer grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl border-t border-l border-[#1a1423]/30">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-6 flex flex-col gap-4 border-r border-b border-[#1a1423]/30 transition-all duration-300
              ${
                index === 0
                  ? "bg-gradient-to-b from-[#FEFAE0] to-[#FEFAE0]/50"
                  : "[#FEFAE0] hover:bg-gradient-to-b hover:from-[#FEFAE0] hover:to-[#FEFAE0]/50"
              }`}
            >
              {feature.hasAccent && (
                <div className="absolute left-0 top-10 bottom-10 w-1.5 bg-[#DDA15E] rounded-r" />
              )}

              <div className="flex items-center gap-3 text-[#DDA15E]">
                {feature.icon}
                <h3 className="text-sm font-medium text-[#283618]">
                  {feature.title}
                </h3>
              </div>

              <p className="text-xs text-[#1a1423] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
