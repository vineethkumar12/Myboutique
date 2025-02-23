import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes, FaSun, FaMoon, FaCut } from "react-icons/fa";

function Navbar({ setdark }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navLinks = [
    { id: 1, to: "home", text: "Home" },
    { id: 2, to: "about", text: "About" },
    { id: 3, to: "services", text: "Services" },
    { id: 4, to: "gallery", text: "Gallery" },
    { id: 5, to: "contact", text: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setdark(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full ${
        isSticky
          ? "bg-white dark:bg-gray-900 shadow-lg backdrop-blur-sm bg-opacity-90"
          : "bg-transparent"
      } transition-all duration-300 z-50`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left Side: Logo and Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaCut className="text-3xl text-orange-500" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-800 dark:text-white">
                Prabhakar
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Tailors
              </span>
            </div>
          </ScrollLink>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isDarkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-800" />
            )}
          </button>
        </div>

        {/* Right Side: Hamburger Menu (Mobile) and Navigation Links (Desktop) */}
        <div className="flex items-center space-x-6">
          {/* Hamburger Menu Icon (Mobile Only) */}
          <div
            className="block md:hidden text-2xl cursor-pointer"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Navigation Links */}
          <ul
            className={`  md:flex md:items-center md:space-x-6 ${
              isMobileMenuOpen
                ? "block absolute top-full -left-6 w-full  dark:bg-gray-900  py-4 shadow-lg"
                : "hidden"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.id} className="my-2 md:my-0">
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`block px-4 py-2 ${
                    isDarkMode ? "text-white" : "text-orange-500"
                  } hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-orange-500 rounded transition-colors cursor-pointer`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  activeClass="active"
                  spy={true}
                >
                  {link.text}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
