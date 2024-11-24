import React, { useState, useRef } from "react";
import { FaDownload } from "react-icons/fa6";
import "../sass/components/DownloadBtn.scss";
import "../sass/components/ImageSegment.scss";

import ReactCrop from "react-image-crop";
import "react-image-crop/src/ReactCrop.scss";


const DownloadBtn = ({ imageData, imageName, imageBox }) => {
  const [popUp, setPopUp] = useState("");

  const renderImage = () => {
    return (
        <img src={imageData} alt={imageName} className="popup-img" width="86px" height="auto"/>
    );
  };

  const handleLeave = () => {
    setPopUp("");
  };

  const handleHover = () => {
    setPopUp(renderImage());
  };


  const filename = imageName;
  const download = () => {
    fetch(imageData, {
      method: "GET",
      headers: {},
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${filename}.png`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error("Error downloading image:", error));
  };

  return (
    <>
      <button
        className="flex items-center w-[70%] flex-row justify-between bg-zinc-500 bg-opacity-65 p-3 rounded-3xl pl-6 pr-6 btn"
        onClick={download}
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
      >
        <p>{imageName}</p>
        <FaDownload />
        {popUp}
      </button>
    </>
  );
};

export default DownloadBtn;
