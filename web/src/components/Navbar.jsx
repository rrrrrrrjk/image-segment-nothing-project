import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constant";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-40">
      <nav className="flex px-20 justify-between py-5 bg-gradient-to-b from-gray-800 to-transparent to-70% text-white z-50 w-full h-1/6">
        <div className="flex flex-col xl:-space-y-3 ">
          <h1 className="font-grifter text-[22px] xl:text-[32px] drop-shadow-md">
            Segment Nothing
          </h1>
          <span className="font-inter text-[10px] xl:text-[16px] text-slate-400 drop-shadow-md">
            Research by Su team
          </span>
        </div>
        <ul className="xl:flex items-center list-none gap-40 font-grifter text-[16px] hidden">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className='after:content-[""] after:block after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 ease-in-out'
            >
              <Link to={item.link} className="drop-shadow-xl">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Hamburger Menu */}
        <div className="relative xl:hidden">
          <button
            className="flex flex-col justify-center items-center cursor-pointer space-y-1"
            onClick={toggleDropdown}
          >
            <div
              className={`w-6 h-1 bg-white rounded-full transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-white rounded-full transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-white rounded-full transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
          {isOpen && (
            <div
              className={`absolute right-0 mt-2 w-48 bg-inherit backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg shadow-lg z-20 transition-all ease-in-out duration-300  ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
            >
              <ul className="flex flex-col font-grifter">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.link}
                      className='px-4 py-1 after:content-[""] after:block after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 ease-in-out'
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
