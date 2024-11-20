import React, { useEffect } from 'react'
import "../sass/components/ImageSegment.scss"
import * as tf from '@tensorflow/tfjs';
import { useSelector } from 'react-redux';

async function loadModels() {
  const model = await tf.loadLayersModel('https://raw.githubusercontent.com/rrrrrrrjk/image-segment-nothing-project/refs/heads/ley/python/Model/model.json?token=GHSAT0AAAAAACZ6MYACFSLGWKVVDI5B2C5UZZWGAYQ');
  return model
}

const Imagesegment = () => {
  const image = useSelector((state) => state.image?.imageUrl);

  // useEffect(() => {
  //   const model = loadModels();
  //   model.then((model) => {
  //     model.estimateFaces(image).then((predictions) => {
  //       console.log(predictions);
  //     });
  //   });
  // }, [image]);

  return (
    <>
      <img src={image || null} alt="" className='Image-Segment' />
    </>
  )
}

export default Imagesegment;