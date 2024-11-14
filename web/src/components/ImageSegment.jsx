import React, { useEffect } from 'react'
import "../sass/components/ImageSegment.scss"
import * as tf from '@tensorflow/tfjs';
import * as tfn from '@tensorflow/tfjs-node';


async function loadModels() {
  const handler = tfn.io.fileSystem('../Tensor/model.json');
  const model = await tf.loadLayersModel(handler);
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