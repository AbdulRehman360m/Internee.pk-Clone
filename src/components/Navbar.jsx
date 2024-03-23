// Desc: Navbar component for the website

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-4 bg-white sticky top-0 z-10 w-full">
      <div className="flex relative container m-auto xl:max-w-6xl 2xl:max-w-7xl lg:max-w-5xl max-w-full justify-between lg:justify-normal px-4 sm:px-0 ">
        
        {/* Hamburger Menu Button */}
        <button
          className="text-gray-500 w-20 h-20 p-10 relative focus:outline-none bg-white lg:hidden order-3"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <div className="block w-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
        
        {/* Logo and Slogan */}
        <a
          className="navbar flex order-1 items-center lg:justify-center"
          href="index.html"
        >
          <img
            className="sm:w-20 w-14 mr-0"
            src="/1st-logo.jpg"
            alt="Logo"
          ></img>
          <div className="flex flex-col">
            <strong className="logo-text text-green-primary text-2xl sm:text-4xl ">
              Internee<span className="text-black">.pk</span>
            </strong>
            <small className="logo-slogan font-bold sm:text-xs text-[8px] leading-3 text-purple-primary">
              VIRTUAL INTERNSHIP PLATFORM
            </small>
          </div>
        </a>

        {/* Menu Links */}
        <div
          className={`lg:flex z-10 lg:flex-grow lg:justify-center lg:items-center order-2 absolute top-20 left-0 w-full lg:w-auto lg:static bg-white lg:bg-inherit  lg:pt-0 lg:pb-0 pt-5 pb-10   ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex items-center gap-4 xl:gap-10 text-xl font-thin flex-col lg:flex-row ">
            <li>
              <NavLink
                to="/"
                onClick={scrollToTop}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-purple-primary" : "text-text-primary"
                  } hover:text-purple-primary cursor-pointer`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={scrollToTop}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-purple-primary" : "text-text-primary"
                  } hover:text-purple-primary cursor-pointer`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/internships"
                onClick={scrollToTop}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-purple-primary" : "text-text-primary"
                  } hover:text-purple-primary cursor-pointer`
                }
              >
                Internships
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={scrollToTop}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-purple-primary" : "text-text-primary"
                  } hover:text-purple-primary cursor-pointer`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lms"
                onClick={scrollToTop}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-purple-primary" : "text-text-primary"
                  } hover:text-purple-primary cursor-pointer`
                }
              >
                LMS<sup>New</sup>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portal"
                onClick={scrollToTop}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-purple-primary" : "text-text-primary"
                  } hover:text-purple-primary cursor-pointer flex-grow`
                }
              >
                Job Portal<sup>Coming Soon</sup>
              </NavLink>
            </li>
            <li className="flex lg:hidden mt-5">
              <button className="py-2 text-white px-6 text-xl font-thin bg-purple-primary rounded-full ">
                Internee Portal
              </button>
            </li>
          </ul>
        </div>

        {/* Internee Portal Button */}
        <div className="order-2 lg:order-3 lg:items-center lg:flex hidden ">
          <button className="py-2 text-white px-6 text-xl font-thin bg-purple-primary rounded-full ">
            Internee Portal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
