import React, { useState } from 'react'
import './SingleProduct.scss'
import { useSelector,useDispatch } from 'react-redux'
import { formatPrice } from '../../utils/helper'
import { setIsModalVisible } from '../../Store/modalslice'
import { addToCart } from '../../Store/cartSlice'
import { useNavigate } from 'react-router-dom'
const SingleProduct = () => {
  const dispatch=useDispatch();
  const[qty,setQty]=useState(1)
  const navigate=useNavigate();
  const {data:product}=useSelector(state=>state.modal)
  const increaseQty=()=>{
    setQty((preQty)=>{
      let newQty=preQty+1;
      return newQty;
    })
  }

  const decreaseQty=()=>{
    setQty((preQty)=>{
      let newQty=preQty-1;
      if(newQty<1){
        newQty=1
      }
      return newQty;
    })

  }

  const addToCartHandler=product=>{
    let totalPrice=qty*product.price;
    const tempProduct={
      ...product,
      quantity:qty,
      totalPrice,
    }
    dispatch(addToCart(tempProduct))
    dispatch(setIsModalVisible(false))
    navigate('/cart');
  }


  return (
    <div className="overlay-bg">
      <div className="product-details-modal bg-white">
        <button onClick={()=>dispatch(setIsModalVisible(false))} type='button' className='modal-close-btn flex flex-center fs-15'>
          <i className='fas fa-times'></i>

        </button>
        <div className="details-content grid">
          <div className="details-left">
            <div className="details-img">
              <img src={product.images[0]} alt={product.title}/>
            </div>
          </div>
          <div className="details-right">
            <div className="details-info">
              <h3 className="title text-regal-blue fs-22 fw-5">
                {product.title}

              </h3>
              <p className='description text-pine-green'>{product.description}</p>
            <div className="price fw-7 fs-24">Price: {formatPrice(product.price)}
            </div>
            <div className="qty flex">
              <span className='text-light-blue qty-text'>Qty:
               
              </span>
              <div className="qty-change flex">
              <button type='button' className='qty-dec fs-14 text-light-blue'
              onClick={()=>decreaseQty()}>
                <i className='fas fa-minus text-light-blue'></i>
              </button>
              <span className='qty-value flex flex-center'>{qty}</span>
              <button type='button' className='qty-inc fs-14 text-light-blue'
              onClick={()=>increaseQty()}>
                <i className='fas fa-plus'></i>
              </button>

              </div>


            </div>
            <button type='button' className='btn-primary'
            onClick={()=>addToCartHandler(product)}>
              <span className='btn-icon'>
                <i className='fas fa-cart-shopping'></i>
              </span>
              <span className='btn-text' >Add to Cart</span>
            </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}



export default SingleProduct