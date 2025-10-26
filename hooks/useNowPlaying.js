import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { options } from "../utils/constants";
import {addnowPlayingMovies} from "../utils/moviesSlice"
export let useNowPlaying=()=>{
 let dispatch=useDispatch();


let FetchMoviesApi=async()=>{
 let data= await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&page=1&sort_by=popularity.desc', options)
 let jsondata=await data.json();
 console.log(jsondata.results)
dispatch(addnowPlayingMovies(jsondata.results))

}


useEffect(()=>{

FetchMoviesApi();

},[])

}