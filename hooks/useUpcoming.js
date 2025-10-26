import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { options } from "../utils/constants";
import {addUpComingMovies} from "../utils/moviesSlice"
export let useUpComing=()=>{
 let dispatch=useDispatch();


let FetchUpComingMoviesApi=async()=>{
 let data= await fetch('https://api.themoviedb.org/3/movie/upcoming', options)
 let jsondata=await data.json();
 console.log(jsondata.results)
dispatch(addUpComingMovies(jsondata.results))

}


useEffect(()=>{

FetchUpComingMoviesApi();

},[])

}