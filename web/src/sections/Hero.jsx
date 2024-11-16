import React from "react";
import Button from "../components/Button";
import hero from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex xl:flex-row flex-col xl:justify-between px-20 text-white xl:items-center"
    >
      <div className="flex flex-col xl:text-start text-center items-center justify-center xl:justify-between xl:items-start xl:w-2/5 w-full gap-5 mt-16 mb-16 xl:mt-0 xl:mb-0">
        <h1 className="font-grifter text-[32px] xl:text-[50px]">
          What are we doing ?
        </h1>
        <p className="font-inter xl:text-[20px] text-slate-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          atque maxime eveniet voluptatum ab debitis similique error dignissimos
          accusamus, ea illum sed quidem consectetur distinctio, nesciunt
          corrupti incidunt quis optio!
        </p>
        <Button />
      </div>
      <div className="relative flex-1 flex xl:items-end items-center flex-col -space-y-3 group">
        <img
          src={hero}
          alt="hero"
          className="w-[375px] h-[307px] lg:w-[647px] lg:h-[529px] object-cover rounded-[31px] shadow-[0_0_60px_20px] shadow-cyan-500/50"
        />
        <div className="h-[33px] lg:w-[647px] w-[375px] bg-black rounded-[8px] blur-[18px] "></div>
        
      </div>
    </section>
  );
};

export default Hero;
