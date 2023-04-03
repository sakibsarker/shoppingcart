import { createSlice } from "@reduxjs/toolkit";
import {BASE_URL} from "../utils/apiURL"
import {STATUS} from "../utils/status";

const categorySlice=createSlice({
    name:'category',
    initialState:{
        data:[],
        status:STATUS.IDLE,
        catProductAll:[],
        carProductAllStatus:STATUS.IDLE,
        carProductSingleStatus:STATUS.IDLE

    },
    reducers:{
        setCategories(state,aciton){
            state.data=aciton.payload;
        },
        setStatus(state,aciton){
            state.status=aciton.payload;
        },
        setCategoriesProductAll(state,aciton){
            state.catProductAll.push(aciton.payload);
        },
        setCategoriesStatusAll(state,aciton){
            state.carProductAllStatus=aciton,payload;
        },
        setCategoriesProductSingle(aciton,payload){
            state.catProductAll=aciton.payload;
        },
        setCategoriesStatusSingle(state,aciton){
            state.carProductSingleStatus=aciton.payload;
        },
    }
})

export const{setCategories,setStatus,setCategoriesProductAll,setCategoriesStatusAll,setCategoriesProductSingle,setCategoriesStatusSingle
}=categorySlice.actions;

export default categorySlice.reducer;

export const fetchCategories=()=>{
    return async function fetchCategories(dispatch){
        dispatch(setStatus(STATUS.LOADING));
        try{
            const res=await fetch(`${BASE_URL}categories`);
            const data=await res.json()
            dispatch(setCategories(data.slice(0,5)));
            dispatch(setStatus(STATUS.IDLE))

        }catch(e){
            dispatch(setStatus(STATUS.e))

        }
    }
}