import React from 'react'
import './Error.scss'
import { error_image } from '../../utils/images'
const Error = () => {
  return (
    <div className="container py-5">
      <div className="flex flex-center error" >
        <img src={error_image} alt='error'/>
      </div>
    </div>
  )
}

export default Error