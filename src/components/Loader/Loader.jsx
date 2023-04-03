import React from 'react'
import { spineer } from '../../utils/images'
import './Loader.scss'
const Loader = () => {
  return (
    <div className="container py-5">
      <div className="flex flex-center loader">
        <img src={spineer} alt='loader'/>
      </div>
    </div>
  )
}

export default Loader