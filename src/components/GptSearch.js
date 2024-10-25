import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BackgroundImgUrl } from '../utilis/constants'

const GptSearch = () => {
  return (
    <div className=' min-h-screen'>
        <img className='w-screen min-h-screen h-fit absolute'
            src={BackgroundImgUrl} alt='bg-img'
        />
        <GptSearchBar/>
    </div>
  )
}

export default GptSearch