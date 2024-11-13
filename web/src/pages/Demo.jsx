import React, { useEffect, useState } from 'react'
import Uploadfile from '../components/Uploadfile'
import Imagesegment from '../components/ImageSegment'

import "../sass/components/ImageSegment.scss"

export const Demo = () => {
  const [dataUri, setDataUri] = useState('');

  const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
  })

  const getImageUploaded = (file) => {
    if (!file) {
      setDataUri('');
      return;
    }

    fileToDataUri(file)
      .then(dataUri => {
        setDataUri(dataUri)
      }).then(() => {
        const newImages = [...images, dataUri];
        this.setState({ images: newImages });
      })
  }

    // const download = (e) => {
  //   fetch(e.target.href, {
  //     method: 'GET',
  //     headers: {}
  //   })
  //     .then(response => {
  //       response.arrayBuffer().then(function (buffer) {
  //         const url = window.URL.createObjectURL(new Blob([buffer]));
  //         const link = document.createElement('a');
  //         link.href = url;
  //         link.setAttribute('download', 'image.jpg');
  //         document.body.appendChild(link);
  //         link.click();
  //       });
  //     })
  //   };

  return (
    <section className='min-h-screen w-full flex justify-start items-center px-[50px] gap-8'>
      <div className='w-[20%] min-w-[375px] h-[70vh] bg-white p-[8px] rounded-[41px] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60'>
        <Uploadfile getImageUploaded={getImageUploaded}/>
        {/* <a href={dataUri} download onClick={e => download}>click here</a> */}
      </div>
      <div className="image-segment-container flex justify-center items-center w-[100%]">
        <Imagesegment sentImage={dataUri}/>
      </div>
    </section>
  )
}
export default Demo