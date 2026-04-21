import React from "react";
import { FaQuoteRight } from "react-icons/fa";
<<<<<<< HEAD
import { websiteData } from "../../data/websitedata";

export default function Testimonials() {
  const testimonials = websiteData.testimonials;
=======

export default function Testimonials() {
  const testimonials = [
    {
      name: "Donald Jackman",
      role: "Content Creator",
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Richard Nelson",
      role: "Content Writer",
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage2.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "James Washington",
      role: "Content Marketing",
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage3.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Michael Scott",
      role: "Marketing Lead",
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578

  return (
    <div className="flex flex-col items-center text-center py-20 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold max-w-[740px] mb-[72px] text-[#283618]">
<<<<<<< HEAD
        {websiteData.sections.testimonials.title}
=======
        Trusted by <span className="text-[#606C38]">30+</span> world class
        companies & design teams
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
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
