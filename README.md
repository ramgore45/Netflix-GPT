<!-- Netflix GPT -->
# Netflix GPT
-create-ract-app 
-config TailwindC CSS
- hEader
-Routing App
-login from / sign up form
-form Validation
-useRefHook
-firebase setup (install firebase, install firebase tools, init firebase)
-deploy/Host appp to production
-create sign up user account in FireBase
-implemented sign IN user account in FireBase
-created Redux Store(appStore), userSlice
-BUGFIX = 
    -userName update,
    -if user Login then only redirect to '/browse' else redirect to '/'
-unsubcribe the onAuthStateChange callback
-constant.js
-TMDB registeration
-Fetch API for nowPlayingMovies
-movieSlice created in redux
-custom hooks=
    - useNowPlayingMovies() = update nowPlayingMovies in movies store
    - useGetTrailerOfMovie = update trailer in movies store
-browse page
    -mainContainer
        -videoBackground,
        -videoTitle
    -secondary container
        -movieList component
        -movieCard
        -found out IMG TMDB URL
-movieSlice=>
    -upcomingMovie, topRatedMovies, popularMovies
-useMOviesHook =>
            -usePopularMovies
            -useTopRatedMovies
            -useUpcomingmovies
-GPT Page =>
    -Gpt Search bar
    -gptSlice, configSlice
    -feature = Multi Languages Selction In Header


# Features
-landing page(without login)

-login/ Signup
    -login/signup form
    -redirect to browse page

-Browse
    -Header
    -main movie banners
        -Trailor Play in bg
        -Movie TITLE Description
    -movie suggestions, lists of movies(vertical)
        -separate suggestion list such as Romantic, Comedy, Action(horizontal)

-Netflix Gpt 
    -search bar
    -movie suggestions
