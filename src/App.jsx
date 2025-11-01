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

   <div className="overflow-x-hidden">
    <RouterProvider router={approuter}/>
   </div>

  )
}

export default App
