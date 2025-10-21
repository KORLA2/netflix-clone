import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
 let store= configureStore({
reducer:{
    userSlice:userReducer,

}
 });

 export default  store;