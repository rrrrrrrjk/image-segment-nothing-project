import React from 'react'
import './background.css'

const Background = () => {
  return (
    <div className="blob-outer-container fixed inset-0 z-0 overflow-visible">
        <div className="blob-inner-container absolute inset-0 bg-[#161B3D] overflow-visible">
          <div className="blob w-screen h-screen absolute inset-0 blur-[50px] animate-spinblob overflow-visible"
               style={{
                   background: 'conic-gradient(from 0deg, #FC0FC0, #C020D0, #8432DF, #4743EF, #0B54FE)'
               }}>
          </div>
        </div>
      </div>
  )
}

export default Background