import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { websiteData } from "../../data/websitedata";

const FloatingContact = () => {
  const phoneNumber = websiteData.contact.floatingPhone;
  const message = "Hello, I want to know more about your services";

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      {/* WHATSAPP */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-13 h-13 rounded-full bg-green-600 hover:bg-green Asc-500 text-[#ffff] shadow-lg transition transform hover:scale-110"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* PHONE */}
      <a
        href={`tel:+${phoneNumber}`}
        className="flex items-center justify-center w-13 h-13 rounded-full bg-white border  text-blue-600 shadow-lg transition transform hover:scale-110"
      >
        <FaPhoneAlt size={24} />
      </a>
    </div>
  );
};

export default FloatingContact;
