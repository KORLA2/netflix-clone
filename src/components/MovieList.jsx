import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({text,movies}) => {
    console.log(movies)
  return (
    <div className='p-6'>
      <h1 className='text-white text-2xl pl-5'>{text}</h1>
    <div className='flex overflow-x-scroll scroll-smooth scrollbar-hide '>
  
        <div className='flex p-4'>
        { 
            movies?.map((movie)=><MovieCard  key={movie.id} movie={movie}/>)
        } 
        </div>
    </div>
        </div>
  )
}

export default MovieList