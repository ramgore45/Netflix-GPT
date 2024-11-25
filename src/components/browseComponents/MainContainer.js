import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from '../commonComponents/VideoBackground'
import VideoTitle from '../commonComponents/VideoTitle'

const   MainContainer = () => {

    const nowPlayingMovies = useSelector((store)=> store.movies?.nowPlayingMovies)

    // early return (!nowPlayingMovies)
    if(nowPlayingMovies === null ) return (<h1>No Movies</h1>);

    const randomIndex = Math.floor(Math.random() * nowPlayingMovies.length);
    const mainMovie = nowPlayingMovies[randomIndex];
    console.log(mainMovie)

    const {original_title, overview, id} = mainMovie

  return (
    <div className='relative'>
        <VideoBackground movieId={id}/>
        <VideoTitle title={original_title} description={overview}/>
    </div>
  )
}

export default MainContainer