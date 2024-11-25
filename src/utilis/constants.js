export const LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'

export const BackgroundImgUrl = 'https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg'

export const USER_AVATAR = 'https://wallpapers.com/images/hd/cool-profile-picture-o6xweez7rh4347gx.jpg'

export const NOW_PLAYING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
export const POPULAR_MOVIE_URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
export const UPCOMING_MOVIE_URL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
export const TOP_RATED_MOVIE_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

export const MOVIE_IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500/'

export const API_GET_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_TMDB_AUTH_TOKEN,
  }
};

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY