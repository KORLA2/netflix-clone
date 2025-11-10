import { useDispatch ,useSelector} from "react-redux";
import { useEffect } from "react";
import { options } from "../utils/constants";
import {addUpComingMovies} from "../utils/moviesSlice"
export let useUpComing=()=>{
 let dispatch=useDispatch();

 let upComingMovies =useSelector(store=>store.movieSlice.upComingMovies)

let FetchUpComingMoviesApi=async()=>{
 let data= await fetch('https://api.themoviedb.org/3/movie/upcoming', options)
 let jsondata=await data.json();
dispatch(addUpComingMovies(jsondata.results))

}


useEffect(()=>{
if(!upComingMovies)
FetchUpComingMoviesApi();

},[])

}