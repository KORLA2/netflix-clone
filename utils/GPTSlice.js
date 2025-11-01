import { createSlice } from "@reduxjs/toolkit";

let gptslice=createSlice({
    name:"gptSlice",
    initialState:{
        showgpt:false
    },
    reducers:{
    handleShowGPT:(state)=>{
      state.showgpt=!state.showgpt
    },
}
})

console.log(gptslice.reducer)
export let {handleShowGPT}=gptslice.actions;

export default gptslice.reducer;
