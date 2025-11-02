import { createSlice } from "@reduxjs/toolkit";

let userLanguageSlice=createSlice({
    name:"langSlice",
    initialState:{
        language:"en"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.language=action.payload
        }
    }
})

export let{changeLanguage}=userLanguageSlice.actions;
export default userLanguageSlice.reducer