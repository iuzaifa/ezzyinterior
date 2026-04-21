import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { websiteData } from "../../data/websitedata";

const projects = websiteData.projects;
=======

const projects = [
  {
    title: "Kitchen",
    images: [
      "/images/kitchen.jpg",
      "/images/kitchen.jpg",
      "/images/kitchen.jpg",
      "/images/kitchen.jpg",
      "/images/kitchen.jpg",
      "/images/kitchen.jpg",
      "/images/kitchen.jpg",
      "/images/kitchen.jpg",
      "/images/kitchen.jpg",
      "/images/kitchen.jpg",
    ],
  },
  {
    title: "Bathroom",
    images: ["/images/bathroom.jpg", "/images/bathroom.jpg"],
  },
  { title: "Bedroom", images: ["/images/bedroom.jpg", "/images/bedroom.jpg"] },
  {
    title: "Living Room",
    images: ["/images/living.jpg", "/images/living.jpg"],
  },
  {
    title: "Furniture",
    images: ["/images/furniture.jpg", "/images/furniture.jpg"],
  },
  { title: "Renovation", images: ["/images/reno.jpg", "/images/reno.jpg"] },
];
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578

export default function OurWork() {
  const [activeProject, setActiveProject] = useState(null);

  // 🔥 Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
  }, [activeProject]);

  // 🔥 Total images count
  const totalImages = projects.reduce(
    (total, item) => total + item.images.length,
    0,
  );

  return (
    <section className="bg-[#FEFAE0] py-22 px-4 md:px-10">
      <div className="pb-16">
        <h2 className="text-3xl md:text-5xl text-center font-semibold">
<<<<<<< HEAD
          {websiteData.sections.ourWork.title}{" "}
          <span className="text-[#DDA15E]">Work</span>
        </h2>
        <p className="text-sm text-[#1a1423] text-center mt-2 max-w-md mx-auto">
          {websiteData.sections.ourWork.subtitle}
=======
          Our Latest <span className="text-[#DDA15E]">Work</span>
        </h2>
        <p className="text-sm text-[#1a1423] text-center mt-2 max-w-md mx-auto">
          A visual collection of our most recent works - each piece crafted with
          intention, emotion and style.
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {/* LEFT */}
        <div className="bg-[#283618] text-[#FEFAE0] flex flex-col justify-center p-10">
          <h2 className="text-3xl md:text-5xl font-semibold">
<<<<<<< HEAD
            {websiteData.sections.ourWork.projectsTitle}{" "}
            <span className="text-[#DDA15E]">Projects</span>
=======
            Our Latest <span className="text-[#DDA15E]">Projects</span>
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
          </h2>

          <div className="mt-10">
            {/* ✅ Dynamic total */}
            <h3 className="text-6xl font-bold">{totalImages}</h3>
<<<<<<< HEAD
            <p className="text-lg mt-2">{websiteData.sections.ourWork.stats}</p>
=======
            <p className="text-lg mt-2">total project images</p>
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveProject(item)}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-3">
                <h4 className="text-[#FEFAE0] font-semibold">{item.title}</h4>

                {/* ✅ Dynamic count */}
                <p className="text-sm text-[#FEFAE0]/80">
                  {item.images.length} Projects
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 MODAL */}
      {activeProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-white rounded-lg max-w-5xl w-full p-4 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-3 right-3 text-xl font-bold"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-4 text-[#283618]">
              {activeProject.title}
            </h2>

            {/* Images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {activeProject.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="w-full h-32 md:h-40 object-cover rounded"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
