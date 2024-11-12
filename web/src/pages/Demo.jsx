import React from 'react'
import Uploadfile from '../components/Uploadfile'

export const Demo = () => {
  return (
    <section className='min-h-screen w-full flex justify-start items-center px-[50px]'>
      <div className='w-[262px] h-[594px] bg-white p-[8px] rounded-[41px] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60'>
        <Uploadfile/>
      </div>
      
    </section>
  )
}
export default Demo