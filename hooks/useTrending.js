import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { options } from "../utils/constants";
import {addTrendingMovies} from "../utils/moviesSlice"
export let useTrending=()=>{
 let dispatch=useDispatch();


let FetchTrendingMoviesApi=async()=>{
 let data= await fetch('https://api.themoviedb.org/3/movie/top_rated', options)
 let jsondata=await data.json();
 console.log(jsondata.results)
dispatch(addTrendingMovies(jsondata.results))

}


useEffect(()=>{

FetchTrendingMoviesApi();

},[])

}