import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
<img className='object-cover -z-10 absolute w-screen h-screen ' src="https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png"/>
  <div className="absolute -z-9 inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90"></div>

<div className='flex justify-center items-center h-screen w-screen'>
    <div className='w-1/2 text-center'>
    <p className='text-7xl text-white m-3 font-medium'>Lost Your Way?</p>
    <p className='text-white text-3xl m-4 '>Sorry, we can't find that page. You'll find a lots to explore on the home page </p>
   <Link to="/"><button className='bg-white p-4 font-medium rounded-xl cursor-pointer'> Netflix Home</button></Link> 
    <p className='text-white m-4  text-2xl flex justify-center items-center border-2 border-l-red-700 bodrer-transparent'>Error Code <p className='font-medium m-2 text-2xl'>NSES-404</p></p>
    </div>
</div>
    </div>
  )
}

export default ErrorPage