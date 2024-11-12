import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/components/button.scss'

const Button = () => {
  return (
    <div class="button-container" id="buttonContainer">
      <Link to="/demo">
        <button class="explore-btn drop-shadow-2xl">
          
            <div class="text-container drop-shadow-2xl">
              <span class="static-text">Explore Now</span>
              <span class="hover-text" id="hoverText">Get Started</span>
            </div>
        </button>
      </Link>
   </div>
  )
}

export default Button