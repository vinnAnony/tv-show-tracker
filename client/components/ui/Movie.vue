<template>
    <div class="mx-2">
        <div class="w-full h-48 rounded-md overflow-hidden bg-gray-50 lg:h-64">
            <router-link
                    :to="{ name: 'movie-details', params: { id: movie.imdbID } }"
                    class="w-full h-full">
                <div v-if="movie.Poster != 'N/A'" class="w-full h-full">
                    <img src="../../../client/assets/images/the-batman-poster.jpeg"
                            class="w-full h-full aspect-auto md:object-cover lg:aspect-auto"
                            :alt="movie.Title"/>
                </div>
                <div v-else>
                    <img src="../../assets/images/no-image.png"
                            class="w-full h-full object-cover"
                            :alt="movie.Title"/>
                </div>
            </router-link>
        </div>

        <div class="mt-4 px-4 w-full">
            <div class="flex items-center justify-between">

                <router-link :to="{ name: 'movie-details', params: { id: movie.id } }">
                    <h3 class="text-red-500 font-medium text-md tracking-wide">King Kong King Kong King Kong{{ movie.Year }}</h3>
                </router-link>

                <button class="cursor-pointer" @click="toggleFav(movie.imdbID, $event)">
                    <font-awesome-icon icon="heart" class="text-red-400 mr-2 text-xl"/>
                </button>
            </div>
            <div class="text-gray-400 flex mt-3 items-center font-medium text-sm">
                <font-awesome-icon icon="film" class="text-gray-400 mr-2 text-xl"/>

                {{ movie.genre }}Action
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Movie",
        data(){
            return{
                movie: {},
            }
        },
    }
</script>

<style scoped>

</style>