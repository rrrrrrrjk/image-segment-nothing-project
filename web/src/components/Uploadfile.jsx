import React, { useState } from 'react'

const Uploadfile = () => {
  const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
    })

    const [dataUri, setDataUri] = useState('')

    const onChange = (file) => {
      
      if(!file) {
        setDataUri('');
        return;
      }
  
      fileToDataUri(file)
        .then(dataUri => {
          setDataUri(dataUri)
        })
    }
      


  return (
    <div className="flex items-center justify-center w-full flex-col ">
      <div className='w-[242px] h-[135px] flex justify-center items-center bg-[#D9D9D9] rounded-[28px] hover:shadow-[0_0_50px] hover:shadow-[#F54A7A] hover:scale-110 transition ease-in-out duration-500'>
        <label for="dropzone-file" className="flex flex-col items-center justify-center w-[230px] h-[124px] border-2 border-black border-dashed rounded-[26px] cursor-pointer bg-inherit">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-[50px] h-[50px] mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className=" text-sm text-black font-grifter text-[12px] ">Upload Your Image or Select File</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" onChange={(event) => onChange(event.target.files[0] || null)}/>
        </label>
      </div>
        <img width="200" height="200" src={dataUri} alt="avatar" className='p-4'/>
    </div> 
  )
}

export default Uploadfile