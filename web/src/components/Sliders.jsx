import React from 'react'
import { sliderImg } from '../constant'

const Sliders = () => {
    return (
        <div className="flex flex-nowrap h-2/5 space-x-[8px]">
          <ul className="flex flex-nowrap items-center justify-center space-x-[8px] animate-loop-scroll">
            {sliderImg.map((item, index) => (
                <li key={index}>
                    <img
                      src={item}
                      alt="slider"
                      className="rounded-[28px] w-[240px] h-[240px]"
                    />
                </li>
            ))}
          </ul>
          <ul className="flex flex-nowrap items-center justify-center space-x-[8px] animate-loop-scroll" aria-label='true'>
            {sliderImg.map((item, index) => (
                <li key={index}>
                    <img   
                        src={item}
                        alt="slider"
                        className="rounded-[28px] w-[240px] h-[240px]"
                    />
                </li>
            ))}
          </ul>
        </div>
      );
}

export default Sliders