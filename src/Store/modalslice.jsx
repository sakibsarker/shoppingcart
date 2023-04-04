import { createSlice } from "@reduxjs/toolkit";
const modalSlice=createSlice({
    name:'modal',
    initialState:{
        data:[],
        isModelVisible:false,
    },
    reducers:{
        setModelData(state,action){
            state.date=action.payload
        },
        setIsModelVisible(state,action){
            state.isModelVisible=action.payload
        }

    }
})

export const {setModelData,setIsModelVisible}=modalSlice.actions;
export default modalSlice.reducer;