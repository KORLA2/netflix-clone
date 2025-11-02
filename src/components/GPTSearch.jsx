import React,{useRef} from 'react'
import lang from '../../utils/language'
import { useDispatch, useSelector } from 'react-redux'
import { BG_IMG, options } from '../../utils/constants'
import { openai } from '../../utils/openapi'
import MovieList from './MovieList'
import { addgptMovies, handlegptLoading } from '../../utils/GPTSlice'
const GPTSearch = () => {

let language=useSelector(store=>store.langSlice.language);
let gptLoading=useSelector(store=>store.gptSlice.gptLoading);
let gptMovies=useSelector(store=>store.gptSlice.gptMovies);

let dispatch=useDispatch()
let gptRef=useRef(null);

let showgptMovies= async(movie)=>{
    
const url = 'https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1';
   let res=await fetch(url,options);
        let data= await res.json();
     return data
}

let handlegptSearch= async()=>{

    try{
  dispatch(handlegptLoading())
 let query="You are now a movie Recommender This is the genere "+ gptRef.current.value+"you have to give me top 5 movies of this kind by comma seperated give me top 5 movies only"
const response = await openai.responses.create({
    model: "openai/gpt-oss-20b",
    input: query,
});
console.log(response.output_text.split(", "));

  let promisemovies=response.output_text.split(", ")?.map( (movie)=>showgptMovies(movie))
  let movies =await Promise.all(promisemovies);
dispatch(addgptMovies(movies))
dispatch(handlegptLoading())
    }
    catch(error){
console.log("The Error is "+error)
    } 
}
  console.log(gptMovies)

  console.log(gptMovies?.results?.map((movies)=>movies))

  return (
    <div >


   <div className='flex justify-center'>

<form className='grid grid-cols-12 gap-3 w-1/2  bg-black p-4 mt-30' onSubmit={(e)=>e.preventDefault()}>
<input ref={gptRef} className='p-2 col-span-9 w-full mx-2 text-black bg-white' placeholder={lang[language].Placeholder}/>
 { !gptLoading?<button onClick={handlegptSearch} className= 'col-span-3 mx-2 cursor-pointer bg-red-700 p-2 rounded-lg'>
{lang[language].Search}
</button>:
   <button   className="text-white col-span-3 mx-2 cursor-pointer flex justify-center items-center bg-red-700 p-2 rounded-lg">

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
</form>
    </div> 

  <div className="absolute -z-10 top-0 left-0">
    <img src={BG_IMG}
            className='scrollbar-hide h-full object-fit scrollbar-hide'/>
    </div>

 <div className='bg-black mt-30'>

{
    gptMovies?.map((movies)=><MovieList text={movies?.results[0]?.original_title} movies={movies?.results}/>)
}
       
</div>
    </div>
  )
}

export default GPTSearch