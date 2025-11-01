import { useSelector } from 'react-redux';
import Header from './Header';
import { useNowPlaying } from '../../hooks/useNowPlaying';

import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { usePopular } from '../../hooks/usePopular';
import { useTrending } from '../../hooks/useTrending';
import { useUpComing } from '../../hooks/useUpcoming';
import GPTSearch from './GPTSearch';
const Browse = () => {

useNowPlaying()
usePopular();
useTrending();
useUpComing();

let showGPTSearch=useSelector(store=>store.gptSlice.showgpt)

  return (

    <div ><Header/>
   { showGPTSearch?<GPTSearch/>:<div>
    <MainContainer  />
    <SecondaryContainer/>
    </div>}
    
    </div>
  )
}

export default Browse