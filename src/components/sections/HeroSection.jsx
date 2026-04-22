import { Link } from "react-router-dom";
import { websiteData } from "../../data/websitedata";
import { useModal } from "../../contexts/ModalContext";
import Button from "../ui/Button.jsx";

export default function HeroSection() {
  const { openContactModal } = useModal();

  return (
    <section
      className="relative flex items-center justify-center min-h-[80vh] md:min-h-screen text-center bg-top bg-no-repeat bg-cover max-h-screen"
      style={{ backgroundImage: "url('/hero.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center px-4 w-full">
        {/* heading */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold max-w-4xl text-[#FEFAE0] mb-4 leading-tight">
          {websiteData.hero.title}
        </h1>

        {/* paragraph */}
        <p className="text-[#FEFAE0]/80 max-w-2xl mt-4 text-lg sm:text-xl">
          {websiteData.hero.subtitle}
        </p>

        {/* buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full max-w-md mx-auto">
          <Button
            variant="primary"
            size="lg"
            onClick={openContactModal}
            className="min-h-[48px] w-full sm:w-auto !shadow-xl"
          >
            {websiteData.hero.cta.primary}
          </Button>
          <Link
            to={`/project`}
            className="cursor-pointer px-6 py-3 bg-[#FEFAE0]/10 border border-[#FEFAE0]/30 rounded-full text-[#FEFAE0] backdrop-blur-sm font-medium shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 active:scale-95 focus:ring-2 focus:ring-[#FEFAE0]/50 w-full sm:w-auto min-h-[48px]"
          >
            {websiteData.hero.cta.secondary}
          </Link>
        </div> */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full max-w-md mx-auto">
          <Button
            variant="primary"
            size="lg"
            onClick={openContactModal}
            className="min-h-[48px] w-full sm:w-auto flex items-center justify-center px-6"
          >
            {websiteData.hero.cta.primary}
          </Button>

          <Link
            to="/project"
            className="flex items-center justify-center px-6 min-h-[48px] w-full sm:w-auto rounded-full bg-[#FEFAE0]/10 border border-[#FEFAE0]/30 text-[#FEFAE0] font-medium backdrop-blur-sm shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 active:scale-95 focus:ring-2 focus:ring-[#FEFAE0]/50"
          >
            {websiteData.hero.cta.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
