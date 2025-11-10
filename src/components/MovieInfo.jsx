import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
const MovieInfo = () => {

    let movie=useSelector(store=>store.movieSlice.showMovieInfo)
  console.log(movie)
    return (
    <div className='overflow-x-hidden'>
        <VideoTitle movie={movie}/>
        <VideoBackground movie={movie}/>

    </div>
  )
}

export default MovieInfo