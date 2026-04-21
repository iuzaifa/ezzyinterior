import { websiteData } from "../../data/websitedata";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-screen text-center bg-[url('hero.jpeg')] bg-top bg-no-repeat bg-cover">
      {/* 🔥 Overlay (MAIN FIX) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4">
        {/* heading */}
        <h1 className="text-4xl md:text-6xl font-semibold max-w-4xl text-[#FEFAE0]">
          {websiteData.hero.title}
        </h1>

        {/* paragraph */}
        <p className="text-[#FEFAE0]/80 max-w-2xl mt-4">
          {websiteData.hero.subtitle}
        </p>

        {/* buttons */}
        <div className="flex gap-3 mt-8 flex-wrap justify-center">
          <button className="px-6 py-2.5 bg-[#606C38] hover:bg-[#283618] rounded-full text-[#FEFAE0]">
            {websiteData.hero.cta.primary}
          </button>
          <button className="px-6 py-2.5 bg-[#FEFAE0]/10 border border-[#FEFAE0]/30 rounded-full text-[#FEFAE0] backdrop-blur-sm">
            {websiteData.hero.cta.secondary}
          </button>
        </div>
      </div>
    </section>
  );
}
