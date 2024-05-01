import React from 'react'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const TopRated = () => {
    useTopRatedMovies();
    // console.log("jhdgc")
    const topRatedMovies=useSelector(store => store?.movies?.topRatedMovies);
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
