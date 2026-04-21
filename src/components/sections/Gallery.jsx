import { websiteData } from "../../data/websitedata";

export default function Gallery() {
  const gallery = websiteData.gallery;

  return (
    <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#283618]">
          {websiteData.sections.gallery.title}
        </h1>
        <p className="text-[#1a1423] mt-3 text-sm sm:text-base">
          {websiteData.sections.gallery.subtitle}
        </p>
      </div>

      {/* Gallery Grid - MOBILE RESPONSIVE FIX */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {gallery.map((item, index) => (
          <div
            key={index}
            className="relative group h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <img
              src={item.img}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt={item.title}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#283618]/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 sm:p-6 text-[#FEFAE0]">
              <h2 className="text-xl sm:text-2xl font-semibold mb-1">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base text-[#FEFAE0]/90">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
