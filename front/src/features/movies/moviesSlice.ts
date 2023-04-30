import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getMovies } from './moviesAPI';

export interface moviesState {
  movies:any
}

const initialState: moviesState = {
  movies: null
};

export const getMoviesAsync = createAsyncThunk(
  'movies/getMovies',
  async () => {
    const response = await getMovies();
    return response;
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesAsync.fulfilled, (state,actions) => {
        state.movies = actions.payload
      });
  },
});

// export const {} = moviesSlice.actions;

export const selectMovies = (state: RootState) => state.movies.movies;

export default moviesSlice.reducer;
