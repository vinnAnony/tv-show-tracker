<template>
    <div class="mx-2">
        <div class="w-full h-80 rounded-md overflow-hidden bg-gray-50 lg:h-64">

                <div v-if="movieDetails.poster_url !== ''" class="w-full h-full">
                    <img :src="movieDetails.poster_url"
                            class="w-full h-full aspect-auto md:object-cover lg:aspect-auto"
                            :alt="movieDetails.movie_name"/>
                </div>
                <div v-else>
                    <img src="../../assets/images/no-image.png"
                            class="w-full h-full object-cover"
                            :alt="movieDetails.movie_name"/>
                </div>
        </div>

        <div class="mt-4 px-4 w-full">
            <div class="flex items-center justify-between h-10">

                <h3 class="text-red-400 font-medium text-xl tracking-wide">
                    {{ movieDetails.movie_name }}
                </h3>

                <div class="flex align-center gap-2">
                    <button class="text-red-400 cursor-pointer" @click="toggleFavourite(movieDetails.id, $event)">
                        <font-awesome-icon icon="heart" class="mr-2 text-blueGray-400 text-2xl"/>
                    </button>
                    <button class="text-blue-400 cursor-pointer" @click="toggleSubscribe(movieDetails.id, $event)">
                        <font-awesome-icon icon="bookmark" class="mr-2 text-blueGray-400 text-2xl"/>
                    </button>
                </div>

            </div>
            <div class="text-gray-400 flex mt-3 items-center font-medium text-sm">
                <font-awesome-icon icon="film" class="text-gray-400 mr-2 text-xl"/>

                {{ movieDetails.genre.genre_name }}
            </div>
        </div>
        <div class="mt-4 px-4 w-full">
            <div class="text-gray-900 flex mt-3 items-center font-medium text-sm">
                <h3 class="text-gray-900 font-medium text-md tracking-wide">Description</h3>
            </div>
            <div class="text-gray-500 flex mt-3 items-center font-medium text-sm">
                <p>{{ movieDetails.description }}</p>
            </div>
        </div>
        <div class="mt-4 px-4 w-full">
            <div class="text-gray-500 flex mt-3 items-center font-medium text-sm">
                <h3 class="text-gray-900 font-medium text-md tracking-wide">Comments</h3>
            </div>
            <div class="w-full text-gray-500 flex mt-3 items-center font-medium text-sm">
                <div>
                    <section class="rounded-b-lg mt-4 ">
                        <div id="movie-comments" class="pt-4">
                            <comment>
                                <template #username>
                                    Shantell
                                </template>
                                <template #comment>
                                    Hi good morning will it be the entire house.
                                    Hi good morning will it be the entire house.
                                </template>
                            </comment>
                        </div>
                        <form >
                            <textarea
                                    class="w-full shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-2xl"
                                    placeholder="Leave a comment here." cols="6" rows="6" id="comment_content"
                                    spellcheck="false"/>
                            <button class="font-bold py-2 px-4 w-full bg-purple-400 text-lg text-white shadow-md rounded-lg ">Comment </button>
                        </form>
                    </section>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Comment from "../ui/Comment";
    export default {
        name: "MovieDetails",
        components: {Comment},
        props: {
            movieDetails: {
                type: Object
            },
        },
        data(){
            return{
                comments:{

                },
            }
        },
    }
</script>

<style scoped>

</style>