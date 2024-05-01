import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addCastingData} from "../utils/moviesSlice";
import { options } from "../utils/constants";

const useCasting=(id)=>{
    const dispatch=useDispatch();

  const getCastingData=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/' +id+'/credits?language=en-US', options)
    
    
     const json=await data.json();
     
     
     dispatch(addCastingData(json.cast))
   
    
  }

  useEffect(()=>{
    getCastingData();
  },[])

}
export default useCasting;