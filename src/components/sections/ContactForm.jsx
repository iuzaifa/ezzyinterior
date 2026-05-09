import React from "react";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SharedContactForm from "../ui/SharedContactForm";

const ContactForm = () => {
  return (
    <>
      <section className="bg-[#FEFAE0] px-4 py-24">
        <div className="w-full mx-auto flex flex-col md:flex-row max-md:items-center justify-center gap-12 md:gap-16">
          {/* LEFT SIDE */}
          <div className="flex flex-col mt-10">
            <p className="text-sm max-md:text-center font-medium text-[#283618] uppercase mb-2">
              Get In Touch
            </p>

            <h1 className="text-5xl/14 max-md:text-center font-bold text-[#283618] max-w-xs mb-4">
              Let's build something real.
            </h1>

            <p className="text-base text-[#283618] max-md:text-center max-w-xs">
              Let's turn your ideas into meaningful products that solve real
              problems and create real impact.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center max-md:justify-center gap-4 mt-7 text-[#283618]">
              <FaLinkedinIn
                size={18}
                className="cursor-pointer hover:text-[#606C38]"
              />
              <FaXTwitter
                size={18}
                className="cursor-pointer hover:text-[#606C38]"
              />
              <FaInstagram
                size={18}
                className="cursor-pointer hover:text-[#606C38]"
              />
              <FaYoutube
                size={18}
                className="cursor-pointer hover:text-[#606C38]"
              />
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="w-full max-w-xl bg-white border border-[#62748e]/50 rounded-2xl p-8">
            <h2 className="text-base font-medium text-[#283618] mb-6">
              Send Message
            </h2>

            <SharedContactForm variant="page" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;

