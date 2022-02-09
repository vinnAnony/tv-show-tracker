<template>
    <div class="mt-7 w-full flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-2">
        <div class="w-4/5 my-2 md:w-1/4 lg:w-2/12"
                v-for="movie in movies"
                :key="movie.id">
            <movie :movie="movie" @favMovie="handleFav" />
        </div>
    </div>
</template>

<script>
    import MovieDetails from "./MovieDetails";
    import Movie from "../ui/Movie";
    import axios from "axios";
    export default {
        name: "Home",
        components: {Movie, MovieDetails},
        mounted(){
            axios
                .get("http://localhost:4400/api/auth/users")
                .then((response)=>
                {
                    this.users = response.data;
                })
        },
        data(){
            return{
                movies: {},
            }
        },
    }
</script>

<style scoped>

</style>