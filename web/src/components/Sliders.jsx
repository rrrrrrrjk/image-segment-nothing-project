import React from "react";
import { sliderImg } from "../constant";

const Sliders = () => {
  return (
    <>
      <div className="flex flex-nowrap space-x-[8px] overflow-hidden">
        <ul className="flex flex-nowrap space-x-[8px] animate-loop-scroll hover:pause ">
          {sliderImg.map((item, index) => (
            <li
              key={index}
              className="w-[240px] h-[300px] hover:scale-125 transition-all ease-in-out flex items-center "
            >
              <img
                src={item}
                alt="slider"
                className="rounded-[28px] h-[240px] hover:drop-shadow-lg"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-nowrap space-x-[8px] overflow-hidden -mt-8">
        <ul className="flex flex-nowrap space-x-[8px] animate-rev-loop-scroll hover:pause">
          {sliderImg.map((item, index) => (
            <li
              key={index}
              className="w-[240px] h-[300px] hover:scale-125 flex items-center transition-all ease-in-out"
            >
              <img
                src={item}
                alt="slider"
                className="rounded-[28px] h-[240px] hover:drop-shadow-lg"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sliders;
