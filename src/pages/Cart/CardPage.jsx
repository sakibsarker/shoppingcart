import React, { useEffect } from 'react'
import './CardPage'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart,getCartTotal,clearCart } from '../../Store/cartSlice'
import { formatPrice } from '../../utils/helper'
const CardPage = () => {
  const dispatch=useDispatch()
  const{data:cartProducts,totalItems,totalAmount,deliveryCharge}=useSelector(state=>state.cart);
  useEffect(()=>{
    dispatch(getCartTotal());

  },[useSelector(state=>state.cart)])

  const emtyCartMsg=<h4 className='text-red fw-6'>No items found!</h4>

  return (
    <div className="cart-page">
      <div className="container">
        <div className="breadcrumb">
          <ul className="breadcrumb-items flex">
            <li className='breadcrumb-item'>
              <Link to='/'>
                <i className='fas fa-home'></i>
                <span className='fas fa-chevron-right'></span>
              </Link>

            </li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <div className="bg-ghost-white py-5">
        <div className="container">
          <div className="section-title bg-ghost-white">
            <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
              Cart
            </h3>
          </div>
          {
            cartProducts.length===0?emtyCartMsg:(
              <div className="cart-content grid">
                <div className="cart-left">
                  <div className="cart-items grid">{
                    cartProducts.map(cartProduct=>(
                      <div className="cart-item grid" key={cartProduct.id}>
                        <div className="cart-tem-img flex flex-column bg-white">
                          <img src={cartProduct.images[0]} alt={cartProduct.title}/>
                          <button type='submit' className='btn-square rmv-from-cart-btn'>
                            <span className='btn-square-icon'>
                              <i className='fas fa-trash'></i>
                            </span>
                          </button>
                        </div>
                        <div className="cart-item-info">
                          
                        </div>

                      </div>
                    ))
                  }

                  </div>
                </div>

              </div>
            )

          }
        </div>
      </div>
    </div>
  )
}

export default CardPage