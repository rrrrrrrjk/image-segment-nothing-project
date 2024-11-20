import React, { useEffect, useState } from 'react';
import "../sass/components/ImageSegment.scss";
import * as tf from '@tensorflow/tfjs';
import { useSelector } from 'react-redux';

const loadModel = async () => {
  const model = await tf.loadGraphModel('/model/model.json');
  return model;
}


const removeLastImage = () => {
  const predictedImage = document.getElementById("predictedImage");
  if (predictedImage) {
    predictedImage.parentNode.removeChild(predictedImage);
  }
  };


const arrayToImg = (arr, imgHeight, imgWidth) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  removeLastImage();

  // size the canvas to your desired image
  canvas.width = imgWidth;
  canvas.height = imgHeight;

  // get the imageData and pixel array fr
  const imgData = ctx.createImageData(imgWidth, imgHeight);

  // manipulate some pixel elements
  let ix = 0;
  for (let i = 0; i < imgWidth * imgHeight * 4; i += 4) {
    // if (arr[ix] > 0.5) {
    //   imgData.data[i + 1] = Math.round(arr[ix] * 255.0); // set every red pixel element to 255
    // }else{
    //   imgData.data[i] = 0; // set every red pixel element to 255
    // }
    // if (arr[ix] > 5) {
    //   imgData.data[i + 2] = Math.round(arr[ix] * 255.0); // set every red pixel element to 255
    //   // imgData.data[i + 3] = 255; // make this pixel opaque
    // }else{
    //   imgData.data[i + 3] = 255; // make this pixel opaque
    // }
    imgData.data[i + 0] = Math.round(arr[ix] * 255.0); // set every red pixel element to 255
    imgData.data[i + 3] = 255; // make this pixel opaque
    ix += 1;
  }


  // put the modified pixels back on the canvas
  ctx.putImageData(imgData, 0, 0);

  // create a new img object
  const image = new Image();

  // set the img.src to the canvas data url
  image.src = canvas.toDataURL();
  image.id = "predictedImage";
  image.height = imgHeight;
  image.width = imgWidth;
  image.style.opacity = 0.5;
  image.style.position = "absolute";
  image.style.top = "200";
  image.style.left = "200";

  // append the new img object to the page
  document.body.appendChild(image);
};



const Imagesegment = () => {
  const [model, setModel] = useState(null);
  const image = useSelector((state) => state.imageOriginal?.imageUrl);
  // 



  // 
  useEffect(() => {
    const loadAndSetModel = async () => {
      const loadedModel = await loadModel();
      setModel(loadedModel);
    };
    loadAndSetModel();
  }, []);

  useEffect(() => {
    if (model && image) {
      const img = new Image();
      img.src = image;
      img.onload = async () => {
        const tensor = tf.browser.fromPixels(img)
          .resizeBilinear([640, 640])
          .expandDims(0)
          .toFloat()
          .div(tf.scalar(255));
        try {
          const predictions = await model.predict(tensor);
          const predData = predictions[1].dataSync(); // Assuming the first tensor contains the data you need
          console.log(predData);
          arrayToImg(predData, 640, 640);
        } catch (e) {
          console.error(e);
        }
      };
    }
  }, [model, image]);

  return (
    <>
      <img src={image || null} alt="" className='Image-Segment' />
    </>
  )
}

export default Imagesegment;