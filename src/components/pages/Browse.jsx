import React from 'react'
import Header from '../commonComponents/Header';
import { useNowPlayingMovies, usePopularMovies, useTopRatedMovies, useUpcomingMovies } from '../../customHooks/useMoviesHooks';
import MainContainer from '../browseComponents/MainContainer';
import SecondaryContainer from '../browseComponents/SecondaryContainer';
import { useSelector } from 'react-redux';
import GptSearch from '../gptPageComponents/GptSearch';
import LoadSpinner from '../commonComponents/LoadSpinner';

const Browse = () => {

  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
  
  const {trailerVideo, nowPlayingMovies}  = useSelector((store)=> store.movies)

  // created custom hook for fethching nowPlayingMovies and store in movieSlice
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()

  return (
    <div>
      <Header/>
        {
          showGptSearch ? <GptSearch/> : (
            trailerVideo && nowPlayingMovies ? (
              <>
                {/*Main Container = section 1 = video banner section, background trailor */}
                <MainContainer/>

                {/* SecondaryContainer = section 2 = many list of movies section */}
                <SecondaryContainer/>
              </>
            ) : (
              <LoadSpinner/>
            )
          )
        }
    </div>
  )
}

export default Browse;