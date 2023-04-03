import React from 'react'
import './Slider.scss'
import { slider_image_1 } from '../../utils/images'

const Slider = () => {
  return (
    <div className='hero-slider'>
      <div className="hero-slider-item">
      <img src={slider_image_1}/>
      </div>
     
    </div>
  )
}

export default Slider