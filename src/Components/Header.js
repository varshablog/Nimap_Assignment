
import React, {useState } from 'react';
import { useDispatch} from 'react-redux';
import { Link, } from 'react-router-dom';
import { options } from '../utils/constants';
import { addFilterData } from '../utils/moviesSlice';
import FilterData from './FilterData';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  
  const [searchingText,setSearchingText]=useState([]);
  const navigate=useNavigate();
  
  const dispatch=useDispatch();
  
  const handlePopular=()=>{
    
    dispatch(addFilterData(null))
  }
  
  const handleTopRated=()=>{
    
    dispatch(addFilterData(null))
  }
  const handleUpcoming=()=>{
       
        dispatch(addFilterData(null))
  }


  const getFilterMovies=async(searchingText)=>{

    console.log(searchingText);
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+searchingText+'&include_adult=false&language=en-US&page=1', options)
    
     const json=await data.json();
     console.log(json.results);
     dispatch(addFilterData(json.results))
     navigate("/filterData")
    
  }
  const handleSearchClick=()=>{
   getFilterMovies(searchingText);
   setSearchingText("");
    
  }
  
 
  return (
    <div className="Header">
       
        { 
          <div className='headerRight'>
           
                <div className='navBar'>
                  <div className="navContent">
                        <h2>MovieDb</h2>
                        <nav className="nav">
                          <ul>
                            <li>
                              <Link className='links' to="/" onClick={handlePopular}>Popular</Link>
                            </li>
                            <li>
                              <Link className='links' to="/topRated" onClick={handleTopRated}>TopRated</Link>
                            </li>
                            <li>
                              <Link  className='links' to="/upcoming" onClick={handleUpcoming}>Upcoming</Link>
                            </li>
                          </ul>
                          <div className='search'>
                          <input type="text" className='searchText' placeholder="Movie Name" 
                          value={searchingText}
                          onChange={(e) => {
                            setSearchingText(e.target.value.toLowerCase());
                          }}/>
                          <button onClick={handleSearchClick} className="buttonSearch">Search</button>
                          </div>
                        </nav>
                  </div>
                 
                  
                </div>
            
          
            
          </div>
          
        } 
    </div>  
  )
}

export default Header;
