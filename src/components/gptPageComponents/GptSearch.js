import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BackgroundImgUrl } from '../../utilis/constants'
import GptMOviesSuggestions from './GptMOviesSuggestions' 

const GptSearch = () => {
  return (
    <div className=' min-h-screen'>
        <img className='w-screen h-screen object-cover fixed'
            src={BackgroundImgUrl} alt='bg-img'
        />
        <div className='absolute top-36 w-full space-y-14 '>
          <GptSearchBar/>
          <GptMOviesSuggestions/>
        </div>
    </div>
  )
}

export default GptSearch