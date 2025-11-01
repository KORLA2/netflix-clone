import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import userSlice, { addUser,removeUser } from '../../utils/userSlice';
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { handleShowGPT } from '../../utils/GPTSlice';
const Header = () => {
let dispatch=useDispatch()
let navigate=useNavigate()
let user=useSelector(store=>store.userSlice)
  let signOutUser=()=>{
   
    signOut(auth).then(() => {
 
    }).catch((error) => {
     console.log(error)
    });
  }
 useEffect(()=>{
   let unsubscribe= onAuthStateChanged(auth,(user)=>{

  if(user){
    navigate("/browse")
    dispatch(addUser({uid:user.uid,displayName:user.displayName,email:user.email,photoURL:user.photoURL}))
  }
  else{
    navigate("/")
  dispatch(removeUser());
  }


    })

 return ()=>unsubscribe();
 
  },[])

let handleGPTSearch=()=>{

  dispatch(handleShowGPT())
}

  return (


    <div className='flex justify-between items-center absolute w-screen z-1 bg-gradient-to-b from-black/100 via-black/40 to-transparent' >
      
        <img  className="w-50" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
         alt="logo.png"/>

{user&&(<div className='flex items-center mx-10'>

<button className='bg-red-700 p-2 rounded-lg  cursor-pointer hover:bg-red-800 font-medium text-black'
onClick={()=>handleGPTSearch()}
>GPT Search</button>
 <img className="w-15 h-15 mx-5" src={user?.photoURL}/>
  <button onClick={signOutUser} className="text-black font-bold bg-red-700 p-2 h-10 border border-red-700 cursor-pointer  rounded-lg">SignOut</button>

</div>
)}
    </div>

 



  )
}

export default Header