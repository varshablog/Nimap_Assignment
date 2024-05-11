import React, { useState } from "react";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";


const TopRated = () => {
  useTopRatedMovies();

  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);
  

  const [PageNumber, setPageNumber] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const lastPostIndex = PageNumber * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = topRatedMovies?.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <div className="secondSection">
        {currentPosts?.map((movie) => (
          <MovieCard key={movie?.id} movieData={movie} />
        ))}
      </div>

      <Pagination
        totalPosts={topRatedMovies?.length}
        postsPerPage={postPerPage}
        setCurrentPage={setPageNumber}
        currentPage={PageNumber}
      />
    </div>
  );
};

export default TopRated;
