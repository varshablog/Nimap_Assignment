import React, { useState } from "react";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

import Pagination from "./Pagination";

const Body = () => {
  usePopularMovies();
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const [PageNumber, setPageNumber] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const lastPostIndex = PageNumber * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = popularMovies?.slice(firstPostIndex, lastPostIndex);
  
  return (
    <div>
      <div className="secondSection">
        {
         currentPosts?.map((movie) => (
              <MovieCard key={movie?.id} movieData={movie} />
            ))}
      </div>
      
        <Pagination
          totalPosts={popularMovies?.length}
          postsPerPage={postPerPage}
          setCurrentPage={setPageNumber}
          currentPage={PageNumber}
        />
      
    </div>
  );
};

export default Body;
