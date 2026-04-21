import React from "react";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

            <form id="contact-form" className="flex flex-col gap-4">
              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[#283618]">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="bg-white border border-[#62748e] text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 rounded-xl px-4 py-3 outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[#283618]">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="bg-white border border-[#62748e] text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 rounded-xl px-4 py-3 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* PHONE + WHATSAPP */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[#283618]">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    className="bg-white border border-[#62748e] text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 rounded-xl px-4 py-3 outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[#283618]">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter WhatsApp number"
                    className="bg-white border border-[#62748e] text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 rounded-xl px-4 py-3 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex flex-col gap-2">
                <label className="text-xs text-[#283618]">Address</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your address"
                  className="bg-white border border-[#62748e] text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 rounded-xl px-4 py-3 outline-none transition-colors"
                />
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-2">
                <label className="text-xs text-[#283618]">Message</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Write your message..."
                  className="bg-white border border-[#62748e] text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 rounded-xl px-4 py-3 outline-none transition-colors resize-vertical"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="bg-[#606C38] hover:bg-[#283618] text-[#FEFAE0] text-base py-3 rounded-lg transition-all duration-300 mt-2 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
