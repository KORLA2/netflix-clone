import { createSlice } from "@reduxjs/toolkit";

 let moviesSlice=createSlice({
 name:"movieSlice",
 initialState:{
    trailer:null,
    infoTrailer:null,
    nowPlaying:null ,
    popularMovies:null,
    trendingMovies:null,
    upComingMovies:null,
    showMovieInfo:null,
 },
reducers:{
    addnowPlayingMovies:(state,action)=>{
      state.nowPlaying=(action.payload)
    },
    addTrailer:(state,action)=>{
     state.trailer=action.payload

    },
    addinfoTrailer:(state,action)=>{
state.infoTrailer=action.payload
    },
    addPopularMovies:(state,action)=>{
        state.popularMovies=action.payload
    },
     addTrendingMovies:(state,action)=>{
        state.trendingMovies=action.payload
    }, 
    addUpComingMovies:(state,action)=>{
        state.upComingMovies=action.payload
    },
    setMovieInfo:(state,action)=>{
        state.showMovieInfo=action.payload
    },
    
    
}

})

export let {addnowPlayingMovies,addMovieInfo,addTrailer,addPopularMovies,addTrendingMovies,addUpComingMovies,setMovieInfo}=moviesSlice.actions;
export default moviesSlice.reducer
