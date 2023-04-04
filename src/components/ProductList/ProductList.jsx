import React from 'react'
import './ProductList.scss'
import { STATUS } from '../../utils/status'
import { setModelData,setIsModelVisible } from '../../Store/modalslice'
import SingleProduct from '../SingleProduct/SingleProduct'
import { useSelector,useDispatch } from 'react-redux'
import { formatPrice } from '../../utils/helper'
import Loader from '../Loader/Loader'
import Error from '../Error/Error'

const ProductList = ({products,status}) => {
  return (
    <div>ProductList</div>
  )
}

export default ProductList