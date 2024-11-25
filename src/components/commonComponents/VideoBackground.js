import React from 'react'
import { useGetTrailerOfMovie } from '../../customHooks/useMoviesHooks'
import { useSelector } from 'react-redux'

const VideoBackground = ({movieId}) => { 

  const trailerVideo = useSelector((store)=> store.movies?.trailerVideo)

  useGetTrailerOfMovie(movieId)

  return (
    <div className='w-screen'>
        <iframe 
          className='w-screen h-screen'
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
          title="YouTube video player"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " 
          referrerpolicy="strict-origin-when-cross-origin"
        >
        </iframe>
    </div>
  )
}

export default VideoBackground