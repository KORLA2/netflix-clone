import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice"
import moviesReducer  from "./moviesSlice"
import gptReducer from "./GPTSlice"
import languageReducer from "./userLanguageSlice"
 let store= configureStore({
reducer:{
    userSlice:userReducer,
    movieSlice: moviesReducer,
    gptSlice:gptReducer,
    langSlice:languageReducer
}
 });

 export default  store;