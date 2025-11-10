import React,{useRef} from 'react'
import MovieCard from './MovieCard'
import { ChevronLeft, ChevronRight } from 'lucide-react';
const MovieList = ({text,movies}) => {
  
  let scrollref=useRef(null)
  
let scrollLeft=()=>{
  console.log(scrollref.current)
scrollref.current.scrollBy({
      left: -300, // move left by 300px
      behavior: "smooth",
})

}
let scrollRight=()=>{
  console.log(scrollref.current)
scrollref.current.scrollBy({
      left: 300, // move left by 300px
      behavior: "smooth",
})

}

  return (
    <div className='p-6'>
      <h1 className='text-white text-2xl pl-5'>{text} ({movies?.length})</h1>
      <div className='flex items-center'>
            <div className=" flex items-center"   onClick={scrollLeft}>
                <ChevronLeft className="w-10 h-10 text-white bg-red-700/70 p-2 rounded-full cursor-pointer hover:bg-red-700 transition"
              
                />
          </div>
          <div className='flex overflow-x-scroll scroll-smooth scrollbar-hide'  ref={scrollref} >
        
              <div className='flex p-4'>
              { 
                  movies?.map((movie)=><MovieCard  key={movie.id} movie={movie}/>)
              } 
              </div>
          </div>
      <div className="flex items-center"   onClick={scrollRight}> 
    <ChevronRight className="w-10 h-10 text-white bg-red-700/70 p-2 rounded-full cursor-pointer hover:bg-red-700 transition" />
  </div>

      </div>

        </div>
  )
}

export default MovieList