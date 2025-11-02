import React, { useContext,useState,useRef } from 'react'
import {auth} from "../../utils/firebase"
import Header from './Header'
import {ValidateEmail,ValidatePassword} from "../../utils/validate"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import UserContext from '../../utils/contexts';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addUser } from '../../utils/userSlice';
import { BG_IMG } from '../../utils/constants';
const Login = () => {
  let navigate=useNavigate()
  let [signIn,setSignIn]=useState(1);
  let [EmailError,setEmailError]=useState(false)
  let [PasswordError,setPasswordError]=useState(false);
  let [FirebaseError,setFirebaseError]=useState("");
  let [Loading,setLoading]=useState(false)
let storeuser=useSelector(store=>store.userSlice)
let dispatch=useDispatch()
  let Email=useRef(null)
  let Name=useRef(null)
  let Password=useRef(null)
  let handleSignIn=()=>{

    setSignIn(!signIn)
  }

  function handleButtonClick(){
    setLoading(true)
      let EmailError=ValidateEmail(Email.current.value)
        let PasswordError=ValidatePassword(Password.current.value);
    
  setEmailError(EmailError);
  setPasswordError(PasswordError);

     if(!signIn){

      // Sign Up Logic Fire Base
 createUserWithEmailAndPassword(auth, Email.current.value, Password.current.value)
  .then((userCredential) => {
    // Signed up 
    const loginuser = userCredential.user;
    
    updateProfile(loginuser, {
      displayName: Name.current.value, photoURL: "https://avatars.githubusercontent.com/u/96729391?s=96&v=4"
    }).then(() => {
       let user=storeuser;
  dispatch(addUser(
    { ...user, displayName:user.displayName,photoURL:user.photoURL}
  ))
    }).catch((error) => {
      setLoading(false)      

    });



  })
  .catch((error) => {
    setLoading(false)
    const errorCode = error.code;
    const errorMessage = error.message;
   setFirebaseError(errorCode+"-"+errorMessage)

  });

     }else{
      signInWithEmailAndPassword(auth,Email.current.value, Password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
 
  })
  .catch((error) => {
    setLoading(false)
    const errorCode = error.code;
    const errorMessage = error.message;
   setFirebaseError(errorCode+"-"+errorMessage)

  });

     }

    }
      function handleBlurEmail(){
    
      let EmailErr=ValidateEmail(Email.current.value)

  setEmailError(EmailErr);

    }
    function handleBlurPassword(){
   let PasswordError=ValidatePassword(Password.current.value);
    
      setPasswordError(PasswordError);
          
    }

  return (
    <div  >
        <Header/>
        <div className="relative min-h-[1000px]">
    <img src={BG_IMG}
            className='absolute top-0 left-0  w-full h-full object-cover'
            />
            </div>

      <div className="absolute top-0 left-0 w-full h-full mt-40 flex justify-center items-center" >

      <form className="bg-black bg-opacity-50 p-14 rounded-lg z-10 w-120" onSubmit={(e)=>e.preventDefault()} >
        <h1  className="text-white text-4xl font-bold mb-6">{!signIn?"Sign Up":"Sign In"} </h1>
  
 { FirebaseError&&(<p className="text-red-700 text-xl font-medium">{FirebaseError}</p>) } 

 { !signIn&&(<input  placeholder='Name' ref={Name} type="text"className="p-4 my-4 text-lg text-white border-2 rounded-lg border-gray-500  w-full"/>) }
<input placeholder='Email or mobile number' type="text" onFocus={()=>setEmailError(false)} onBlur={handleBlurEmail} ref={Email} className="p-4  my-4 text-lg border-2 rounded-lg border-gray-500 text-white bg-transparent w-full"/>
  {EmailError&&<p className="text-red-700 text-xl font-medium">⚠️Please enter a valid email or mobile number.</p>} 
<input  placeholder='Password' type="password" ref={Password} onFocus={()=>setPasswordError(false)} onBlur={handleBlurPassword} className="p-4 my-4 text-lg text-white border-2 rounded-lg border-gray-500  w-full"/>
  {PasswordError&&<p className="text-red-700 text-xl font-medium">⚠️Your password must contain between 4 and 60 characters.</p>}
  {!Loading?<button className="p-3 my-4 text-xl font-medium text-white rounded-lg cursor-pointer
   bg-red-600 w-full" onClick={handleButtonClick}>{!signIn?"Sign Up":"Sign In"}</button>:
   <button   className="bg-red-600 text-white px-5 py-4 rounded-md flex items-center justify-center w-full">

            <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
          ></path>
        </svg>
   </button>
  }
  <p className='text-xl text-center text-gray-500'>OR</p> 
  <button className="p-4 my-4 text-lg text-white border-2 rounded-lg cursor-pointer border-gray-500 bg-gray-400 w-full">Use a sign-in code</button> 
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