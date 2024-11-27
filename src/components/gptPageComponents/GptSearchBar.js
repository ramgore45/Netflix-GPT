import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lang } from '../../utilis/langConstants'
import { openAi } from '../../utilis/openAi'
import { handleGptSearchClick } from '../../customHooks/useMoviesHooks'

const GptSearchBar = () => {

    
    const dispatch = useDispatch()
    const langKey = useSelector((store)=> store.config.lang)
    const searchText = useRef(null)

    

  return (
    <div className='flex gap-1 md:gap-4 justify-center w-full'>
        <input className='p-2 text-lg rounded-md outline-none text-gray-500 font-medium w-[74%] md:w-[40%]'
            type='text'
            ref={searchText}
            placeholder={lang[langKey].placeHolder}
        />
        <button className='font-medium text-white bg-red-600 rounded-lg w-[23%] md:w-[10%]'
          onClick={()=>handleGptSearchClick(dispatch,searchText, openAi)}
        >
            {lang[langKey].searchBtn}
        </button>
    </div>
  )
}

export default GptSearchBar