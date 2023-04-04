import { createSlice } from "@reduxjs/toolkit";
import {BASE_URL} from "../utils/apiURL"
import {STATUS} from "../utils/status";

const categorySlice=createSlice({
    name:'category',
    initialState:{
        data:[],
        status:STATUS.IDLE,
        catProductAll:[],
        catProductAllStatus:STATUS.IDLE,
        catProductSingle:[],
        catProductSingleStatus:STATUS.IDLE,

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
            state.catProductAllStatus=aciton.payload;
        },
        setCategoriesProductSingle(state,aciton){
            state.catProductAll=aciton.payload;
        },
        setCategoriesStatusSingle(state,aciton){
            state.catProductSingleStatus=aciton.payload;
        },
    }
})

export const{setCategories,setStatus,setCategoriesProductAll,setCategoriesStatusAll,setCategoriesProductSingle,setCategoriesStatusSingle
}=categorySlice.actions;

export default categorySlice.reducer;

export const fetchCategories=()=>{
    return async function fetchCategoriesThunk(dispatch){
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

export const fetchProductsByCategory=(categoryID,dataType)=>{
    return async function fetchCategoryProductThunk(dispatch){
        if(dataType==='all')dispatch(setCategoriesStatusAll(STATUS.LOADING));
        if(dataType==='single')dispatch(setCategoriesStatusSingle(STATUS.LOADING));
        
        try{
           const res=await fetch(`${BASE_URL}categories/${categoryID}/products`);
           const data=await res.json()
           
           if(dataType==='all'){
            dispatch(setCategoriesProductAll(data.slice(0,10)));
            dispatch(setCategoriesStatusAll(STATUS.IDLE));
           }
           if(dataType==='single'){
            dispatch(setCategoriesProductSingle(data.slice(0,20)));
            dispatch(setCategoriesStatusSingle(STATUS.IDLE));
           }

        }catch(e){
            if(dataType==='all')dispatch(setCategoriesStatusAll(STATUS.e));
            if(dataType==='single')dispatch(setCategoriesStatusSingle(STATUS.e));


        }
    }

}