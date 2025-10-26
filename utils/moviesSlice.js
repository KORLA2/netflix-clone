import { createSlice } from "@reduxjs/toolkit";

 let moviesSlice=createSlice({
 name:"movieSlice",
 initialState:{
    Trailer:null,
    nowPlaying:null ,
    
 },
reducers:{
    addnowPlayingMovies:(state,action)=>{
      state.nowPlaying=(action.payload)
    },
    addTrailer:(state,action)=>{
     state.Trailer=action.payload

    }
}

})

export let {addnowPlayingMovies,addTrailer}=moviesSlice.actions;
export default moviesSlice.reducer
