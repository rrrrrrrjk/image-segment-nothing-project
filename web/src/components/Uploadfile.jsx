import React, { useEffect, useState } from 'react'
import { setImageUrl } from '../state/ImageSegmentation/imageSlice';
import { useDispatch, useSelector } from 'react-redux';
// import imgData from '../constant/imageData';


const Uploadfile = () => {
  const dispatch = useDispatch();

  const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
  })

  const getImageUploaded = (file) => {
    if (!file) {
      // dispatch(setImageUrl(''));
      return;
    }

    fileToDataUri(file)
      .then(dataUri => {
        console.log(dataUri);
        dispatch(setImageUrl(dataUri));
        console.log(imageUrl.image.imageUrl);
      })
  }

  return (
    <div className="flex items-center justify-center w-full flex-col">
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-[100%] h-[225px] border-2 border-gray-700 border-dashed rounded-[28px] cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" onChange={(event) => getImageUploaded(event.target.files[0] || null)} />
      </label>
    </div>
  )
}

export default Uploadfile