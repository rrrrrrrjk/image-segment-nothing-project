import React from "react";
import Button from "../components/Button";
import hero from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex 2xl:flex-row flex-col 2xl:justify-between px-20 text-white 2xl:items-center"
    >
      <div className="flex flex-col 2xl:text-start text-center items-center justify-center 2xl:justify-between 2xl:items-start 2xl:w-2/5 w-full gap-5 mt-16 mb-16 2xl:mt-0 2xl:mb-0">
        <h1 className="font-grifter text-[32px] xl:text-[50px] text-nowrap">
          What are we doing ?
        </h1>
        <p className="font-inter xl:text-[20px] text-slate-400">
          Experience the Next Generation of Image Segmentation. Our advanced
          model seamlessly identifies and extracts flowers, cars, and animals
          from any image, offering clear, structured visuals for analysis,
          design, and AI development. Let our technology bring new insights and
          organization to your image processing.
        </p>
        <Button />
      </div>
      <div className="relative flex-1 flex 2xl:items-end items-center flex-col -space-y-3 group">
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
