
import { IMGCDNURL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addMovieInfo} from '../utils/moviesSlice'
import { useNavigate } from 'react-router-dom';




const MovieCard = ({movieData}) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {vote_average,title,poster_path,id}=movieData
 
  const handleOnClick=()=>{
   console.log("card clicked");
    dispatch(addMovieInfo({MovieId :id,MovieData :movieData}))
    navigate("/mainContainer")
 }
 
 
  
  return (
    // <div className="secondSection">
    <>
      {
      poster_path && 
      <div className="MovieCard" onClick={handleOnClick}>
        <img src={IMGCDNURL+poster_path} alt="Movie card" />
        {title && <h2>{title}</h2>}
        {vote_average!==0 &&<h2>Rating: {vote_average}</h2>}
      </div> 
      }
    </>
    // </div>
  )
}

export default MovieCard
