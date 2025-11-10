import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { options } from "../utils/constants";
import {addPopularMovies} from "../utils/moviesSlice"
export let usePopular=()=>{
 let dispatch=useDispatch();

 let popularMovies =useSelector(store=>store.movieSlice.popularMovies)
let FetchPopularMoviesApi=async()=>{
 let data= await fetch('https://api.themoviedb.org/3/movie/popular', options)
 let jsondata=await data.json();
dispatch(addPopularMovies(jsondata.results))

}


useEffect(()=>{

    if(!popularMovies)
FetchPopularMoviesApi();

},[])

}