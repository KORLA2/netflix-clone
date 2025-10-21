import React, { useContext,useEffect } from 'react'
import { useSelector } from 'react-redux'
import UserContext from '../../utils/contexts';
import Header from './Header';

const Browse = () => {

  let userInfo=useSelector((store)=>store.userSlice);
  console.log(userInfo)
  return (

    <div><Header/></div>
  )
}

export default Browse