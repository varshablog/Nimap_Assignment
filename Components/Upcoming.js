import React from 'react'
import useUpcoimgMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const Upcoming = () => {
    useUpcoimgMovies();
    const upcomingMovies=useSelector(store => store?.movies?.upcomingMovies)
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
