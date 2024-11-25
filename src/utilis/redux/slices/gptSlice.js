import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"GPT",
    initialState:{
        showGptSearch:false,
        gptSearchMoviesNames: ["Hera Pheri", "Golmaal", "De Dana Dan"],
        gptSearchMoviesResult: [
            [
                {
                  "adult": false,
                  "backdrop_path": "/4awpqEzHTaubD2H7iu1gEfTSxCZ.jpg",
                  "genre_ids": [
                    35,
                    80
                  ],
                  "id": 21614,
                  "original_language": "hi",
                  "original_title": "Hera Pheri",
                  "overview": "Three unemployed men find the answer to all their money problems when they receive a call from a kidnapper. However, things do not go as planned.",
                  "popularity": 13.485,
                  "poster_path": "/kdgazQ9Beh6IzFCGtjHb93w0KXk.jpg",
                  "release_date": "2000-03-31",
                  "title": "Hera Pheri",
                  "video": false,
                  "vote_average": 6.978,
                  "vote_count": 250
                },
                {
                  "adult": false,
                  "backdrop_path": "/vr4fskAEI91XoBNMxEiW8Tx3Q6g.jpg",
                  "genre_ids": [
                    28,
                    35,
                    18
                  ],
                  "id": 170645,
                  "original_language": "hi",
                  "original_title": "Hera Pheri",
                  "overview": "Two con men, Vijay and Ajay, manage to hoodwink a number of wealthy people as well as Police Commissioner Khanna. Their lives undergo many changes, after a caper at a casino, where Vijay is recognized by a gangster named P.K., who decides to separate the two friends by claiming that Ajay is his long-lost son; insinuating that Vijay has not been completely forthright with Ajay; and implicating him in the murder of a male named Mac. Written by rAjOo (gunwanti@hotmail.com)",
                  "popularity": 1.715,
                  "poster_path": "/hUlekD8DKi7GBTqy5HIrVovnU8i.jpg",
                  "release_date": "1976-10-01",
                  "title": "Hera Pheri",
                  "video": false,
                  "vote_average": 5.9,
                  "vote_count": 8
                },
                {
                  "adult": false,
                  "backdrop_path": "/802ronXWzXTOlue05ZBTZqSTSFH.jpg",
                  "genre_ids": [
                    35
                  ],
                  "id": 20359,
                  "original_language": "hi",
                  "original_title": "Phir Hera Pheri",
                  "overview": "Raju,  Shyam and Baburao are living happily after having risen from rags to riches. However, they lose it all after falling victim to a chit fund scam due to their greed for more money. Soon, they find themselves in new mess and encounter eccentric and dangerous characters in their quest for a shortcut to riches again.",
                  "popularity": 21.757,
                  "poster_path": "/c1Mvyd983ZyrU5Vf2aKEe6WncSq.jpg",
                  "release_date": "2006-06-09",
                  "title": "Phir Hera Pheri",
                  "video": false,
                  "vote_average": 6.6,
                  "vote_count": 119
                },
            ],
            [
                {
                  "adult": false,
                  "backdrop_path": "/aXfzUiSKaZAK0EL1FFqITuIR1wB.jpg",
                  "genre_ids": [
                    35
                  ],
                  "id": 14546,
                  "original_language": "hi",
                  "original_title": "गोलमाल रिटर्न्स",
                  "overview": "Stuck all night on a yacht with a damsel in distress, Gopal lies to his soap opera junkie wife to avoid drama. This sets off a chain of chaotic events that ultimately land him smack dab in the middle of a police case.",
                  "popularity": 6.463,
                  "poster_path": "/2X6ZSlnBpgsOpH0ELDraWTD4QO7.jpg",
                  "release_date": "2008-10-29",
                  "title": "Golmaal Returns",
                  "video": false,
                  "vote_average": 5.2,
                  "vote_count": 100
                },
                {
                  "adult": false,
                  "backdrop_path": "/8W8FnDTG6YToiahlivjahbBunMN.jpg",
                  "genre_ids": [
                    35,
                    10751
                  ],
                  "id": 44978,
                  "original_language": "hi",
                  "original_title": "गोलमाल 3",
                  "overview": "Golmaal 3 highlights the story of hatred between two bunch of siblings within a family. The family that eats together prays together, lives together, and can't stand each other.",
                  "popularity": 7.246,
                  "poster_path": "/1pB5cZOtc8bj1rBLAJk4Nukhj6s.jpg",
                  "release_date": "2010-11-05",
                  "title": "Golmaal 3",
                  "video": false,
                  "vote_average": 5.416,
                  "vote_count": 77
                },
                {
                  "adult": false,
                  "backdrop_path": "/vstG9R65y2GlWbmrd1KJx2Rc300.jpg",
                  "genre_ids": [
                    35,
                    10751
                  ],
                  "id": 19670,
                  "original_language": "hi",
                  "original_title": "गोलमाल",
                  "overview": "Four runaway cons take shelter in a bungalow owned by an old blind couple.",
                  "popularity": 11.124,
                  "poster_path": "/3ubefqLk26Gy0lXCfGIu8hQrBak.jpg",
                  "release_date": "2006-07-14",
                  "title": "Golmaal – Fun Unlimited",
                  "video": false,
                  "vote_average": 6.6,
                  "vote_count": 120
                },
                {
                  "adult": false,
                  "backdrop_path": "/2JTqYozAkCUga9LSq64gI9CJ8Bm.jpg",
                  "genre_ids": [
                    35,
                    27,
                    28,
                    14
                  ],
                  "id": 472123,
                  "original_language": "hi",
                  "original_title": "गोलमाल अगेन",
                  "overview": "Gopal and his best friends are back again, and this time they move back to their old neighborhood in a new palatial house where they learn that it is being haunted by a ghost.",
                  "popularity": 6.72,
                  "poster_path": "/kGx26PL1v658T8XbOk5MfmNpHU3.jpg",
                  "release_date": "2017-10-20",
                  "title": "Golmaal Again",
                  "video": false,
                  "vote_average": 5.447,
                  "vote_count": 94
                },
                {
                  "adult": false,
                  "backdrop_path": null,
                  "genre_ids": [
                    35,
                    12
                  ],
                  "id": 1214368,
                  "original_language": "hi",
                  "original_title": "Golmaal 5",
                  "overview": "A group of childhood friends get caught in a puzzling situation, as they have a knack for it.",
                  "popularity": 2.704,
                  "poster_path": null,
                  "release_date": "",
                  "title": "Golmaal 5",
                  "video": false,
                  "vote_average": 0,
                  "vote_count": 0
                },
                {
                  "adult": false,
                  "backdrop_path": null,
                  "genre_ids": [
                    16
                  ],
                  "id": 891593,
                  "original_language": "hi",
                  "original_title": "Chacha Bhatija - Golmaal Hai Bhai Golmaal Hai",
                  "overview": "",
                  "popularity": 0.001,
                  "poster_path": "/ypYuumFLi55g7Tivz9uLGJqYZyB.jpg",
                  "release_date": "",
                  "title": "Chacha Bhatija - Golmaal Hai Bhai Golmaal Hai",
                  "video": false,
                  "vote_average": 0,
                  "vote_count": 0
                },
            ],
            [
                {
                  "adult": false,
                  "backdrop_path": "/oGqm34dOutHl1FlSqHjSUbEgKRY.jpg",
                  "genre_ids": [
                    35,
                    80
                  ],
                  "id": 25867,
                  "original_language": "hi",
                  "original_title": "De Dana Dan",
                  "overview": "Two down on their luck men try to kidnap a wealthy businesswoman's dog to demand a hefty ransom from her.  But things go haywire when the dog goes missing.",
                  "popularity": 8.206,
                  "poster_path": "/htOpALyz5x1Ee7YuZpaRCPEwEuX.jpg",
                  "release_date": "2009-11-27",
                  "title": "De Dana Dan",
                  "video": false,
                  "vote_average": 5.6,
                  "vote_count": 78
                },
                {
                  "adult": false,
                  "backdrop_path": "/bZRRXbnEgWHAw0shjpC82V5Fm0m.jpg",
                  "genre_ids": [
                    35,
                    28
                  ],
                  "id": 26262,
                  "original_language": "mr",
                  "original_title": "दे दणा दण",
                  "overview": "Lakshya, a police constable gets some extra ordinary powers in his body after he is saved from a blast.",
                  "popularity": 2.066,
                  "poster_path": "/keVziyNOVshiHQthPfJSZrdHSGi.jpg",
                  "release_date": "1987-01-01",
                  "title": "De Dana Dan",
                  "video": false,
                  "vote_average": 6,
                  "vote_count": 1
                }
            ]
        ]
    },
    reducers:{
        toggleGptSearchView:(state, action)=>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptMoviesResult:(state, action)=>{
            const {moviesNames, moviesResultArray} = action.payload
            state.gptSearchMoviesNames = moviesNames
            state.gptSearchMoviesResult = moviesResultArray
        }
    }
})

export const {toggleGptSearchView, addGptMoviesResult} = gptSlice.actions
export default gptSlice.reducer;
