<template>
    <div>
        <div class="w-full ">
            <movie-search-home/>
        </div>
        <div class="mt-7 w-full flex flex-wrap justify-center gap-2 md:gap-2 lg:gap-2">
            <div class="w-4/5 my-2 md:w-1/4 lg:w-2/12"
                 v-for="favourite_movie in favourite_movies"
                 :key="favourite_movie.id">
                <movie :movie="favourite_movie.movie"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Movie from "../ui/Movie";
    import MovieSearchHome from "../ui/MovieSearchHome";
    import url from "../../api";
    import {mapGetters} from "vuex";
    export default {
        name: "Favourites",
        components: {MovieSearchHome, Movie},
        data(){
            return{
                favourite_movies: {},
            }
        },
        beforeMount() {
            url
                .get("user-favourites/" + this.user.id)
                .then((response)=>
                {
                    console.log(response.data[0].movie)
                    this.favourite_movies = response.data;
                })
        },
        computed:{
            ...mapGetters('auth', {
                user: 'user'
            })
        },
    }
</script>

<style scoped>

</style>