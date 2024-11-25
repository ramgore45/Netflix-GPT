import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from '../commonComponents/MoviesList'

const GptMOviesSuggestions = () => {

    const gpt = useSelector((store)=> store.gpt)
    const { gptSearchMoviesNames,gptSearchMoviesResult} = gpt

    if(!gptSearchMoviesNames) return null

  return (
    <div className='text-white w-full bg-black bg-opacity-80'>
        {
            gptSearchMoviesNames.map((movieName,index)=>
                <MoviesList key={movieName} title={movieName} movies={gptSearchMoviesResult[index]}/>
            )
        }
    </div>
  )
}

export default GptMOviesSuggestions;
