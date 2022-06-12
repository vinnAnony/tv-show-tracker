<template>
    <div class="mx-2">
        <div class="w-full h-80 rounded-md overflow-hidden bg-gray-50 lg:h-64">
            <router-link
                    :to="{ name: 'movie-details', params: { movieDetails: movie } }"
                    class="w-full h-full">
                <div v-if="movie.poster_url !== ''" class="w-full h-full">
                    <img :src='movie.poster_url'
                            class="w-full h-full aspect-auto md:object-cover lg:aspect-auto"
                            :alt="movie.movie_name"/>
                </div>
                <div v-else>
                    <img src="../../assets/images/no-image.png"
                            class="w-full h-full object-cover"
                            :alt="movie.movie_name"/>
                </div>
            </router-link>
        </div>

        <div class="mt-4 px-4 w-full">
            <div class="flex items-center justify-between min-width-0">
                <router-link :to="{ name: 'movie-details', params: { movieDetails: movie } }" class="truncate">
                        <h3 class="text-red-500 font-medium text-md tracking-wide">{{ movie.movie_name }}</h3>
                </router-link>

<!--                <button class="cursor-pointer ml-2" @click="toggleFavourite(movie.id)">-->
<!--                    <font-awesome-icon icon="heart" class="mr-2 text-xl" :class="isFavourite ? 'text-red-400' : '' "/>-->
<!--                </button>-->
            </div>
            <div class="text-gray-400 flex mt-3 items-center font-medium text-sm">
                <font-awesome-icon icon="film" class="text-gray-400 mr-2 text-xl"/>

                {{ movie.genre.genre_name }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Movie",
        props: {
            movie: {
                type: Object
            },
        },
        data(){
            return{

            }
        },
    }
</script>

<style scoped>

</style>