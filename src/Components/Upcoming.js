import React, { useState } from "react";
import useUpcoimgMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

import Pagination from "./Pagination";

const Upcoming = () => {
  useUpcoimgMovies();
  const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies);
  
  const [PageNumber, setPageNumber] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const lastPostIndex = PageNumber * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = upcomingMovies?.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <div className="secondSection">
        {currentPosts?.map((movie) => (
          <MovieCard key={movie?.id} movieData={movie} />
        ))}
      </div>

      <Pagination
        totalPosts={upcomingMovies?.length}
        postsPerPage={postPerPage}
        setCurrentPage={setPageNumber}
        currentPage={PageNumber}
      />
    </div>
  );
};

export default Upcoming;
