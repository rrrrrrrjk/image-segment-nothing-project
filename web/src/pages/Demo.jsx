import React from 'react'
import Uploadfile from '../components/Uploadfile'
import Imagesegment from '../components/ImageSegment'


import "../sass/components/ImageSegment.scss"

export const Demo = () => {

  return (
    <section className='min-h-screen w-full flex justify-start items-center px-[50px] gap-8'>
      <div className='w-[20%] min-w-[375px] h-[70vh] bg-white p-4 rounded-[44px] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60  overflow-auto upload--simple'>
        <Uploadfile />
      </div>
      <div className="image-segment-container flex justify-center items-center w-[100%]">
        <Imagesegment/>
      </div>
    </section>
  )
}
export default Demo