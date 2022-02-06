<template>
    <div class="mt-7 w-full flex flex-wrap justify-around gap-5 md:gap-8 lg:gap-5">
        <div class="w-2/5 my-2 md:w-1/4 lg:w-2/12"
                v-for="movie in movies"
                :key="movie.id">
            <movie :movie="movie" @favMovie="handleFav" />
        </div>
    </div>
</template>

<script>
    import MovieDetails from "./MovieDetails";
    import Movie from "../ui/Movie";
    export default {
        name: "Home",
        components: {Movie, MovieDetails},
        data(){
            return{
                movies: {
                    0:{
                        "id": 1,
                        "movie_name": "King Kong: Skull Island",
                        "genre_id": 1,
                        "movie_type_id": 1,
                        "description": "A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives.",
                        "rating": 7.2,
                        "poster_url": "https://www.imdb.com/title/tt0360717/mediaviewer/rm2524386304/",
                        "createdAt": "2022-02-05T14:05:13.000Z",
                        "updatedAt": "2022-02-05T14:05:13.000Z",
                        "genre": {
                        "id": 1,
                            "genre_name": "Action",
                            "createdAt": "2022-02-05T13:29:37.000Z",
                            "updatedAt": "2022-02-05T13:29:37.000Z"
                    },
                        "comments": [
                        {
                            "id": 1,
                            "user_id": 1,
                            "movie_id": 1,
                            "comment": "Good Movie",
                            "createdAt": "2022-02-05T13:30:19.000Z",
                            "updatedAt": "2022-02-05T13:30:19.000Z"
                        }
                    ],
                        "user_ratings": [
                        {
                            "id": 1,
                            "movie_id": 1,
                            "user_id": 1,
                            "rating": 7.1,
                            "createdAt": "2022-02-05T13:30:15.000Z",
                            "updatedAt": "2022-02-05T13:30:15.000Z"
                        }
                    ],
                        "movie_actors": [
                        {
                            "id": 2,
                            "actor_id": 2,
                            "movie_id": 1,
                            "createdAt": "2022-02-05T14:18:38.000Z",
                            "updatedAt": "2022-02-05T14:18:38.000Z",
                            "actor": {
                                "id": 2,
                                "actor_name": "Paul Walker",
                                "profile_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnet.com%2Fnews%2Ffast-and-furious-fans-celebrate-f9-with-vin-diesel-i-got-family-memes%2F&psig=AOvVaw2Cbm0DD8lUiTE2aioJH6c0&ust=1643971005455000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOiBt7qr4_UCFQAAAAAdAAAAABAD",
                                "createdAt": "2022-02-05T14:18:24.000Z",
                                "updatedAt": "2022-02-05T14:18:24.000Z"
                            }
                        },
                        {
                            "id": 1,
                            "actor_id": 1,
                            "movie_id": 1,
                            "createdAt": "2022-02-05T14:08:25.000Z",
                            "updatedAt": "2022-02-05T14:08:25.000Z",
                            "actor": {
                                "id": 1,
                                "actor_name": "Vin Diesel",
                                "profile_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnet.com%2Fnews%2Ffast-and-furious-fans-celebrate-f9-with-vin-diesel-i-got-family-memes%2F&psig=AOvVaw2Cbm0DD8lUiTE2aioJH6c0&ust=1643971005455000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOiBt7qr4_UCFQAAAAAdAAAAABAD",
                                "createdAt": "2022-02-05T14:05:03.000Z",
                                "updatedAt": "2022-02-05T14:05:03.000Z"
                            }
                        }
                    ]
                    },
                    1:{
                        "id": 1,
                        "movie_name": "King Kong: Skull Island",
                        "genre_id": 1,
                        "movie_type_id": 1,
                        "description": "A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives.",
                        "rating": 7.2,
                        "poster_url": "https://www.imdb.com/title/tt0360717/mediaviewer/rm2524386304/",
                        "createdAt": "2022-02-05T14:05:13.000Z",
                        "updatedAt": "2022-02-05T14:05:13.000Z",
                        "genre": {
                            "id": 1,
                            "genre_name": "Action",
                            "createdAt": "2022-02-05T13:29:37.000Z",
                            "updatedAt": "2022-02-05T13:29:37.000Z"
                        },
                        "comments": [
                            {
                                "id": 1,
                                "user_id": 1,
                                "movie_id": 1,
                                "comment": "Good Movie",
                                "createdAt": "2022-02-05T13:30:19.000Z",
                                "updatedAt": "2022-02-05T13:30:19.000Z"
                            }
                        ],
                        "user_ratings": [
                            {
                                "id": 1,
                                "movie_id": 1,
                                "user_id": 1,
                                "rating": 7.1,
                                "createdAt": "2022-02-05T13:30:15.000Z",
                                "updatedAt": "2022-02-05T13:30:15.000Z"
                            }
                        ],
                        "movie_actors": [
                            {
                                "id": 2,
                                "actor_id": 2,
                                "movie_id": 1,
                                "createdAt": "2022-02-05T14:18:38.000Z",
                                "updatedAt": "2022-02-05T14:18:38.000Z",
                                "actor": {
                                    "id": 2,
                                    "actor_name": "Paul Walker",
                                    "profile_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnet.com%2Fnews%2Ffast-and-furious-fans-celebrate-f9-with-vin-diesel-i-got-family-memes%2F&psig=AOvVaw2Cbm0DD8lUiTE2aioJH6c0&ust=1643971005455000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOiBt7qr4_UCFQAAAAAdAAAAABAD",
                                    "createdAt": "2022-02-05T14:18:24.000Z",
                                    "updatedAt": "2022-02-05T14:18:24.000Z"
                                }
                            },
                            {
                                "id": 1,
                                "actor_id": 1,
                                "movie_id": 1,
                                "createdAt": "2022-02-05T14:08:25.000Z",
                                "updatedAt": "2022-02-05T14:08:25.000Z",
                                "actor": {
                                    "id": 1,
                                    "actor_name": "Vin Diesel",
                                    "profile_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnet.com%2Fnews%2Ffast-and-furious-fans-celebrate-f9-with-vin-diesel-i-got-family-memes%2F&psig=AOvVaw2Cbm0DD8lUiTE2aioJH6c0&ust=1643971005455000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOiBt7qr4_UCFQAAAAAdAAAAABAD",
                                    "createdAt": "2022-02-05T14:05:03.000Z",
                                    "updatedAt": "2022-02-05T14:05:03.000Z"
                                }
                            }
                        ]
                    },
                    2:{
                        "id": 1,
                        "movie_name": "King Kong: Skull Island",
                        "genre_id": 1,
                        "movie_type_id": 1,
                        "description": "A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives.",
                        "rating": 7.2,
                        "poster_url": "https://www.imdb.com/title/tt0360717/mediaviewer/rm2524386304/",
                        "createdAt": "2022-02-05T14:05:13.000Z",
                        "updatedAt": "2022-02-05T14:05:13.000Z",
                        "genre": {
                            "id": 1,
                            "genre_name": "Action",
                            "createdAt": "2022-02-05T13:29:37.000Z",
                            "updatedAt": "2022-02-05T13:29:37.000Z"
                        },
                        "comments": [
                            {
                                "id": 1,
                                "user_id": 1,
                                "movie_id": 1,
                                "comment": "Good Movie",
                                "createdAt": "2022-02-05T13:30:19.000Z",
                                "updatedAt": "2022-02-05T13:30:19.000Z"
                            }
                        ],
                        "user_ratings": [
                            {
                                "id": 1,
                                "movie_id": 1,
                                "user_id": 1,
                                "rating": 7.1,
                                "createdAt": "2022-02-05T13:30:15.000Z",
                                "updatedAt": "2022-02-05T13:30:15.000Z"
                            }
                        ],
                        "movie_actors": [
                            {
                                "id": 2,
                                "actor_id": 2,
                                "movie_id": 1,
                                "createdAt": "2022-02-05T14:18:38.000Z",
                                "updatedAt": "2022-02-05T14:18:38.000Z",
                                "actor": {
                                    "id": 2,
                                    "actor_name": "Paul Walker",
                                    "profile_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnet.com%2Fnews%2Ffast-and-furious-fans-celebrate-f9-with-vin-diesel-i-got-family-memes%2F&psig=AOvVaw2Cbm0DD8lUiTE2aioJH6c0&ust=1643971005455000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOiBt7qr4_UCFQAAAAAdAAAAABAD",
                                    "createdAt": "2022-02-05T14:18:24.000Z",
                                    "updatedAt": "2022-02-05T14:18:24.000Z"
                                }
                            },
                            {
                                "id": 1,
                                "actor_id": 1,
                                "movie_id": 1,
                                "createdAt": "2022-02-05T14:08:25.000Z",
                                "updatedAt": "2022-02-05T14:08:25.000Z",
                                "actor": {
                                    "id": 1,
                                    "actor_name": "Vin Diesel",
                                    "profile_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnet.com%2Fnews%2Ffast-and-furious-fans-celebrate-f9-with-vin-diesel-i-got-family-memes%2F&psig=AOvVaw2Cbm0DD8lUiTE2aioJH6c0&ust=1643971005455000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOiBt7qr4_UCFQAAAAAdAAAAABAD",
                                    "createdAt": "2022-02-05T14:05:03.000Z",
                                    "updatedAt": "2022-02-05T14:05:03.000Z"
                                }
                            }
                        ]
                    },
                    3:{
                        "id": 1,
                        "movie_name": "King Kong: Skull Island",
                        "genre_id": 1,
                        "movie_type_id": 1,
                        "description": "A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives.",
                        "rating": 7.2,
                        "poster_url": "https://www.imdb.com/title/tt0360717/mediaviewer/rm2524386304/",
                        "createdAt": "2022-02-05T14:05:13.000Z",
                        "updatedAt": "2022-02-05T14:05:13.000Z",
                        "genre": {
                            "id": 1,
                            "genre_name": "Action",
                            "createdAt": "2022-02-05T13:29:37.000Z",
                            "updatedAt": "2022-02-05T13:29:37.000Z"
                        },
                        "comments": [
                            {
                                "id": 1,
                                "user_id": 1,
                                "movie_id": 1,
                                "comment": "Good Movie",
                                "createdAt": "2022-02-05T13:30:19.000Z",
                                "updatedAt": "2022-02-05T13:30:19.000Z"
                            }
                        ],
                        "user_ratings": [
                            {
                                "id": 1,
                                "movie_id": 1,
                                "user_id": 1,
                                "rating": 7.1,
                                "createdAt": "2022-02-05T13:30:15.000Z",
                                "updatedAt": "2022-02-05T13:30:15.000Z"
                            }
                        ],
                        "movie_actors": [
                            {
                                "id": 2,
                                "actor_id": 2,
                                "movie_id": 1,
                                "createdAt": "2022-02-05T14:18:38.000Z",
                                "updatedAt": "2022-02-05T14:18:38.000Z",
                                "actor": {
                                    "id": 2,
                                    "actor_name": "Paul Walker",
                                    "profile_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnet.com%2Fnews%2Ffast-and-furious-fans-celebrate-f9-with-vin-diesel-i-got-family-memes%2F&psig=AOvVaw2Cbm0DD8lUiTE2aioJH6c0&ust=1643971005455000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOiBt7qr4_UCFQAAAAAdAAAAABAD",
                                    "createdAt": "2022-02-05T14:18:24.000Z",
                                    "updatedAt": "2022-02-05T14:18:24.000Z"
                                }
                            },
                            {
                                "id": 1,
                                "actor_id": 1,
                                "movie_id": 1,
                                "createdAt": "2022-02-05T14:08:25.000Z",
                                "updatedAt": "2022-02-05T14:08:25.000Z",
                                "actor": {
                                    "id": 1,
                                    "actor_name": "Vin Diesel",
                                    "profile_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnet.com%2Fnews%2Ffast-and-furious-fans-celebrate-f9-with-vin-diesel-i-got-family-memes%2F&psig=AOvVaw2Cbm0DD8lUiTE2aioJH6c0&ust=1643971005455000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOiBt7qr4_UCFQAAAAAdAAAAABAD",
                                    "createdAt": "2022-02-05T14:05:03.000Z",
                                    "updatedAt": "2022-02-05T14:05:03.000Z"
                                }
                            }
                        ]
                    },
                    4:{
                        "id": 1,
                        "movie_name": "King Kong: Skull Island",
                        "genre_id": 1,
                        "movie_type_id": 1,
                        "description": "A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives.",
                        "rating": 7.2,
                        "poster_url": "https://www.imdb.com/title/tt0360717/mediaviewer/rm2524386304/",
                        "createdAt": "2022-02-05T14:05:13.000Z",
                        "updatedAt": "2022-02-05T14:05:13.000Z",
                        "genre": {
                            "id": 1,
                            "genre_name": "Action",
                            "createdAt": "2022-02-05T13:29:37.000Z",
                            "updatedAt": "2022-02-05T13:29:37.000Z"
                        },
                        "comments": [
                            {
                                "id": 1,
                                "user_id": 1,
                                "movie_id": 1,
                                "comment": "Good Movie",
                                "createdAt": "2022-02-05T13:30:19.000Z",
                                "updatedAt": "2022-02-05T13:30:19.000Z"
                            }
                        ],
                        "user_ratings": [
                            {
                                "id": 1,
                                "movie_id": 1,
                                "user_id": 1,
                                "rating": 7.1,
                                "createdAt": "2022-02-05T13:30:15.000Z",
                                "updatedAt": "2022-02-05T13:30:15.000Z"
                            }
                        ],
                        "movie_actors": [
                            {
                                "id": 2,
                                "actor_id": 2,
                                "movie_id": 1,
                                "createdAt": "2022-02-05T14:18:38.000Z",
                                "updatedAt": "2022-02-05T14:18:38.000Z",
                                "actor": {
                                    "id": 2,
                                    "actor_name": "Paul Walker",
                                    "profile_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnet.com%2Fnews%2Ffast-and-furious-fans-celebrate-f9-with-vin-diesel-i-got-family-memes%2F&psig=AOvVaw2Cbm0DD8lUiTE2aioJH6c0&ust=1643971005455000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOiBt7qr4_UCFQAAAAAdAAAAABAD",
                                    "createdAt": "2022-02-05T14:18:24.000Z",
                                    "updatedAt": "2022-02-05T14:18:24.000Z"
                                }
                            },
                            {
                                "id": 1,
                                "actor_id": 1,
                                "movie_id": 1,
                                "createdAt": "2022-02-05T14:08:25.000Z",
                                "updatedAt": "2022-02-05T14:08:25.000Z",
                                "actor": {
                                    "id": 1,
                                    "actor_name": "Vin Diesel",
                                    "profile_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnet.com%2Fnews%2Ffast-and-furious-fans-celebrate-f9-with-vin-diesel-i-got-family-memes%2F&psig=AOvVaw2Cbm0DD8lUiTE2aioJH6c0&ust=1643971005455000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOiBt7qr4_UCFQAAAAAdAAAAABAD",
                                    "createdAt": "2022-02-05T14:05:03.000Z",
                                    "updatedAt": "2022-02-05T14:05:03.000Z"
                                }
                            }
                        ]
                    },
                    6:{
                        "id": 1,
                        "movie_name": "King Kong: Skull Island",
                        "genre_id": 1,
                        "movie_type_id": 1,
                        "description": "A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives.",
                        "rating": 7.2,
                        "poster_url": "https://www.imdb.com/title/tt0360717/mediaviewer/rm2524386304/",
                        "createdAt": "2022-02-05T14:05:13.000Z",
                        "updatedAt": "2022-02-05T14:05:13.000Z",
                        "genre": {
                            "id": 1,
                            "genre_name": "Action",
                            "createdAt": "2022-02-05T13:29:37.000Z",
                            "updatedAt": "2022-02-05T13:29:37.000Z"
                        },
                        "comments": [
                            {
                                "id": 1,
                                "user_id": 1,
                                "movie_id": 1,
                                "comment": "Good Movie",
                                "createdAt": "2022-02-05T13:30:19.000Z",
                                "updatedAt": "2022-02-05T13:30:19.000Z"
                            }
                        ],
                        "user_ratings": [
                            {
                                "id": 1,
                                "movie_id": 1,
                                "user_id": 1,
                                "rating": 7.1,
                                "createdAt": "2022-02-05T13:30:15.000Z",
                                "updatedAt": "2022-02-05T13:30:15.000Z"
                            }
                        ],
                        "movie_actors": [
                            {
                                "id": 2,
                                "actor_id": 2,
                                "movie_id": 1,
                                "createdAt": "2022-02-05T14:18:38.000Z",
                                "updatedAt": "2022-02-05T14:18:38.000Z",
                                "actor": {
                                    "id": 2,
                                    "actor_name": "Paul Walker",
                                    "profile_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnet.com%2Fnews%2Ffast-and-furious-fans-celebrate-f9-with-vin-diesel-i-got-family-memes%2F&psig=AOvVaw2Cbm0DD8lUiTE2aioJH6c0&ust=1643971005455000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOiBt7qr4_UCFQAAAAAdAAAAABAD",
                                    "createdAt": "2022-02-05T14:18:24.000Z",
                                    "updatedAt": "2022-02-05T14:18:24.000Z"
                                }
                            },
                            {
                                "id": 1,
                                "actor_id": 1,
                                "movie_id": 1,
                                "createdAt": "2022-02-05T14:08:25.000Z",
                                "updatedAt": "2022-02-05T14:08:25.000Z",
                                "actor": {
                                    "id": 1,
                                    "actor_name": "Vin Diesel",
                                    "profile_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnet.com%2Fnews%2Ffast-and-furious-fans-celebrate-f9-with-vin-diesel-i-got-family-memes%2F&psig=AOvVaw2Cbm0DD8lUiTE2aioJH6c0&ust=1643971005455000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOiBt7qr4_UCFQAAAAAdAAAAABAD",
                                    "createdAt": "2022-02-05T14:05:03.000Z",
                                    "updatedAt": "2022-02-05T14:05:03.000Z"
                                }
                            }
                        ]
                    },
                },
            }
        },
    }
</script>

<style scoped>

</style>