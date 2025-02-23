import React, { useState } from "react";
import bgimage from "../assets/bgimageservices.webp";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
function Gallery() {
  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: img1, // Replace with your image
      alt: "Wedding Outfit 1",
    },
    {
      id: 2,
      src: img2, // Replace with your image
      alt: "Casual Wear 1",
    },
    {
      id: 3,
      src: img3, // Replace with your image
      alt: "Alterations 1",
    },
    {
      id: 4,
      src: bgimage, // Replace with your image
      alt: "Wedding Outfit 2",
    },
    {
      id: 5,
      src: "https://via.placeholder.com/400x500", // Replace with your image
      alt: "Casual Wear 2",
    },
    {
      id: 6,
      src: "https://via.placeholder.com/400x500", // Replace with your image
      alt: "Alterations 2",
    },
  ];

  // State for lightbox (optional)
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open lightbox (optional)
  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  // Function to close lightbox (optional)
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Gallery
        </h2>
        {/* Flexbox Gallery */}
        <div className="flex flex-wrap justify-center gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 max-w-sm overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => openLightbox(image)} // Optional: Open lightbox on click
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
              {/* Optional: Add a caption or overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox (optional) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-3xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className=" w-full h-96 rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-white text-gray-900 rounded-full p-2 hover:bg-gray-100 transition-colors"
              onClick={closeLightbox}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
