<<<<<<< HEAD
import { websiteData } from "../../data/websitedata";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-screen text-center bg-[url('hero.jpeg')] bg-top bg-no-repeat bg-cover">
=======
export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-screen text-center bg-[url('hero.jpeg')] bg-top bg-no-repeat bg-cover">
      
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
      {/* 🔥 Overlay (MAIN FIX) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4">
<<<<<<< HEAD
        {/* heading */}
        <h1 className="text-4xl md:text-6xl font-semibold max-w-4xl text-[#FEFAE0]">
          {websiteData.hero.title}
=======
        
        {/* heading */}
        <h1 className="text-4xl md:text-6xl font-semibold max-w-4xl text-[#FEFAE0]">
          Unlock Growth with Proven Business Solutions
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
        </h1>

        {/* paragraph */}
        <p className="text-[#FEFAE0]/80 max-w-2xl mt-4">
<<<<<<< HEAD
          {websiteData.hero.subtitle}
=======
          Unlock potential with tailored strategies designed for success.
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
        </p>

        {/* buttons */}
        <div className="flex gap-3 mt-8 flex-wrap justify-center">
          <button className="px-6 py-2.5 bg-[#606C38] hover:bg-[#283618] rounded-full text-[#FEFAE0]">
<<<<<<< HEAD
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
=======
            Get Started
          </button>
          <button className="px-6 py-2.5 bg-[#FEFAE0]/10 border border-[#FEFAE0]/30 rounded-full text-[#FEFAE0] backdrop-blur-sm">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
