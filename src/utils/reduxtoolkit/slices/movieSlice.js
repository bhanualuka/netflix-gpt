import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    nowPlayingMovies: null,
    nowPopularMovies: null,
    nowTopRatedMovies: null,
    nowUpComingMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addNowPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    },
    addNowTopRatedMovies: (state, action) => {
      state.nowTopRatedMovies = action.payload;
    },
    addNowUpComingMovies: (state, action) => {
      state.nowUpComingMovies = action.payload;
    },
  },
});

export const {
  addMovieTrailer,
  addNowPlayingMovies,

  addNowPopularMovies,
  addNowTopRatedMovies,
  addNowUpComingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
