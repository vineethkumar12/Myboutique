import React from "react";
import men from "../assets/men.webp";
import { Link } from "react-scroll";
function About() {
  return (
    <div className="py-16 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          About Us
        </h2>

        {/* Split Layout: Text + Image */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 ">
          {/* Image */}
          <div className=" w-96 h-full">
            <img
              src={men} // Replace with your image
              alt="Prabhakar Tailors"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Text Content */}
          <div className="md:w-1/2">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Prabhakar Tailors has been serving the community for over 30
              years. Our mission is to provide high-quality, custom-tailored
              outfits that fit perfectly and reflect your unique style.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With decades of experience, we specialize in creating custom-fit
              dresses for all occasions. From wedding outfits to casual wear, we
              ensure perfection in every stitch.
            </p>
            <div className="text-center md:text-left">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="inline-block px-6 py-3 cursor-pointer bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Visit Us Today!
              </Link>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {/* Timeline Item 1 */}
              <div className="flex items-center w-full">
                <div className="w-1/2 pr-8 text-right">
                  <p className="text-lg font-semibold text-gray-900">1990</p>
                  <p className="text-gray-600">Established Prabhakar Tailors</p>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="w-6 h-6 bg-orange-500 rounded-full mx-auto"></div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-center w-full">
                <div className="w-1/2 pr-8 text-right">
                  <div className="w-6 h-6 bg-orange-500 rounded-full mx-auto"></div>
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-lg font-semibold text-gray-900">2005</p>
                  <p className="text-gray-600">First Wedding Outfit Stitched</p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-center w-full">
                <div className="w-1/2 pr-8 text-right">
                  <p className="text-lg font-semibold text-gray-900">2020</p>
                  <p className="text-gray-600">Expanded to Online Services</p>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="w-6 h-6 bg-orange-500 rounded-full mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
