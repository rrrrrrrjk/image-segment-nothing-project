import React from 'react'
import Uploadfile from '../components/Uploadfile'
import Image from '../components/Image'
import Options from '../components/Options'

const Model = () => {
  return (
    <section className='h-auto w-full flex justify-center items-center px-[50px] space-x-[38px]'>
        <div className='w-[262px] h-[594px] bg-inherit shadow-[6px_6px_30px] p-[8px] rounded-[41px] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 brightness-125 flex flex-col justify-start items-center space-y-3'>
          <Uploadfile/>
          <Options/>
        </div>
        <Image/>
    </section>
  )
}

export default Model