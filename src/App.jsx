import { useEffect, useState, } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Login,Browse,MovieInfo} from './components';


function App() {


  let approuter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },{
      path:"/browse",
      element:<Browse/>,
    },
    {
      path:"/browse/movieInfo",
      element:<MovieInfo/>,
    }
  ])
 
  return (

   <div className="overflow-x-hidden">
    <RouterProvider router={approuter}/>
   </div>

  )
}

export default App
