import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice"
import moviesReducer  from "./moviesSlice"
 let store= configureStore({
reducer:{
    userSlice:userReducer,
    movieSlice: moviesReducer
}
 });

 export default  store;