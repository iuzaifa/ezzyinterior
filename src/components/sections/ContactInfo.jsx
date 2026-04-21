import React from "react";
import { FiMail, FiPhone, FiHome } from "react-icons/fi";

export default function ContactInfo() {
  const data = [
    {
      icon: <FiMail size={26} />,
      title: "Email Address",
      content: [
        "info@ezzyinterior.com",
        "support@ezzyinterior.com",
      ],
    },
    {
      icon: <FiPhone size={26} />,
      title: "Phone Number",
      content: [
        "+91 98765 43210",
        "+91 91234 56789",
      ],
    },
    {
      icon: <FiHome size={26} />,
      title: "Office Address",
      content: [
        "EZZY Interior, 2nd Floor, Design Plaza,",
        "MG Road, Near City Center Mall,",
        "Lucknow, Uttar Pradesh - 226010",
      ],
    },
  ];

  return (
    <section className="bg-[#FEFAE0] py-16 px-4">
      
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#283618] mb-12">
        Office Near You.
      </h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-6 flex items-start gap-5 shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
          >
            
            {/* Icon */}
            <div className="min-w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#606C38] text-[#FEFAE0]">
              {item.icon}
            </div>

            {/* Content */}
            <div className="flex-1 border-l border-[#DDA15E] pl-4">
              <h3 className="text-xl font-semibold text-[#283618] mb-2">
                {item.title}
              </h3>

              {item.content.map((line, idx) => (
                <p key={idx} className="text-sm text-[#62748e] leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}