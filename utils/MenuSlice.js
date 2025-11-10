import { createSlice } from "@reduxjs/toolkit";

let MenuSlice=createSlice({
    name:"menuSlice",
    initialState:{
        isMenuOpen:false,
    },
    reducers:{
        toggleMenuIcon:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        }
    }
})
export let {toggleMenuIcon}=MenuSlice.actions;
export default MenuSlice.reducer