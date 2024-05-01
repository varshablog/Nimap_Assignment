
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { options } from "../utils/constants";
import { addFilterData } from "../utils/moviesSlice";



const useFilterData = (searchingText) => {
    const dispatch=useDispatch();
    
    //Make API call
    const getPopularMovies=async()=>{
    
      const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+searchingText+'&include_adult=false&language=en-US&page=1', options)
      
       const json=await data.json();
       console.log(json.results);
       dispatch(addFilterData(json.results))
      
    }
  
    useEffect(()=>{
      searchingText && getPopularMovies();
    },[])
  
}

export default useFilterData
