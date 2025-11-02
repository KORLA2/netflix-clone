import { createSlice } from "@reduxjs/toolkit";


let userSlice=createSlice({

    name:"userSlice",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
  return action.payload;
        },
        removeUser:(state,action)=>{
  return null;
        }
    }
})
export let {addUser,removeUser}=userSlice.actions;

export default userSlice.reducer;