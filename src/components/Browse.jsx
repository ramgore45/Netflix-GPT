import React from 'react'
import Header from './Header';
import { useNowPlayingMovies, usePopularMovies, useTopRatedMovies, useUpcomingMovies } from '../customHooks/useMoviesHooks';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  // created custom hook for fethching nowPlayingMovies and store in movieSlice
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()

  return (
    <div>
      <Header/>

      {/*Main Container = section 1 = video banner section, background trailor */}
      <MainContainer/>

      {/* SecondaryContainer = section 2 = many list of movies section */}
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;