import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./CategorySlice";
import modalReducer from './modalslice'
import productRdcuer from './productSlice'
const store=configureStore({
    reducer:{
        category: categoryReducer,
        modal:modalReducer,
        product: productRdcuer,
    }
})

export default store;