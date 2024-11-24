import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/components/button.scss'

const Button = () => {

  return (
    <div className="button-container " id="buttonContainer">
      <Link to="/demo">
        <button className="explore-btn drop-shadow-2xl">
          
            <div className="text-container drop-shadow-2xl">
              <span className="static-text">Explore Now</span>
              <span className="hover-text" id="hoverText">Get Started</span>
            </div>
        </button>
      </Link>
   </div>
  )
}

export default Button