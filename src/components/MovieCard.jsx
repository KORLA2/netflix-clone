import React from 'react'
import { IMG_CDN } from '../../utils/constants'

const MovieCard = ({movie}) => {
  
    return (
    <div  className=' w-50 m-5 hover:scale-120 cursor-pointer ease-in-out transition-transform duration-300 ' >
        <img  className=" rounded-lg" alt="moviecard" src={IMG_CDN+movie.poster_path}/>
    </div>
  )
}

export default MovieCard