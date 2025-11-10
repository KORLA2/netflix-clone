import React from 'react'
import VideoTitle from "./VideoTitle"
import { useSelector } from 'react-redux'
import VideoBackground from "./VideoBackground"
const MainContainer = () => {

let movies=useSelector(store=>store.movieSlice.nowPlaying)
let movie=movies?.length?movies[Math.floor(Math.random()*(movies.length+1))]:null;

  return (
    <div className='m-0 p-0'>
        <VideoTitle movie={movie}/>
        <VideoBackground movie={movie}/>

    </div>
  )
}

export default MainContainer