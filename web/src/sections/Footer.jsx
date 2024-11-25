import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-t from-gray-800 to-transparent to-70% h-[20vh] flex justify-between flex-col'>
      <div className="aboutus-container flex justify-between p-8">
        <h1>About US</h1>
        <ul className='flex flex-col gap-2'>
          <l1 className="bg-slate-300 ">Jakkraphat Kattiya 6513110</l1>
          <l1 className="bg-slate-300 ">Thanakrit Chutiwongthanaphat 6513112</l1>
          <l1 className="bg-slate-300 ">Narawit pakkard 6513113</l1>
          <l1 className="bg-slate-300 ">Ananda Kongkoed 6513177</l1>
        </ul>
      </div>
      <p className='flex justify-center items-center font-inter w-full h-[5vh] py-2 text-slate-500'>Copyright © 2024 Mahidol University. All Rights Reserved.</p>
    </div>
  )
}

export default Footer