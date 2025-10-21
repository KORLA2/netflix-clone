import { useEffect, useState, } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Login,Browse} from './components';
import { useDispatch } from 'react-redux';
import  UserContext  from '../utils/contexts';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import userSlice, { addUser,removeUser } from '../utils/userSlice';

function App() {

  let dispatch = useDispatch();

console.log(userSlice)

  let approuter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },{
      path:"/browse",
      element:<Browse/>
    }
  ])
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{

if(user){
  dispatch(addUser({uid:user.uid,displayName:user.displayName,email:user.email,photoURL:user.photoURL}))
}
else{
dispatch(removeUser())
}


    })

  },[])
  return (

   <div className='m-0 p-0'>
    <RouterProvider router={approuter}/>
   </div>

  )
}

export default App
