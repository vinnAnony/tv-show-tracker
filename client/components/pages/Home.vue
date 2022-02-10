<template>
    <div>
        <div class="w-full ">
            <movie-search-home/>
        </div>
        <div class="mt-7 w-full flex flex-wrap justify-center gap-2 md:gap-2 lg:gap-2 mb-4">
            <div class="w-4/5 my-2 md:w-1/4 lg:w-2/12"
                 v-for="movie in movies"
                 :key="movie.id">
                <movie :movie="movie"/>
            </div>
        </div>
        <vue-element-loading :active="isActive" :is-full-screen="true"/>
    </div>
</template>

<script>
    import MovieDetails from "./MovieDetails";
    import Movie from "../ui/Movie";
    import url from '../../api/index';
    import MovieSearchHome from "../ui/MovieSearchHome";
    import VueElementLoading from 'vue-element-loading'
    export default {
        name: "Home",
        components: {MovieSearchHome, Movie, MovieDetails,VueElementLoading},
        data(){
            return{
                movies: {},
            }
        },
        beforeMount(){
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