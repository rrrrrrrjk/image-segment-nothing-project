import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constant";

const Navbar = () => {
  return (
    <header>
      <nav className="flex px-20 justify-between py-5 bg-gradient-to-b from-gray-800 to-transparent to-70% text-white sticky top-0 z-50 w-full h-1/6">
        <div className="flex flex-col xl:-space-y-3 ">
          <h1 className="font-grifter xl:text-[32px] text-[22px] drop-shadow-md">
            Segment Nothing
          </h1> 
          <span className="font-inter text-[14px] xl:text-[16px] text-slate-400 drop-shadow-md">
            Research by SU team
          </span>
        </div>
        <ul className="xl:flex items-center list-none gap-40 font-grifter text-[16px] hidden md">
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
        <button class="group h-10 w-10 rounded-lg xl:hidden">
          <div class="grid justify-items-center gap-1.5">
            <span class="h-1 w-8 rounded-full bg-white transition group-hover:rotate-45 group-hover:translate-y-2.5 duration-300">
        
            </span>
            <span class="h-1 w-8 rounded-full bg-white group-hover:scale-x-0 transition duration-300">
              
            </span>
            <span class="h-1 w-8 rounded-full bg-white group-hover:-rotate-45 group-hover:-translate-y-2.5 duration-300">
              
            </span>
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
