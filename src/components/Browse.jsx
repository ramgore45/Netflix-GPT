import React from 'react'
import Header from './Header';
import { useNowPlayingMovies } from '../customHooks/useMoviesHooks';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  // created custom hook for fethching nowPlayingMovies and store in movieSlice
  useNowPlayingMovies()

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