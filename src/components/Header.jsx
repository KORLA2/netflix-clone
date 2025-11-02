import React,{useEffect, useRef} from 'react'
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import userSlice, { addUser,removeUser } from '../../utils/userSlice';
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { handleShowGPT } from '../../utils/GPTSlice';
import { supportedlangs } from '../../utils/language';
import { changeLanguage } from '../../utils/userLanguageSlice';
import { BG_IMG, Logo_IMG } from '../../utils/constants';
const Header = () => {
let dispatch=useDispatch()
let navigate=useNavigate()
let user=useSelector(store=>store.userSlice)
let langRef=useRef(null)
let handleChange=(e)=>{
  dispatch(changeLanguage(langRef.current.value))
}

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
      
        <img  className="w-50" src={Logo_IMG}
         alt="logo.png"/>

{user&&(<div className='flex items-center mx-10'>

<div>
<select  ref={langRef} onChange={(e)=>handleChange(e)} className='bg-red-700 p-2 m-2 rounded-lg text-black font-medium'>
  {supportedlangs.map((lang)=><option key={lang.id}  className='bg-red-800' value={lang.id}>{lang.lang}</option>)}
</select>
</div>

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