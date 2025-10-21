import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {

let navigate=useNavigate()
let user=useSelector(store=>store.userSlice)
  let signOutUser=()=>{
   
    signOut(auth).then(() => {
    navigate("/")
    }).catch((error) => {
     console.log(error)
    });
  }

  return (


    <div className='flex justify-between items-center absolute w-screen z-1 bg-gradient-to-b from-black/100 via-black/40 to-transparent' >
      
        <img  className="w-50" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
         alt="logo.png"/>

{user&&(<div className='flex items-center mx-10'>

 <img className="w-15 h-15 mx-5" src={user?.photoURL}/>
  <button onClick={signOutUser} className="text-black font-bold bg-red-700 p-2 h-10 border border-red-700 cursor-pointer  rounded-lg">SignOut</button>
</div>
)}
    </div>

 



  )
}

export default Header