import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

const FilterData = () => {
    const filterData = useSelector((store) => store?.movies?.filterData);
    const [currentFilterPage, setCurrentFilterPage] = useState(1);
    const [filterPostPage, setFilterPostPage] = useState(8);
    const filterLastIndex = currentFilterPage * filterPostPage;
    const filterFirstIndex = filterLastIndex - filterPostPage;
    const currentFilteredCard = filterData?.slice(filterFirstIndex,filterLastIndex);
    
  return (
    <>
    <div className='secondSection'>
        {
        currentFilteredCard?.map((movie) => (
              <MovieCard key={movie?.id} movieData={movie} />
            ))
        }
    </div>
    <Pagination
    totalPosts={filterData?.length}
    postsPerPage={filterPostPage}
    setCurrentPage={setCurrentFilterPage}
    currentPage={currentFilterPage}
  />
  </>
  
  )
}

export default FilterData
