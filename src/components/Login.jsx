import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  let [signIn,setSignIn]=useState(1);
  let handleSignIn=()=>{

    setSignIn(!signIn)
  }
  return (
    <div  >
        <Header/>
        <div className="relative min-h-[1000px]">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7c9e63f7-5b5d-43a4-a3fb-41917ac25301/web/IN-en-20251013-TRIFECTA-perspective_7bc35267-b383-4fb3-b173-eae32292d42e_large.jpg"
            className='absolute top-0 left-0  w-full h-full object-cover'
            />
            </div>

      <div className="absolute top-0 left-0 w-full h-full mt-40 flex justify-center items-center" >

      <form className="bg-black bg-opacity-50 p-14 rounded-lg z-10 w-120" >
        <h1  className="text-white text-4xl font-bold mb-6">{!signIn?"Sign Up":"Sign In"} </h1>
 { !signIn&&(<input  placeholder='Name' type="text"className="p-4 my-4 text-lg text-white border-2 rounded-lg border-gray-500  w-full"/>) }
<input placeholder='Email or mobile number' type="text" className="p-4  my-4 text-lg border-2 rounded-lg border-gray-500 text-white bg-transparent w-full"/>
<input  placeholder='Password' type="password"className="p-4 my-4 text-lg text-white border-2 rounded-lg border-gray-500  w-full"/>
  <button className="p-3 my-4 text-xl font-medium text-white rounded-lg  bg-red-600 w-full">{!signIn?"Sign Up":"Sign In"}</button>
  <p className='text-xl text-center text-gray-500'>OR</p> 
  <button className="p-4 my-4 text-lg text-white border-2 rounded-lg border-gray-500 bg-gray-400 w-full">Use a sign-in code</button> 
  <h1 className='underline text-white text-xl text-center'>Forgot password?</h1>
  <label className="flex items-center mt-4">
 <input type="checkbox" className="accent-white-600 w-5 h-5 cursor-pointer bg-white" />
      <span className='text-white text-xl mx-4'>Remember me</span>
</label>
 <div className='flex my-2'>
  <p className='text-gray-500'>{!signIn?"Already Had an Account?":"New to Netflix?"}</p>
  <p className='font-bold mx-2 text-white underline cursor-pointer' onClick={handleSignIn}> {!signIn?"Sign In now.":"Sign up now." }</p>
 </div>

      </form>
      </div>

        </div>
  
  )
}

export default Login