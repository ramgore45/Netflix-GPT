import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({title, movies}) => {

    console.log(movies)

  return (
    <div className='px-6'>
        <h1 className='text-2xl font-semibold p-1 py-3 text-white'>{title}</h1>
        <div className='flex overflow-x-auto overflow-y-hidden'>
            <div className='flex gap-x-1'>
                {/* all movies in list*/}
                {
                    movies?.map((movie)=>(
                        <MovieCard key={movie.id} movie={movie}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MoviesList