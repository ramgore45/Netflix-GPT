import React from 'react'
import MoviesList from '../commonComponents/MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const nowPlayingMovies = useSelector((store)=> store.movies?.nowPlayingMovies)
  const upcomingMovies = useSelector((store)=> store.movies?.upcomingMovies)
  const popularMovies = useSelector((store)=> store.movies?.popularMovies)
  const topRatedMovies = useSelector((store)=> store.movies?.topRatedMovies)


  return (
    <div className='bg-black'>
      {/* movies List */}
      {/* section 1 = popular movies || section 2 = related movies || section 3 = trending movies || 
          section 4 = hoorror movies || section 5 = comedy movies || section 6 = action movies || etc*/}
      <div className='-mt-44 z-20 pl-10 relative'>
        <MoviesList title={"Up Coming Movies"} movies={upcomingMovies} />
        
        <MoviesList title={"Now Playing Movies"} movies={nowPlayingMovies} />
        
        <MoviesList title={"Popular Movies"} movies={popularMovies} />
        
        <MoviesList title={"Top Rated Movies"} movies={topRatedMovies} />
      </div>

    </div>
  )
}

export default SecondaryContainer