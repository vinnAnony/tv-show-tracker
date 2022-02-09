<template>
    <div>
        <div class="w-full ">
            <movie-search-home/>
        </div>
        <div class="mt-7 w-full flex flex-wrap justify-center gap-2 md:gap-2 lg:gap-2">
            <div class="w-4/5 my-2 md:w-1/4 lg:w-2/12"
                 v-for="movie in movies"
                 :key="movie.id">
                <movie :movie="movie"/>
            </div>
        </div>
    </div>

</template>

<script>
    import MovieDetails from "./MovieDetails";
    import Movie from "../ui/Movie";
    import url from '../../api/index';
    import MovieSearchHome from "../ui/MovieSearchHome";
    export default {
        name: "Home",
        components: {MovieSearchHome, Movie, MovieDetails},
        data(){
            return{
                movies: {},
            }
        },
        mounted(){
            url
                .get("movies")
                .then((response)=>
                {
                    this.movies = response.data;
                })
        },
    }
</script>

<style scoped>

</style>