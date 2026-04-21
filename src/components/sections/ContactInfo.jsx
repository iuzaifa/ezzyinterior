import React from "react";
import { FiMail, FiPhone, FiHome } from "react-icons/fi";
<<<<<<< HEAD
import { websiteData } from "../../data/websitedata";

export default function ContactInfo() {
  const iconMap = {
    FiMail: FiMail,
    FiPhone: FiPhone,
    FiHome: FiHome,
  };

  const data = websiteData.contact.info.map(({ icon: iconName, ...rest }) => ({
    ...rest,
    icon: React.createElement(iconMap[iconName], {
      size: 26,
    }),
  }));

  return (
    <section className="bg-[#FEFAE0] py-16 px-4">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#283618] mb-12">
        {websiteData.sections.contactInfo.title}
=======

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
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
      </h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-6 flex items-start gap-5 shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
          >
<<<<<<< HEAD
=======
            
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
