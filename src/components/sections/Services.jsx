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
<<<<<<< HEAD
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
=======

const Services = () => {
  const features = [
    {
      icon: <FiUsers size={18} />,
      title: "User-first design",
      description:
        "We design with real users in mind, focusing on clarity, usability and accessibility from day one.",
      hasAccent: false,
    },
    {
      icon: <FiMonitor size={18} />,
      title: "Fully responsive",
      description:
        "Interfaces that look and feel great on desktop, tablet and mobile, no compromises.",
      hasAccent: true,
    },
    {
      icon: <FiUsers size={18} />,
      title: "User-first design",
      description:
        "We design with real users in mind, focusing on clarity, usability and accessibility from day one.",
      hasAccent: false,
    },
    {
      icon: <FiMonitor size={18} />,
      title: "Fully responsive",
      description:
        "Interfaces that look and feel great on desktop, tablet and mobile, no compromises.",
      hasAccent: true,
    },
    {
      icon: <FiUsers size={18} />,
      title: "User-first design",
      description:
        "We design with real users in mind, focusing on clarity, usability and accessibility from day one.",
      hasAccent: false,
    },
    {
      icon: <FiMonitor size={18} />,
      title: "Fully responsive",
      description:
        "Interfaces that look and feel great on desktop, tablet and mobile, no compromises.",
      hasAccent: true,
    },
    {
      icon: <FiGlobe size={18} />,
      title: "Global-ready UX",
      description:
        "Clean files, clear specs and developer-friendly documentation - ready to build.",
      hasAccent: false,
    },
    {
      icon: <FiLayers size={18} />,
      title: "Scalable systems",
      description:
        "Consistent components, tokens and patterns built to grow with your product.",
      hasAccent: false,
    },
    {
      icon: <FiRefreshCw size={18} />,
      title: "Easy to iterate",
      description:
        "Flexible designs that adapt quickly as your product, users and goals evolve.",
      hasAccent: false,
    },
    {
      icon: <FiZap size={18} />,
      title: "Performance-aware",
      description:
        "Optimized layouts and interactions that support fast load times and smooth experiences.",
      hasAccent: false,
    },
    {
      icon: <FiTool size={18} />,
      title: "Tool-friendly",
      description:
        "Designs built with localization, multiple languages and diverse audiences in mind.",
      hasAccent: false,
    },
    {
      icon: <FiCode size={18} />,
      title: "Dev-ready handoff",
      description:
        "From startups to enterprise, our designs integrate seamlessly with your existing workflows.",
      hasAccent: false,
    },
  ];
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578

  return (
    <>
      <section className=" px-6 md:px-12 lg:px-20 py-20 flex flex-col items-center">
        {/* TITLE */}
        <div className="max-w-5xl w-full mb-10 text-center md:mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#283618] mb-4">
<<<<<<< HEAD
            {websiteData.sections.services.title}
          </h1>
          <p className="text-sm text-[#1a1423] max-w-xl mx-auto">
            {websiteData.sections.services.subtitle}
=======
            Our Services
          </h1>
          <p className="text-sm text-[#1a1423] max-w-xl mx-auto">
            We deliver modern, scalable and high-performance solutions designed
            for real-world products and real users.
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
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
