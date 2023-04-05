import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const fetchFromLocalStorage=()=>{
  let cart=localStorage.getItem('cart');
  if(cart){
    return JSON.parse(localStorage.getItem('cart'));
  }else{
    return [];
  }
}

const storeInLocalStorage=data=>{
  localStorage.setItem('cart',JSON.stringify(data));
}

const CartSlice =createSlice({
  name:'cart',
  initialState:{
    data:fetchFromLocalStorage(),
    totalItems:0,
    totalAmout:0,
    deliveryCharge:100
  },
  reducers:{
    addToCart(state,action){
      const tempItem=state.data.find(item=>item.id===action.payload.id);
      if(tempItem){
        const tempCart=state.data.map(item=>{
          if(item.id===action.payload.id){
            let newQty=item.quantity + action.payload.quantity;
            let newTotalPrice=newQty*item.price;
            return{
              ...item,quantity:newQty,totalPrice:newTotalPrice
            };
          }
          else{
            return item;
          }
        })
        state.data=tempCart;
        storeInLocalStorage(state.data);
      
      }
      else{
        state.data.push(action.payload);
        storeInLocalStorage(state.data);
      }
    },
    removeFromCart(state,aciton){
      const tempCart=state.data.filter(item=>item.id!==aciton.payload);
      state.data=tempCart;
      storeInLocalStorage(state.data);
    },
    clearCart(state){
      state.data=[];
      storeInLocalStorage(state.data);
    },
    getCartTotal(state){
      state.totalAmout=state.data.reduce((cartTotal,cartItem)=>{
        return cartTotal+=cartItem.totalPrice;
      },0);
      state.totalItems=state.data.length;
    }
  }
})
export const{addToCart,removeFromCart,getCartTotal,clearCart}=CartSlice.actions;
export default CartSlice.reducer;