import { useDispatch } from "react-redux"
import { API_GET_OPTION, NOW_PLAYING_MOVIES_URL } from "../utilis/constants"
import { addNowPlayingMovies, addTrailerVideo } from "../utilis/redux/movieSlice"
import { useEffect } from "react"

export const useNowPlayingMovies = () =>{
    
  const dispatch = useDispatch()

  const getNowPlayingMovies = async ()=>{
    const data = await fetch(NOW_PLAYING_MOVIES_URL, API_GET_OPTION)
    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(()=>{
    getNowPlayingMovies()
  },[])
}

export const useGetTrailerOfMovie = async (movieId)=>{
  const dispatch = useDispatch()

  const getMovieVideos =async ()=>{
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_GET_OPTION)
      const json = await data.json()
      const filterTrailers = json.results.filter((video)=> video.type==="Trailer")
      const trailer = filterTrailers.length ? filterTrailers[0] : json.results[0] ;
      dispatch(addTrailerVideo(trailer))
  }

  useEffect(()=>{
      getMovieVideos()
  },[])
}