import { useDispatch, useSelector } from "react-redux"
import { API_GET_OPTION, NOW_PLAYING_MOVIES_URL, POPULAR_MOVIE_URL, TOP_RATED_MOVIE_URL, UPCOMING_MOVIE_URL } from "../utilis/constants"
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addTrailerVideo, addUpcomingMovies } from "../utilis/redux/slices/movieSlice"
import { useEffect } from "react"
import { addGptMoviesResult } from "../utilis/redux/slices/gptSlice"


export const useGetTrailerOfMovie = async (movieId)=>{
  const dispatch = useDispatch()
  const trailerVideo = useSelector((store)=> store.movies.trailerVideo)

  const getMovieVideos =async ()=>{
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_GET_OPTION)
      const json = await data.json()
      const filterTrailers = json.results.filter((video)=> video.type==="Trailer")
      const trailer = filterTrailers.length ? filterTrailers[0] : json.results[0] ;
      dispatch(addTrailerVideo(trailer))
  }

  useEffect(()=>{
      !trailerVideo && getMovieVideos()
  },[])
}

export const useNowPlayingMovies = () =>{
    
  const dispatch = useDispatch()
  const nowPlayingMovies = useSelector((store)=> store.movies.nowPlayingMovies)

  const getNowPlayingMovies = async ()=>{
    const data = await fetch(NOW_PLAYING_MOVIES_URL, API_GET_OPTION)
    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(()=>{
    !nowPlayingMovies && getNowPlayingMovies()
  },[])
}

export const useUpcomingMovies = () =>{
    
  const dispatch = useDispatch()
  const upcomingMovies = useSelector((store)=> store.movies.upcomingMovies)

  const getUpcomingMovies = async ()=>{
    const data = await fetch(UPCOMING_MOVIE_URL, API_GET_OPTION)
    const json = await data.json()
    dispatch(addUpcomingMovies(json.results))
  }

  useEffect(()=>{
    !upcomingMovies && getUpcomingMovies()
  },[])
}

export const usePopularMovies = () =>{
    
  const dispatch = useDispatch()
  const popularMovies = useSelector((store)=> store.movies.popularMovies)

  const getPopularMovies = async ()=>{
    const data = await fetch(POPULAR_MOVIE_URL, API_GET_OPTION)
    const json = await data.json()
    dispatch(addPopularMovies(json.results))
  }

  useEffect(()=>{
    !popularMovies && getPopularMovies()
  },[])
}

export const useTopRatedMovies = () =>{
    
  const dispatch = useDispatch()
  const topRatedMovies = useSelector((store)=> store.movies.topRatedMovies)

  const getTopRatedMovies = async ()=>{
    const data = await fetch(TOP_RATED_MOVIE_URL, API_GET_OPTION)
    const json = await data.json()
    dispatch(addTopRatedMovies(json.results))
  }

  useEffect(()=>{
    !topRatedMovies && getTopRatedMovies()
  },[])
}

// SESARCH MOVIES- GPT
const searchTMDBMovie = async(movie)=>{
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1"
    )
    const json = await data.json()

    return json.result
  }
export const handleGptSearchClick = async (e, dispatch,searchText, openAi)=>{
    e.preventDefault()
    // value in input of searchText
    // console.log(searchText.current.value)

    // More clear query to pass as content in message to create good/better suggestion/result.
    const gptQuery = "Act as movie recommandation system and suggest some movies for the query : " + 
                        searchText.current.value 
                      +". only gives names of 5 movies, comma separated. Example : Gadar, Golmaal, Sholay, Koi Mil Gaya, Don"

    const gptResult = await openAi.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResult.choices){
      return console.log('There is no gpt resutl !!!')
    }

    console.log(gptResult.choices?.[0]?.message?.content) // string = "andazz apna pana, Golmaal, Don, Hera pheri, Joker"
    const gptMovieSuggestion = gptResult.choices?.[0]?.message?.content.split(', ')  // array = ["andazz apna pana", "Golmaal", "Don", "Hera pheri", "Joker"]

    // loop for every movie title
    const promiseMovieArray = gptMovieSuggestion.map((movie)=>searchTMDBMovie(movie)) // [promise, promise, promise, promise, promise]

    // map will continue interact either the promise completed or pending
    // Promise.all = return an array if all promises give results or completed
    const tmdbMoviesResultPromiseAll = await Promise.all(promiseMovieArray) // [[array1], [array2], [array3], [array4], [array5]]
    console.log(tmdbMoviesResultPromiseAll) 

    // dispatch action to store search suggested movies in gptSlice
    dispatch(addGptMoviesResult({ moviesNames:gptMovieSuggestion ,moviesResultArray:tmdbMoviesResultPromiseAll}))
  }