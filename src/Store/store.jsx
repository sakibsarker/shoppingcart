import { configureStore } from "@reduxjs/toolkit";
// import categoryReducer from "./CategorySlice";
import CategorySlice from "./categorySlice";
import modalReducer from './modalslice'
// import productReducer from './productSlice'
import productSlice from "./productSlice";
import cartReducer from './cartSlice'
const store=configureStore({
    reducer:{
        category:CategorySlice,
        // category: categoryReducer,
        modal:modalReducer,
        product:productSlice,
        // product: productReducer,
        cart: cartReducer,
    }
})

export default store;