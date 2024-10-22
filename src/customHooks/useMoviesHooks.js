import { useDispatch } from "react-redux"
import { API_GET_OPTION, NOW_PLAYING_MOVIES_URL, POPULAR_MOVIE_URL, TOP_RATED_MOVIE_URL, UPCOMING_MOVIE_URL } from "../utilis/constants"
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addTrailerVideo, addUpcomingMovies } from "../utilis/redux/movieSlice"
import { useEffect } from "react"


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

export const useUpcomingMovies = () =>{
    
  const dispatch = useDispatch()

  const getUpcomingMovies = async ()=>{
    const data = await fetch(UPCOMING_MOVIE_URL, API_GET_OPTION)
    const json = await data.json()
    dispatch(addUpcomingMovies(json.results))
  }

  useEffect(()=>{
    getUpcomingMovies()
  },[])
}

export const usePopularMovies = () =>{
    
  const dispatch = useDispatch()

  const getPopularMovies = async ()=>{
    const data = await fetch(POPULAR_MOVIE_URL, API_GET_OPTION)
    const json = await data.json()
    dispatch(addPopularMovies(json.results))
  }

  useEffect(()=>{
    getPopularMovies()
  },[])
}

export const useTopRatedMovies = () =>{
    
  const dispatch = useDispatch()

  const getTopRatedMovies = async ()=>{
    const data = await fetch(TOP_RATED_MOVIE_URL, API_GET_OPTION)
    const json = await data.json()
    dispatch(addTopRatedMovies(json.results))
  }

  useEffect(()=>{
    getTopRatedMovies()
  },[])
}