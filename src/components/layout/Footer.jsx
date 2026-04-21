<<<<<<< HEAD
import React from "react";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { websiteData } from "../../data/websitedata";

const iconMap = {
  FaTwitter: FaTwitter,
  FaInstagram: FaInstagram,
  FaYoutube: FaYoutube,
  FaLinkedin: FaLinkedin,
};
=======
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0a0908] py-12 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <div className="flex flex-wrap justify-between gap-12">
            {/* Logo + About */}
            <div className="w-full md:w-[30%]">
=======
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
            {/* Logo + About */}
            <div className="space-y-4">
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
              <img src="./logo.png" alt="" className="h-12" />

              <div className="w-40 h-px mt-6 bg-white/20" />
              <p className="text-sm text-white mt-5 leading-relaxed">
<<<<<<< HEAD
                {websiteData.footer.about}
              </p>
            </div>
            {/* Links */}
            <div className="w-full md:w-[15%]">
=======
                We design homes, shops, restaurants, and modern spaces with
                premium interior solutions.
              </p>
            </div>
            {/* Links */}
            <div className="space-y-2">
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
              <h3 className="text-md font-medium text-[#DDA15E]">
                Important Links
              </h3>
              <div className="flex flex-col gap-2 mt-4 text-white">
<<<<<<< HEAD
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
=======
                {["Home", "About", "Project", "Contact", "FAQ"].map(
                  (item) => (
                    <a
                      key={item}
                      href="/"
                      className="hover:text-[#DDA15E] transition-colors cursor-pointer"
                    >
                      {item}
                    </a>
                  ),
                )}
              </div>
            </div>
            {/* Social */}
            <div className="space-y-3">
              <h3 className="text-md font-medium text-[#DDA15E]">Social Links</h3>
              <div className="flex flex-col gap-3 mt-4 text-white">
                <a className="flex cursor-pointer items-center gap-2 hover:text-[#DDA15E] transition-colors">
                  <FaTwitter /> Twitter
                </a>
                <a className="flex cursor-pointer items-center gap-2 hover:text-[#DDA15E] transition-colors">
                  <FaInstagram /> Instagram
                </a>
                <a className="flex cursor-pointer items-center gap-2 hover:text-[#DDA15E] transition-colors">
                  <FaYoutube /> Youtube
                </a>
                <a className="flex cursor-pointer items-center gap-2 hover:text-[#DDA15E] transition-colors">
                  <FaLinkedin /> Linkedin
                </a>
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div className="w-full h-px bg-white/10 my-10" />
          <div className="flex flex-col md:flex-row justify-between text-xs text-white gap-4">
<<<<<<< HEAD
            <p>{websiteData.footer.copyright}</p>
=======
            <p>© 2026 EZZY Interior</p>
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
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
