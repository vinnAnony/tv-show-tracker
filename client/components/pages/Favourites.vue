<template>
    <div class="mt-7 w-full flex flex-wrap justify-around gap-5 md:gap-8 lg:gap-5">
        <div class="w-2/5 my-2 md:w-1/4 lg:w-2/12"
             v-for="movie in favourite_movies"
             :key="movie.id">
            <movie :movie="movie" @favouriteMovie="handleFavourite" />
        </div>
    </div>
</template>

<script>
    import Movie from "../ui/Movie";
    export default {
        name: "Subscriptions",
        components: {Movie},
        data(){
            return{
                favourite_movies: {},
            }
        },
    }
</script>

<style scoped>

</style>