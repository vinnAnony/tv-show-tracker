<template>
    <div class="mx-2 pt-2">
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
                    <button class="cursor-pointer" @click="toggleFavourite(movieDetails.id)"
                            :class="isFavourite ? 'text-red-400': ''">
                        <font-awesome-icon icon="heart" class="mr-2 text-2xl"/>
                    </button>
                </div>

            </div>
            <div class="flex align-center justify-between gap-2 pt-3">
                <div>
                    <font-awesome-icon icon="film" class="text-gray-400 mr-2 text-xl"/>
                    {{ movieDetails.genre.genre_name }}
                </div>
                <button class="cursor-pointer ml-3" @click="toggleSubscribe(movieDetails.id)"
                        :class="isSubscribed ? 'text-blue-400': ''">
                    <font-awesome-icon icon="bookmark" class="mr-2 text-2xl"/>
                </button>
            </div>
        </div>
        <div class="mt-4 px-4 w-full">
            <div class="text-gray-900 flex mt-3 items-center font-medium text-sm">
                <h3 class="text-gray-900 font-medium text-xl tracking-wide">Actors</h3>
            </div>
            <div class="text-blue-500 flex items-center font-medium text-sm">
                <p v-for="movie_actor in movieDetails.movie_actors" :key="movie_actor.id" class="text-sm leading-7">
                    {{movie_actor.actor.actor_name}},
                </p>
            </div>
        </div>
        <div class="mt-4 px-4 w-full">
            <div class="text-gray-900 flex mt-3 items-center font-medium text-sm">
                <h3 class="text-gray-900 font-medium text-xl tracking-wide">Description</h3>
            </div>
            <div class="text-gray-500 flex items-center font-medium text-sm">
                <p>{{ movieDetails.description }}</p>
            </div>
        </div>
        <div class="mt-4 px-4 w-full">
            <div class="text-gray-500 flex mt-3 items-center font-medium text-sm">
                <h3 class="text-gray-900 font-medium text-xl tracking-wide">Comments</h3>
            </div>
            <div class="w-full text-gray-500 font-medium text-sm pb-4">
                <div>
                    <section class="rounded-b-lg mt-0 ">
                        <div id="movie-comments" class="pt-4">
                            <comment v-for="comment in comments" :key="comment.id" class="bg-gray-100">
                                <template #username>
                                    {{comment.user.user_name ? comment.user.user_name : 'Anonymous'}}
                                </template>
                                <template #comment>
                                    {{comment.comment}}
                                </template>
                            </comment>
                        </div>
                        <form>
                            <textarea
                                    class="w-full shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline outline text-2xl"
                                    placeholder="Leave a comment here." cols="6" rows="6" id="comment_content"
                                    spellcheck="false"/>
                            <button class="font-bold py-2 px-4 w-full bg-purple-400 text-lg text-white shadow-md rounded-lg hover:bg-purple-700">Comment </button>
                        </form>
                    </section>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Comment from "../ui/Comment";
    import url from "../../api";
    import {mapGetters} from "vuex";
    export default {
        name: "MovieDetails",
        components: {Comment},
        props: {
            movieDetails: {
                type: Object
            },
            fromFavourites: {
                type: Boolean
            },
            fromSubscriptions: {
                type: Boolean
            },
        },
        data(){
            return{
                comments:{},
                isFavourite:false,
                isSubscribed:false,
            }
        },
        beforeMount(){
            if (this.fromFavourites)
                this.isFavourite = true;
            if (this.fromSubscriptions)
                this.isSubscribed = true;
            //fetch comments
            url
                .get("movies-details/" + this.movieDetails.id)
                .then((response)=>
                {
                    this.comments = response.data[0].comments;
                });

            //check if favourite
            if (this.notEmptyFavs){
                const favMovies = JSON.parse(localStorage.getItem('favMovies'));
                const checkFav = favMovies.filter(movie => {
                    return movie.movie_id === this.movieDetails.id
                });
                if (checkFav.length>0)
                    this.isFavourite = true;
            }

        },
        methods: {
            toggleFavourite(id){

            },
            toggleSubscribe(id){

            },
        },
        computed:{
            ...mapGetters('favMovies', {
                notEmptyFavs: 'notEmptyFavs',
                favMovies: 'favMovies'
            })
        },
    }
</script>

<style scoped>

</style>