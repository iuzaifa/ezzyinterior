import React from "react";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { websiteData } from "../../data/websitedata";

const iconMap = {
  FaTwitter: FaTwitter,
  FaInstagram: FaInstagram,
  FaYoutube: FaYoutube,
  FaLinkedin: FaLinkedin,
};

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0a0908] py-12 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between gap-12">
            {/* Logo + About */}
            <div className="w-full md:w-[30%]">
              <img src="./logo.png" alt="" className="h-12" />

              <div className="w-40 h-px mt-6 bg-white/20" />
              <p className="text-sm text-white mt-5 leading-relaxed">
                {websiteData.footer.about}
              </p>
            </div>
            {/* Links */}
            <div className="w-full md:w-[15%]">
              <h3 className="text-md font-medium text-[#DDA15E]">
                Important Links
              </h3>
              <div className="flex flex-col gap-2 mt-4 text-white">
                {websiteData.footer.links.map((item) => (
                  <a
                    key={item}
                    href="/"
                    className="hover:text-[#DDA15E] transition-colors cursor-pointer"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            {/* Social */}
            <div className="w-full md:w-[15%]">
              <h3 className="text-md font-medium text-[#DDA15E]">
                Social Links
              </h3>
              <div className="flex flex-col gap-3 mt-4 text-white">
                {websiteData.footer.social.map(({ icon, label }) => {
                  const Icon = iconMap[icon];
                  return (
                    <a
                      key={label}
                      className="flex cursor-pointer items-center gap-2 hover:text-[#DDA15E] transition-colors"
                    >
                      <Icon />
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div className="w-full h-px bg-white/10 my-10" />
          <div className="flex flex-col md:flex-row justify-between text-xs text-white gap-4">
            <p>{websiteData.footer.copyright}</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#DDA15E] transition-colors">
                Terms
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[#DDA15E] transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
