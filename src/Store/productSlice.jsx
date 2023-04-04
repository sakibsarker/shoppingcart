import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

const productSlice=createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUS.IDLE,
    },
    reducers:{
        setProducts(state,action){
            state.data=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
        },
    }
    
})

export const {setProducts,setStatus}=productSlice.actions;
export default productSlice.reducer;

export const fetchProducts=()=>{
    return async function fetchProductThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        try{
            const res=await fetch(`${BASE_URL}products`);
            const data=await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUS.IDLE));
            console.log(`product list${data}`)

        }catch{
            dispatch(setStatus(STATUS.ERROR))
        }

    }
}