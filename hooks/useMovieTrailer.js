import { useDispatch,useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";
export let useMovieTrailer=(movie)=>{
    // if(!(movie?.id))return ; 
    let dispatch=useDispatch();
console.log(movie)
let GetVideo= async()=>{


    let Video=await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos`
    ,options)
let jsonVideo= await Video.json();


let trailerVideo=jsonVideo.results.find(video=>video.type=="Trailer")
console.log(trailerVideo)
dispatch(addTrailer(trailerVideo))

}


useEffect(()=>{

  if(movie?.id)  
GetVideo()
    
},[movie?.id])
}