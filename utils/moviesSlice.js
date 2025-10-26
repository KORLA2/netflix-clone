import { createSlice } from "@reduxjs/toolkit";

 let moviesSlice=createSlice({
 name:"movieSlice",
 initialState:{
    Trailer:null,
    nowPlaying:null ,
    popularMovies:null,
    trendingMovies:null,
    upComingMovies:null,

 },
reducers:{
    addnowPlayingMovies:(state,action)=>{
      state.nowPlaying=(action.payload)
    },
    addTrailer:(state,action)=>{
     state.Trailer=action.payload

    },
    addPopularMovies:(state,action)=>{
        state.popularMovies=action.payload
    },
     addTrendingMovies:(state,action)=>{
        state.trendingMovies=action.payload
    }, 
    addUpComingMovies:(state,action)=>{
        state.upComingMovies=action.payload
    }
}

})

export let {addnowPlayingMovies,addTrailer,addPopularMovies,addTrendingMovies,addUpComingMovies}=moviesSlice.actions;
export default moviesSlice.reducer
