import { useSelector } from 'react-redux';
import Header from './Header';
import { useNowPlaying } from '../../hooks/useNowPlaying';

import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { usePopular } from '../../hooks/usePopular';
import { useTrending } from '../../hooks/useTrending';
import { useUpComing } from '../../hooks/useUpcoming';
const Browse = () => {

useNowPlaying()
usePopular();
useTrending();
useUpComing();

  return (

    <div className='m-0 p-0'><Header/>
    <MainContainer  />
    <SecondaryContainer/>
    </div>
  )
}

export default Browse