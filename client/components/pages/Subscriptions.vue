<template>
    <div>
        <div v-for="subscribed_genre in subscribed_genres" :key="subscribed_genre.id">
            {{subscribed_genre.genre.genre_name}}
            <div class="mt-7 w-full flex flex-wrap justify-around gap-5 md:gap-8 lg:gap-5">
                <div class="w-2/5 my-2 md:w-1/4 lg:w-2/12"
                     v-for="subscribed_movie in subscribed_movies"
                     :key="subscribed_movie.id">
                    <movie :movie="subscribed_movie" />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Movie from "../ui/Movie";
    import url from "../../api";
    import {mapGetters} from "vuex";
    export default {
        name: "Subscriptions",
        components: {Movie},
        data(){
            return{
                subscribed_genres: {},
            }
        },
        beforeMount() {
            url
                .get("user-subscriptions/" + this.user.id)
                .then((response)=>
                {
                    console.log(response.data);
                    this.subscribed_genres = response.data;
                }).then(() => {
                url
                    .get("genre-movies/" + genre.id)
                    .then((response)=>
                    {
                        console.log(response.data);
                        this.subscribed_genres = response.data;
                    });
                });
        },
        computed:{
            ...mapGetters('auth', {
                user: 'user'
            }),
            subscribed_movies: function () {
                url
                    .get("user-subscriptions/" + this.user.id)
                    .then((response)=>
                    {
                        console.log(response.data);
                        this.subscribed_genres = response.data;
                    })
            }
        },
    }
</script>

<style scoped>

</style>