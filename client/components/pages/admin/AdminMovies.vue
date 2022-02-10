<template>
    <div>
        <div class="flex flex-wrap mt-4">
            <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-0 mx-auto">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div class="rounded-t mb-0 px-4 py-3 border-0">
                        <div class="flex flex-wrap items-center">
                            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 class="font-semibold text-base text-blueGray-700">
                                    Movies
                                </h3>
                            </div>
                            <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                <form class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                                    <div class="relative flex w-full flex-wrap items-stretch">
                                          <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                              <font-awesome-icon icon="search"/>
                                          </span>
                                        <input
                                                type="text"
                                                placeholder="Search here..."
                                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"/>
                                    </div>
                                </form>
                            </div>
                            <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <button
                                            @click="showModal()"
                                        class="bg-green-500 text-white active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        style="transition:all .15s ease">
                                    <font-awesome-icon icon="plus"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="block w-full overflow-x-auto">
                        <table class="items-center w-full bg-transparent border-collapse">
                            <thead>
                            <tr>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Movie Name
                                </th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Genre
                                </th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Movie Type
                                </th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="movie in movies" :key="movie.id">
                                <td class="font-bold border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                    {{movie.movie_name}}
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {{movie.genre.genre_name}}
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {{movie.movie_type_id==1 ? 'Movie' : 'Tv Series'}}
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                            <button
                                                    @click="editModal(movie)"
                                                class="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                style="transition:all .15s ease">
                                            <font-awesome-icon icon="edit"/>
                                        </button>
                                    </div>
                                    <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                        <button
                                                @click="deleteMovie(movie.id)"
                                                class="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                style="transition:all .15s ease">
                                            <font-awesome-icon icon="trash"/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <sweet-modal ref="movieModal">
                        <div class="flex flex-wrap mt-4">
                            <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto">
                                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                                    <div class="rounded-t mb-0 px-4 py-3 border-0">
                                        <div class="flex flex-col">
                                            <p class="text-3xl font-bold leading-7 text-center">Movie Info</p>
                                            <form @submit.prevent="isEdit ? editMovie(movie) : addMovie(movie)">
                                                <div class="md:flex items-center mt-8">
                                                    <div class="w-full flex flex-col">
                                                        <label class="font-semibold leading-none">Movie Name</label>
                                                        <input v-model="movie.movie_name" type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                                    </div>
                                                </div>
                                                <div class="md:flex items-center mt-12">
                                                    <div class="w-full md:w-1/3 flex flex-col  md:mt-0 mt-4">
                                                        <label class="font-semibold leading-none">Movie Type</label>
                                                        <select v-model="movie.movie_type_id" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">
                                                            <option value="1">Movie</option>
                                                            <option value="2">Tv Series</option>
                                                        </select>
                                                    </div>
                                                    <div class="w-full md:w-1/3 flex flex-col md:ml-6 md:mt-0 mt-4">
                                                        <label class="font-semibold leading-none">Movie Genre</label>
                                                        <select v-model="movie.genre_id" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">
                                                            <option
                                                                    v-for="genre in genres"
                                                                    :key="genre.id"
                                                                    v-bind:value="genre.id">{{genre.genre_name}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="w-full md:w-1/3 flex flex-col md:ml-6 md:mt-0 mt-4">
                                                        <label class="font-semibold leading-none">IMDB Rating</label>
                                                        <input v-model="movie.rating" type="number" step="0.1" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                                    </div>
                                                </div>
                                                <div class="md:flex items-center mt-8">
                                                    <div class="w-full flex flex-col">
                                                        <label class="font-semibold leading-none">Poster Image Url</label>
                                                        <input v-model="movie.poster_url" type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="w-full flex flex-col mt-8">
                                                        <label class="font-semibold leading-none">Movie Description</label>
                                                        <textarea v-model="movie.description"
                                                                  type="text"
                                                                  class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                                                    </div>
                                                </div>
                                                <div class="flex items-center justify-center w-full">
                                                    <button type="submit" class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                                        {{isEdit ? 'Edit' : 'Add' }} Movie
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </sweet-modal>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from "axios";
    import $ from "jquery";

    export default {
        name: "AdminMovies",
        data(){
            return{
                isEdit: false,
                movies:{},
                movie:{},
                genres:{},
                movie_types:{

                }
            }
        },
        beforeMount(){
            axios
                .get("http://localhost:4400/api/movies")
                .then((response)=>
                {
                    this.movies = response.data;
                    console.log(this.movies);
                });
            axios.get("http://localhost:4400/api/genres")
                .then(response => {
                    this.genres = response.data;
                    console.log(this.genres);
                })
                .catch(error => {
                    console.error("There was an error!", error);
                });
        },
        methods: {
            showModal(){
                this.$refs.movieModal.open()
            },
            closeModal(){
                this.$refs.movieModal.close();
                this.isEdit = false;
                this.movie={};
            },
            editModal(movie){
                this.isEdit = true;
                this.movie = movie;
                this.showModal();
            },
            deleteMovie(id) {
                Vue.swal({
                    text: "Are you sure you want to delete movie?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#57d675',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.delete(
                            "http://localhost:4400/api/movies/" + id
                        )
                            .then(response => {
                                if (response.data.success)
                                {
                                    this.movies =  this.movies.filter((cMovie) => cMovie.id != id);
                                    Vue.swal({
                                        toast: true,
                                        position: 'top-end',
                                        showConfirmButton: false,
                                        timer: 2000,
                                        icon: 'success',
                                        title: 'Deleted successfully.'
                                    });
                                }
                            })
                            .catch(error => {
                                console.error("There was an error!", error);
                            });
                    }
                });
            },
            addMovie(movie){
                axios.post("http://localhost:4400/api/movies",movie)
                    .then(response => {
                        if (response.data.success)
                        {
                            this.movies.unshift(response.data.movie);
                            this.closeModal();
                            console.log(response.data.movie)
                        }
                    })
                    .catch(error => {
                        console.error("There was an error!", error);
                    });
            },
            editMovie(movie){
                axios.put("http://localhost:4400/api/movies/" + movie.id,movie)
                    .then(response => {
                        if (response.data.success)
                        {
                            this.closeModal();
                            console.log(response.data.message);
                        }
                    })
                    .catch(error => {
                        console.error("There was an error!", error);
                    });

            },
        }
    }
</script>

<style scoped>

</style>