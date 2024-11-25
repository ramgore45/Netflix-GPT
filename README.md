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
    -nowplayingmovies, upcomingMovie, topRatedMovies, popularMovies
-useMOviesHook =>
        -useNowPlayingMovies
        -usePopularMovies
        -useTopRatedMovies
        -useUpcomingmovies
-MEMORIZATIONS=>
    - if once data is once fetch and else if all ready present in store, then there is no need to make an API call    each times when componenet is render
    - examples:- !nowPlayingMovies && getNowPlayingMovies() ---- in useNowPlayingMovies hook
        -nowPlayingMovies is null then run the funcition.
-GPT Page =>
    -Gpt Search bar
    -gptSlice, configSlice
    -feature = Multi Languages Selction In Header
    -handleGptSearchClick button = 
        -OPEN AI config,
        -written a meaningfull gptQuery
        -create a openAI result from provided query // list of suggested movies store as an array
        -store it in gptSlice gptSearchMviesNameSuggestions
    -searchTMDBMovie =
        - run a loop/map for each suggested movies which is store as an array format.
        - searchTMDBmovies fetch movies for every moviesName in map iterations.
        - Promise.All = map interation returns a promises, if all promises completed then store it in array
        - store the result in moviesResultArray.


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
