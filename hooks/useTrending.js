import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { options } from "../utils/constants";
import {addTrendingMovies} from "../utils/moviesSlice"
export let useTrending=()=>{
 let dispatch=useDispatch();
 let trendingMovies =useSelector(store=>store.movieSlice.trendingMovies)


let FetchTrendingMoviesApi=async()=>{
 let data= await fetch('https://api.themoviedb.org/3/movie/top_rated', options)
 let jsondata=await data.json();
dispatch(addTrendingMovies(jsondata.results))

}


useEffect(()=>{
if(!trendingMovies)
FetchTrendingMoviesApi();

},[])

}