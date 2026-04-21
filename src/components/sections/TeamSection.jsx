import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { websiteData } from "../../data/websitedata";

const TeamSection = () => {
  const [startIndex, setStartIndex] = React.useState(0);
  const [visibleCount, setVisibleCount] = React.useState(4);

  const members = websiteData.team;

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else if (window.innerWidth < 1280) setVisibleCount(3);
      else setVisibleCount(4); // ✅ 4 cards on large screen

      setStartIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = members.length - visibleCount;
  const visibleMembers = members.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="bg-[#FEFAE0]/50 py-20 px-6">
      <div className="pb-16">
        <h1 className="text-3xl font-semibold text-center mx-auto text-[#283618]">
          {websiteData.sections.team.title}
        </h1>
        <p className="text-sm text-[#1a1423] text-center mt-2 max-w-md mx-auto">
          {websiteData.sections.team.subtitle}
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 md:gap-8">
        <button
          onClick={() => setStartIndex((p) => p - 1)}
          disabled={startIndex === 0}
          className={`size-10 border border-[#1a1423]/50 rounded-full flex items-center justify-center ${
            startIndex === 0
              ? "opacity-40 cursor-not-allowed"
              : "cursor-pointer hover:bg-[#FEFAE0]/50"
          }`}
        >
          <FiChevronLeft size={22} />
        </button>

        <div className="flex gap-5 w-full justify-center">
          {visibleMembers.map((m, i) => (
            <div
              key={i}
              className="bg-[#FEFAE0] border border-[#1a1423]/30 rounded-xl p-5 w-[260px]"
            >
              <img
                src={m.image}
                alt={m.name}
                className="h-[245px] w-full object-cover rounded-lg"
              />

              <h3 className="text-base font-medium mt-4 text-[#283618]">
                {m.name}
              </h3>
              <p className="text-sm text-[#1a1423]">{m.role}</p>

              <div className="flex gap-3 mt-4">
                <a className="size-10 bg-[#FEFAE0]/50 border border-[#1a1423]/30 rounded-lg flex items-center justify-center hover:bg-[#DDA15E]/50">
                  <FaXTwitter size={18} />
                </a>
                <a className="size-10 bg-[#FEFAE0]/50 border border-[#1a1423]/30 rounded-lg flex items-center justify-center hover:bg-[#DDA15E]/50">
                  <FaLinkedinIn size={18} />
                </a>
                <a className="size-10 bg-[#FEFAE0]/50 border border-[#1a1423]/30 rounded-lg flex items-center justify-center hover:bg-[#DDA15E]/50">
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setStartIndex((p) => p + 1)}
          disabled={startIndex === maxIndex}
          className={`size-10 border border-[#1a1423]/50 rounded-full flex items-center justify-center ${
            startIndex === maxIndex
              ? "opacity-40 cursor-not-allowed"
              : "cursor-pointer hover:bg-[#FEFAE0]/50"
          }`}
        >
          <FiChevronRight size={22} />
        </button>
      </div>
    </section>
  );
};

export default TeamSection;
