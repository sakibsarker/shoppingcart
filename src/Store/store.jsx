import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./CategorySlice";
import modalReducer from './modalslice'
import productReducer from './productSlice'
const store=configureStore({
    reducer:{
        category: categoryReducer,
        modal:modalReducer,
        product: productReducer,
    }
})

export default store;