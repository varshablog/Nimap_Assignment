import React, { useState } from 'react';
// import usePopularMovies from '../hooks/usePopularMovies';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { useEffect } from 'react';
import { options } from '../utils/constants';




const Body = () => {
  // usePopularMovies();
  const[popularMovies,setPopularMovie]=useState([]);
  // let popularMovies;
  const getPopularMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',options)
    
     const json=await data.json();
     setPopularMovie(json?.results);
      // dispatch(addPopularMovies(json?.results))
    
  }

  useEffect(()=>{
    getPopularMovies();
  },[])
  // const popularMovies=useSelector(store =>store?.movies?.popularMovies)
  const filterData=useSelector(store => store?.movies?.filterData);
  console.log(filterData);
 
    
   
 return (
    <div className="secondSection">
    { filterData ?
      filterData?.map((movie) => <MovieCard key={movie?.id}  movieData={movie}/>):
      popularMovies?.map((movie) => <MovieCard key={movie?.id}  movieData={movie}/>)
    }

    </div>
  )
};


export default Body;
