import React from 'react';
import usePopularMovies from '../hooks/usePopularMovies';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';




const Body = () => {
  usePopularMovies();
  const popularMovies=useSelector(store =>store?.movies?.popularMovies)
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
