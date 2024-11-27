import React from 'react'
import { MOVIE_IMG_CDN_URL } from '../../utilis/constants'

const MovieCard = ({movie}) => {

    const {original_title, poster_path} = movie

    if(!poster_path) return null

  return (
    <div className='w-44 md:w-60 h-52'>
        <img className='w-44 md:w-60 hover:scale-105 transition-all duration-300 ease-in-out'
            src={MOVIE_IMG_CDN_URL+poster_path} alt={original_title}
        />
    </div>
  )
}

export default MovieCard