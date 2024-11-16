import React, { useEffect } from 'react'
import "../sass/components/ImageSegment.scss"
import * as tf from '@tensorflow/tfjs';


async function loadModels() {
  const model = await tf.loadLayersModel('https://raw.githubusercontent.com/rrrrrrrjk/image-segment-nothing-project/refs/heads/ley/python/Model/model.json?token=GHSAT0AAAAAACZ6MYACFSLGWKVVDI5B2C5UZZWGAYQ');
  return model
}

const Imagesegment = ({ sentImage }) => {
  useEffect(() => {
    const model = loadModels();
    model.then((model) => {
      model.estimateFaces(sentImage).then((predictions) => {
        console.log(predictions);
      });
    });
  }, [sentImage]);



  return (
    <>
      <img src={sentImage} alt="" className='Image-Segment' />
    </>
  )
}

export default Imagesegment;