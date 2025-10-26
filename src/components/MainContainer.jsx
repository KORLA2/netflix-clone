import React from 'react'
import VideoTitle from "./VideoTitle"
import { useSelector } from 'react-redux'
import VideoBackground from "./VideoBackground"
const MainContainer = () => {

let movies=useSelector(store=>store.movieSlice.nowPlaying)
let movie=movies?.length?movies[3]:null;
  return (
    <div>
        <VideoTitle movie={movie}/>
        <VideoBackground movie={movie}/>

    </div>
  )
}

export default MainContainer