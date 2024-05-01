import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import { toggleDialogueBox } from '../utils/moviesSlice'

const DialogueBox = () => {
    const movieIdData=useSelector(store => store.movies.movieId);
    const movieData=useSelector(store => store.movies.movieData);
    const {original_title,overview}=movieData;
    // console.log(original_title+"  "+overview);
    const dispatch=useDispatch();
    const handleOnClick=()=>{
        dispatch(toggleDialogueBox(false));
    }
return (
    <div className='DialogueBox'>
       <VideoBackground movieId={movieIdData} bool={true}/>
       <button onClick={handleOnClick}>Close</button>
       <div>
        <h2>{original_title}</h2>
        <p>{overview}</p>
       </div>
    </div>
  )
}

export default DialogueBox
