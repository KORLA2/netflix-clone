import React from 'react'
import { useSelector } from 'react-redux'

import MovieList from './MovieList'
const SecondaryContainer = () => {

let nowPlayingMovies=useSelector(store=>store.movieSlice.nowPlaying);
let popularMovies=useSelector(store=>store.movieSlice.popularMovies);
let trendingMovies=useSelector(store=>store.movieSlice.trendingMovies);
let upComingMovies=useSelector(store=>store.movieSlice.upComingMovies);

  return (
    <div className='bg-black'>
<div className='-mt-40 z-10 relative'>

        <MovieList text="Now Playing" movies={nowPlayingMovies}/>
        <MovieList text="Trending" movies={trendingMovies}/>
        <MovieList text="Popular" movies={popularMovies}/>
        <MovieList text="UpComing Movies" movies={upComingMovies}/>
</div>
    </div>
  )
}

export default SecondaryContainer