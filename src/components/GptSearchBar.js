import React from 'react'
import { useSelector } from 'react-redux'
import { lang } from '../utilis/langConstants'

const GptSearchBar = () => {

    const langKey = useSelector((store)=> store.config.lang)

  return (
    <div className='flex gap-4 justify-center absolute top-36 w-full'>
        <input className='p-2 text-lg rounded-md outline-none text-gray-500 font-medium w-[40%]'
            type='text'
            // placeholder='What would you like to watch today?'
            placeholder={lang[langKey].placeHolder}
        />
        <button className='font-medium text-white bg-red-600 rounded-lg w-[10%]'>
            {lang[langKey].searchBtn}
        </button>
    </div>
  )
}

export default GptSearchBar