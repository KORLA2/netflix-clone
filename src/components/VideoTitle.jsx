import React from 'react'

const VideoTitle = ({movie}) => {

   
  return (
    <div className='absolute left-0  py-60 px-10  text-white bg-gradient-to-r from-black to-transparent w-screen aspect-video'>
<h1 className='text-3xl font-bold'>{movie?.original_title}</h1>
  <h1 className='text-lg w-1/2'>{movie?.overview.split(" ").slice(0,15).join(" ")+"..."}</h1>
  <div className='flex justify-between my-10 w-1/3'>

<button className='px-10  cursor-pointer py-1  hover:opacity-70 bg-white text-black font-medium rounded-lg flex items-center justify-between w-40'>
    <div className="text-2xl" >▶️</div>
        <div>Play</div>
</button>
<button className='px-10 py-1 cursor-pointer hover:bg-gray-400 font-medium bg-gray-500 opacity-70 rounded-lg w-40' >Watch</button>
  </div>
    </div>
  )
}

export default VideoTitle