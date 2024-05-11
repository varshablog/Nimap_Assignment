import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addUpcomingMovies} from "../utils/moviesSlice";
import { options } from "../utils/constants";

const useUpcoimgMovies=()=>{
    const dispatch=useDispatch();

  //Make API call
  const getUpcomingMovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",options)
    
     const json=await data.json();
     
     dispatch(addUpcomingMovies(json.results))
    
  }

  useEffect(()=>{
      getUpcomingMovies();
  },[])

}
export default useUpcoimgMovies;