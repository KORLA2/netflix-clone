import { useEffect, useState, } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Login,Browse} from './components';


function App() {


  let approuter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },{
      path:"/browse",
      element:<Browse/>
    }
  ])
 
  return (

   <div className='m-0 p-0'>
    <RouterProvider router={approuter}/>
   </div>

  )
}

export default App
