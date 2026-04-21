<<<<<<< HEAD
import { websiteData } from "../../data/websitedata";

export default function Gallery() {
  const gallery = websiteData.gallery;
=======
export default function Gallery() {
  const gallery = [
    {
      title: "Modern Living Room",
      desc: "Elegant and minimal home interior with warm lighting.",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Luxury Restaurant",
      desc: "Premium dining space designed for comfort and style.",
      img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Clothing Store",
      desc: "Modern retail design to enhance customer experience.",
      img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Office Workspace",
      desc: "Creative workspace with productivity-focused layout.",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
    },
  ];
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578

  return (
    <section className="pt-10 pb-20 px-6">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-semibold text-[#283618]">
<<<<<<< HEAD
          {websiteData.sections.gallery.title}
        </h1>
        <p className="text-[#1a1423] mt-3 text-sm">
          {websiteData.sections.gallery.subtitle}
=======
          Our Creative Gallery
        </h1>
        <p className="text-[#1a1423] mt-3 text-sm">
          Explore our finest interior projects crafted with precision,
          creativity, and a modern aesthetic.
>>>>>>> 056a3c897da983d5ea813c9168f8894901f40578
        </p>
      </div>

      {/* Gallery */}
      <div className="flex gap-4 mt-14 max-w-6xl mx-auto h-[420px]">
        {gallery.map((item, index) => (
          <div
            key={index}
            className="relative group flex-grow w-56 transition-all duration-500 hover:w-full overflow-hidden rounded-2xl"
          >
            <img
              src={item.img}
              className="w-full h-full object-cover"
              alt={item.title}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#283618]/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6 text-[#FEFAE0]">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="text-sm mt-1 text-[#FEFAE0]/90">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
