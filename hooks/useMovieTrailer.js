import { useDispatch,useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";
export let useMovieTrailer=(movie)=>{

    let dispatch=useDispatch();

let GetVideo=async ()=>{
let Video=await fetch('https://api.themoviedb.org/3/movie/755898/videos'
    ,options)
let jsonVideo= await Video.json();

let trailerVideo=jsonVideo.results.find(video=>video.type="Trailer")
dispatch(addTrailer(trailerVideo))

}


useEffect(()=>{

    GetVideo()
},[])
}