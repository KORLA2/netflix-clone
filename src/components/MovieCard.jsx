import React, { useState } from 'react'
import { IMG_CDN } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setMovieInfo } from '../../utils/moviesSlice';
import { useNavigate } from 'react-router-dom';
const MovieCard = ({movie}) => {

const dispatch=useDispatch();
let user=useSelector(store=>store.userSlice.user)
let navigate=useNavigate()
    let showMovieInfo=()=>{

        if(user!=null){
            navigate("/browse/movieInfo",{ replace: true });
        
        }

    dispatch(setMovieInfo(movie))
    }
    return (
      
        movie.poster_path&&(

    <div  className='w-50 m-5 hover:scale-120 cursor-pointer ease-in-out transition-transform duration-300 ' onClick={showMovieInfo}>
        <img  className=" rounded-lg" alt="moviecard" src={IMG_CDN+movie.poster_path}/>
        </div>
       )
  )
}

export default MovieCard