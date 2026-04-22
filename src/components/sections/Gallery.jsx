import { useState, useCallback } from "react";
import { websiteData } from "../../data/websitedata";
import { FiX } from "react-icons/fi";

export default function Gallery() {
  const gallery = websiteData.gallery;
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = useCallback(
    (item) => {
      setSelectedImage(item);
    },
    [setSelectedImage],
  );

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

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

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {gallery.map((item, index) => (
          <div
            key={index}
            className="relative group h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            onClick={() => openModal(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && openModal(item)}
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

      {/* Modal Overlay - Fixed positioning outside grid */}
      {selectedImage && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
            onClick={closeModal}
          />
          {/* Modal Content */}
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl max-w-4xl max-h-[90vh] w-full h-fit p-8 relative mx-auto my-auto shadow-2xl border border-white/50">
              <button
                className="absolute -top-4 -right-4 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all cursor-pointer z-10"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <FiX size={24} />
              </button>
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                className="w-full h-[60vh] md:h-[75vh] object-contain rounded-2xl shadow-2xl mx-auto block"
              />
              <div className="mt-6 text-center px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#283618] mb-3">
                  {selectedImage.title}
                </h2>
                <p className="text-base md:text-lg text-[#1a1423] leading-relaxed">
                  {selectedImage.desc}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
