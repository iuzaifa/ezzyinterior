import React from "react";

const images = [
  [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  ],
  [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  ],
  [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  ],
  [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
  ],
];

const WorkGallary = () => {
  return (
    <section className="px-4 md:px-10 py-16 md:max-w-7xl lg:max-w-8xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((column, colIndex) => (
          <div key={colIndex} className="grid gap-4">
            {column.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-xl">
                <img
                  src={img}
                  alt="gallery"
                  className="h-auto max-w-full w-full object-cover rounded-xl hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkGallary;
