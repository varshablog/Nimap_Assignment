import React, { useState } from 'react'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { useEffect } from 'react';
import { options } from '../utils/constants';

const TopRated = () => {
    // useTopRatedMovies();
    // // console.log("jhdgc")
    // const topRatedMovies=useSelector(store => store?.movies?.topRatedMovies);
    const [topRatedMovies,setTopRatedMovies]=useState([]);
    const getTopRatedMovies=async()=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",options)
      
       const json=await data.json();
       setTopRatedMovies(json?.results);
      //  dispatch(addTopRatedMovies(json.results))
      
    }
  
    useEffect(()=>{
        getTopRatedMovies();
    },[])
     const filterData=useSelector(store => store?.movies?.filterData);
  return (
    <div className="secondSection">
    { 
      filterData ?
      filterData?.map((movie) => <MovieCard key={movie?.id}  movieData={movie}/>):
      topRatedMovies?.map((movie) => <MovieCard key={movie?.id}  movieData={movie}/>)
    }

    </div>
  )
}

export default TopRated
