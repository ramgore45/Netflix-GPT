import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {

    const nowPlayingMovies = useSelector((store)=> store.movies?.nowPlayingMovies)

    // early return (!nowPlayingMovies)
    if(nowPlayingMovies === null ) return (<h1>No Movies</h1>);

    const mainMovie = nowPlayingMovies[0];
    console.log(mainMovie)

    const {original_title, overview, id} = mainMovie

  return (
    <div>
        <VideoBackground movieId={id}/>
        <VideoTitle title={original_title} description={overview}/>
    </div>
  )
}

export default MainContainer