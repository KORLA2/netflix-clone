import { createSlice } from "@reduxjs/toolkit";


let userSlice=createSlice({

    name:"userSlice",
    initialState:{
        user:null
    },
    reducers:{
        addUser:(state,action)=>{
        state.user=action.payload
        },
        removeUser:(state,action)=>{
     state.user=null;
        }
    }
})
export let {addUser,removeUser}=userSlice.actions;

export default userSlice.reducer;