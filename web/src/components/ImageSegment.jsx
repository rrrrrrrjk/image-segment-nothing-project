import React from 'react'
import "../sass/components/ImageSegment.scss"

const Imagesegment = ({sentImage}) => {
  return (
    <>
        <img src={sentImage} alt="" className='Image-Segment'/>
    </>
  )
}

export default Imagesegment;