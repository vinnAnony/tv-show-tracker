<template>
    <div class="mx-2">
        <div class="w-full h-48 rounded-md overflow-hidden bg-gray-50 lg:h-64">

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
        </div>

        <div class="mt-4 px-4 w-full">
            <div class="flex items-center justify-between h-10">

                <h3 class="text-red-400 font-medium text-xl tracking-wide">
                    {{ movie.Title }}King Kong King Kong King Kong
                </h3>

                <div>
                    <button class="text-red-400 cursor-pointer" @click="toggleFav(movie.imdbID, $event)">
                        <font-awesome-icon icon="heart" class="mr-2 text-blueGray-400 text-2xl"/>
                    </button>
                    <button class="text-blue-400 cursor-pointer" @click="toggleFav(movie.imdbID, $event)">
                        <font-awesome-icon icon="bookmark" class="mr-2 text-blueGray-400 text-2xl"/>
                    </button>
                </div>

            </div>
            <div class="text-gray-400 flex mt-3 items-center font-medium text-sm">
                <font-awesome-icon icon="film" class="text-gray-400 mr-2 text-xl"/>

                {{ movie.genre }}Action
            </div>
        </div>
        <div class="mt-4 px-4 w-full">
            <div class="text-gray-500 flex mt-3 items-center font-medium text-sm">
                <h3 class="text-gray-400 font-medium text-md tracking-wide">Description</h3>
            </div>
            <div class="text-gray-500 flex mt-3 items-center font-medium text-sm">
                <p>{{ movie.description }}A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island,
                    where they find more than just cannibalistic natives.A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island,
                    where they find more than just cannibalistic natives.A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island,
                    where they find more than just cannibalistic natives.A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island,
                    where they find more than just cannibalistic natives.</p>
            </div>
        </div>
        <div class="mt-4 px-4 w-full">
            <div class="text-gray-500 flex mt-3 items-center font-medium text-sm">
                <h3 class="text-gray-400 font-medium text-md tracking-wide">Comments</h3>
            </div>
            <div class="w-full text-gray-500 flex mt-3 items-center font-medium text-sm">
                <div>
                    <section class="rounded-b-lg  mt-4 ">
                        <form action="/" accept-charset="UTF-8" method="post"><input type="hidden" >
                            <textarea class="w-full shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-2xl" placeholder="Ask questions here." cols="6" rows="6" id="comment_content" spellcheck="false"></textarea>
                            <button class="font-bold py-2 px-4 w-full bg-purple-400 text-lg text-white shadow-md rounded-lg ">Comment </button>
                        </form>

                        <div id="task-comments" class="pt-4">
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
        data(){
            return{
                movie: {},
            }
        },
    }
</script>

<style scoped>

</style>