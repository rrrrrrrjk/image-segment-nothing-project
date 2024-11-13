import React from "react";
import { useSelector } from "react-redux";

const Image = () => {
  const image = useSelector(state => state.image)
  console.log(image)
  return (
    <div className="w-[1013px] h-[782px] flex justify-center items-center drop-shadow-lg bg-inherit shadow-[6px_6px_30px] rounded-2xl  backdrop-filter backdrop-blur-md bg-opacity-60 brightness-125">
      <img src={image} alt="output image" className="rounded-2xl scale-150" />
    </div>
  );
};

export default Image;
