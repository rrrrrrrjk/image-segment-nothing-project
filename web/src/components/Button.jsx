import React from 'react'
import arrowRight from "../assets/icons/arrow-right.svg"

const Button = () => {
  return (
    <button className='flex justify-center items-center gap-2 px-15 py-30 text-[18px] font-grifter text-white border-[#F54A7A] border-4 rounded-[17px] w-[205px] h-[58px] shadow-2xl'>
        Explore now
        <img src={arrowRight} alt="Right Arrow" className='w-7 h-7 stroke-white'/>
    </button>
  )
}

export default Button