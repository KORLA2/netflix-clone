import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useNavigate } from 'react-router-dom'
const MovieInfo = () => {

    let navigate=useNavigate()
    let user=useSelector(store=>store.userSlice.user)
   useEffect(()=>{
    if(!user)
    {
navigate("/")
    }     
   },[])

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