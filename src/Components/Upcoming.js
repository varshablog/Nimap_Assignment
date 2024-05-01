import React, { useState } from 'react'
import useUpcoimgMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { useEffect } from 'react';
import { options } from '../utils/constants';

const Upcoming = () => {
    // useUpcoimgMovies();
    // const upcomingMovies=useSelector(store => store?.movies?.upcomingMovies)
    const[upcomingMovies,setUpcomingMovies]=useState([]);
    const getUpcomingMovies=async()=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",options)
      
       const json=await data.json();
       setUpcomingMovies(json?.results);
      //  dispatch(addUpcomingMovies(json.results))
      
    }
  
    useEffect(()=>{
        getUpcomingMovies();
    },[])
    const filterData=useSelector(store => store?.movies?.filterData);
  return (
    <div className="secondSection">
    { 
      filterData ?
      filterData?.map((movie) => <MovieCard key={movie?.id}  movieData={movie}/>):
      upcomingMovies?.map((movie) => <MovieCard key={movie?.id}  movieData={movie}/>)
   }

    </div>
  )
}

export default Upcoming
