import { createSlice } from "@reduxjs/toolkit";

let gptslice=createSlice({
    name:"gptSlice",
    initialState:{
        showgpt:false,
        gptLoading:false,
        gptMovies:[]
    },
    reducers:{
    handleShowGPT:(state)=>{
      state.showgpt=!state.showgpt
    },
    handlegptLoading:(state)=>{
        state.gptLoading=!state.gptLoading
    },
    addgptMovies:(state,action)=>{
      state.gptMovies=action.payload
    }
}
})

export let {handleShowGPT,handlegptLoading,addgptMovies}=gptslice.actions;

export default gptslice.reducer;
