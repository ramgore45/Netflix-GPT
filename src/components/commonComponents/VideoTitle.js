import React from 'react'

const VideoTitle = ({title, description}) => {

  return (
    <div className='absolute space-y-3 content-center pl-20 top-0 bottom-0 z-10 text-white h-[100%] w-[60%] bg-gradient-to-r from-slate-900'>
        <h1 className='md:text-6xl text-3xl font-bold'>{title}</h1>
        <p className='text-lg text-gray-400 w-[70%] hidden md:inline-block'>{description}</p>
        
        <div className='space-x-3'>
            <button className='bg-white p-2 md:p-3 w-24 md:w-40 rounded-lg md:text-lg text-black font-semibold opacity-70'>
              Play
            </button>
            <button className='bg-white p-2 md:p-3 w-24 md:w-40 rounded-lg md:text-lg text-black font-semibold opacity-70'>
              More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle