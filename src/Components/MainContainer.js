import React from "react";
import { useSelector } from "react-redux";
import useCasting from "../hooks/useCasting";


import { IMGCDNURL } from "../utils/constants";

const MainContainer = () => {
  const movieData = useSelector((store) => store?.movies?.movieData);
  const movieIdData = useSelector((store) => store?.movies?.movieId);
  

  useCasting(movieIdData);

  const castingData = useSelector((store) => store.movies.castingData);
  console.log(castingData);
  return (
    <>
      {
      
        <>
          <div className="imageBackground">
            {movieData?.poster_path !== undefined && (
              <img src={IMGCDNURL + movieData?.poster_path} alt="" />
            )}
            <div>
              {
                <div id="videoTitle">
                  <div className="videoTitleText">
                    {movieData?.title && <h1>{movieData?.title}</h1>}
                    {movieData?.overview && <p>{movieData?.overview}</p>}
                  </div>
                </div>
              }
            </div>
          </div>
          <div className="castingData">
            {castingData?.map((data) => (
              <div className="casting">
                {data.profile_path && (
                  <>
                    <img src={IMGCDNURL + data.profile_path} alt="" />

                    <h4>{data.name}</h4>
                    <h4>Character: {data.character}</h4>
                  </>
                )}
              </div>
            ))}
          </div>
        </>
       
      }
    </>
  );
};

export default MainContainer;
