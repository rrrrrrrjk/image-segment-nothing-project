import React from 'react'
import Button from '../components/Button'
import hero from '../assets/images/hero.png'

const Hero = () => {
  return (
    <section id="home" className='w-full min-h-screen flex justify-between px-20 text-white items-center'>
      <div className='flex flex-col justify-center items-start w-2/5 gap-5'>
        <h1 className='font-grifter text-[50px]'>What are we doing ?</h1>
        <p className='font-inter text-[20px] text-slate-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum atque maxime eveniet voluptatum ab debitis similique error dignissimos accusamus, ea illum sed quidem consectetur distinctio, nesciunt corrupti incidunt quis optio!</p>
        <Button/>
      </div>
      <div className='relative flex-1 flex items-end flex-col -space-y-3'>
        <img src={hero} alt="hero" className="w-[647px] h-[529px] object-cover rounded-[31px] shadow-[0_0_60px_20px] shadow-cyan-500/50"/>
        <div className='h-[33px] w-[647px] bg-black rounded-[8px] blur-[18px] '></div>
      </div>
    </section>
  )
}

export default Hero 