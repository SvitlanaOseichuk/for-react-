import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
    movieData: null,
    loader: false,
}


const movieDetailsSlice = createSlice({

    name: "contact",
    
    initialState: INITIAL_STATE,
   
    reducers: {
       
       setmovieData(state, action) {
           state.movieData = action.payload;
       },


       setLoader(state, action) {
        state.loader = action.payload;
    },

 }})

 export const { setmovieData, setLoader } = movieDetailsSlice.actions;


export const movieDetailsReducer = movieDetailsSlice.reducer;
