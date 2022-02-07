<template>
    <div class="flex flex-wrap mt-4">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                    <div class="flex flex-col">
            <p class="text-3xl font-bold leading-7 text-center">Movie Info</p>
            <form action="" method="post">
                <div class="md:flex items-center mt-8">
                    <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none">Movie Name</label>
                        <input type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                    </div>
                </div>
                <div class="md:flex items-center mt-12">
                    <div class="w-full md:w-1/3 flex flex-col  md:mt-0 mt-4">
                        <label class="font-semibold leading-none">Movie Type</label>
                        <select name="cars" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">
                            <option
                                    v-for="movie_type in movie_types"
                                    :key="movie_type.id"
                                    value="">{{movie_type.name}}</option>
                            <option value="">Movie</option>
                            <option value="">Tv Series</option>
                        </select>
                    </div>
                    <div class="w-full md:w-1/3 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none">Movie Genre</label>
                        <select name="cars" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">
                            <option
                                    v-for="genre in genres"
                                    :key="genre.id"
                                    value="">Action{{genre.genre_name}}</option>
                            <option value="">Drama</option>
                            <option value="">Adventure</option>
                        </select>
                    </div>
                    <div class="w-full md:w-1/3 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none">IMDB Rating</label>
                        <input type="number" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                    </div>
                </div>
                <div class="md:flex items-center mt-8">
                    <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none">Poster</label>
                        <input type="file" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                    </div>
                </div>
                <div>
                    <div class="w-full flex flex-col mt-8">
                        <label class="font-semibold leading-none">Movie Description</label>
                        <textarea type="text"
                                  class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                    <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Add Movie
                    </button>
                </div>
            </form>
        </div>
    </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AdminAddMovie",
        data(){
            return{
                genres:{},
                movie_types:{}
            }
        }
    }
</script>

<style scoped>

</style>