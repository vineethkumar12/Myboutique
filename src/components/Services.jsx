import React from "react";
import bgimage from "../assets/bgimageservices.webp";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
function Services() {
  // Services data
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: "Wedding Outfits",
      description:
        "We create stunning custom wedding outfits for brides and grooms, ensuring a perfect fit and timeless elegance.",
      image: img1, // Replace with your image
    },
    {
      id: 2,
      title: "Casual Wear",
      description:
        "From everyday wear to special occasions, we design comfortable and stylish casual outfits tailored to your preferences.",
      image: img2, // Replace with your image
    },
    {
      id: 3,
      title: "Alterations",
      description:
        "We provide expert alteration services to ensure your clothes fit perfectly and look their best.",
      image: img3, // Replace with your image
    },
  ];

  return (
    <div id="services">
      {/* Hero Section */}
      <header
        className="relative h-64 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg">
            Crafting perfection, one stitch at a time.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Full-width image with decreased height */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover" // Adjust height here (e.g., h-48)
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  {/* Optional: Add a CTA button for each service */}
                  <a
                    href="#contact" // Replace with the target link
                    className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            className=" bg-orange-500 mt-10 "
            onClick={() => navigate("/Moreservices")}
          >
            {" "}
            More Services
          </button>
        </div>
      </section>
      {/* Call-to-Action Banner */}
      <section className="p-8 md:p-16 bg-orange-500 text-white text-center flex items-center justify-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Stitch Your Perfect Outfit?
          </h2>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-white text-orange-500 px-6 py-3  cursor-pointer rounded-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
