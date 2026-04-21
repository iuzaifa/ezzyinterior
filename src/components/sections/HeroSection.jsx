import { websiteData } from "../../data/websitedata";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-[calc(100vh-5rem)] sm:h-screen text-center bg-[url('hero.jpeg')] bg-top bg-no-repeat bg-cover">
      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 w-full">
        {/* heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold max-w-4xl text-[#FEFAE0] mb-4">
          {websiteData.hero.title}
        </h1>

        {/* paragraph */}
        <p className="text-[#FEFAE0]/80 max-w-2xl mt-4 text-lg sm:text-xl">
          {websiteData.hero.subtitle}
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full max-w-md mx-auto">
          <button className="px-6 py-3 bg-[#606C38] hover:bg-[#283618] rounded-full text-[#FEFAE0] font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            {websiteData.hero.cta.primary}
          </button>
          <button className="px-6 py-3 bg-[#FEFAE0]/10 border border-[#FEFAE0]/30 rounded-full text-[#FEFAE0] backdrop-blur-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
            {websiteData.hero.cta.secondary}
          </button>
        </div>
      </div>
    </section>
  );
}
