import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:'movies',
    initialState:{
        topRatedMovies:null,
        upcomingMovies:null,
        popularMovies:null,
        movieId:null,
        movieData:null,
        castingData:null,
        showDialogueBox:false,
        filterData:null,
    
    },
    reducers:{
        addFilterData:(state,action)=>{
            state.filterData=action.payload;
        },
        toggleDialogueBox:(state,action)=>{
            state.showDialogueBox=action.payload;
        },
        addMovieInfo:(state,action)=>{
            
            const{MovieId,MovieData}=action.payload
            state.movieId=MovieId;
            state.movieData=MovieData;
        },
       
       addCastingData:(state,action)=>{
         state.castingData=action.payload;
       },
        addTopRatedMovies:(state,action)=>{
           state.topRatedMovies=action.payload;
        }, 
       
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
       
    }
})
export const{addTopRatedMovies,addUpcomingMovies,toggleDialogueBox,addPopularMovies,addMovieInfo,addCastingData,addFilterData} = moviesSlice.actions;
export default moviesSlice.reducer;