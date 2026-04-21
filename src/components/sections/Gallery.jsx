import { websiteData } from "../../data/websitedata";

export default function Gallery() {
  const gallery = websiteData.gallery;

  return (
    <section className="pt-10 pb-20 px-6">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-semibold text-[#283618]">
          {websiteData.sections.gallery.title}
        </h1>
        <p className="text-[#1a1423] mt-3 text-sm">
          {websiteData.sections.gallery.subtitle}
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
