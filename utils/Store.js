import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice"
import moviesReducer  from "./moviesSlice"
import gptReducer from "./GPTSlice"
 let store= configureStore({
reducer:{
    userSlice:userReducer,
    movieSlice: moviesReducer,
    gptSlice:gptReducer
}
 });

 export default  store;