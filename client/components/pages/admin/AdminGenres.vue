<template>
    <div>
        <div class="flex flex-wrap mt-4">
            <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-0 mx-auto">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div class="rounded-t mb-0 px-4 py-3 border-0">
                        <div class="flex flex-wrap items-center">
                            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 class="font-semibold text-base text-blueGray-700">
                                    Genres
                                </h3>
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
                                    Genre Name
                                </th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="genre in genres" :key="genre.id">
                                <td class="font-bold border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                    {{genre.genre_name}}
                                </td>
                                <td class="text-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-center">
                                        <button
                                                @click="editModal(genre)"
                                                class="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                style="transition:all .15s ease">
                                            <font-awesome-icon icon="edit"/>
                                        </button>
                                    </div>
                                    <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-center">
                                        <button
                                                @click="deleteGenre(genre.id)"
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
                    <sweet-modal ref="genreModal">
                        <div class="flex flex-wrap mt-4">
                            <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto">
                                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                                    <div class="rounded-t mb-0 px-4 py-3 border-0">
                                        <div class="flex flex-col">
                                            <p class="text-3xl font-bold leading-7 text-center">Genre Info</p>
                                            <form @submit.prevent="isEdit ? editGenre(genre) : addGenre(genre)">
                                                <div class="md:flex items-center mt-8">
                                                    <div class="w-full flex flex-col">
                                                        <label class="font-semibold leading-none">Genre Name</label>
                                                        <input v-model="genre.genre_name" type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                                    </div>
                                                </div>
                                                <div class="flex items-center justify-center w-full">
                                                    <button type="submit" class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                                        {{isEdit ? 'Edit' : 'Add' }} Genre
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
    import url from '../../../api/index'
    import axios from "axios";
    import {tvShowerAlert} from "../../../api/alerts";

    export default {
        name: "AdminGenres",
        data() {
            return {
                isEdit: false,
                genres: {},
                genre: {},
            }
        },
        beforeMount()
        {
            url
                .get("genres")
                .then((response) => {
                    this.genres = response.data;
                    console.log(this.genres);
                });
        },
        methods: {
            showModal() {
                this.$refs.genreModal.open()
            },
            closeModal() {
                this.$refs.genreModal.close();
                this.isEdit = false;
                this.genre = {};
            },
            editModal(genre) {
                this.isEdit = true;
                this.genre = genre;
                this.showModal();
            },
            deleteGenre(id) {
                Vue.swal({
                    text: "Are you sure you want to delete genre?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#57d675',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                }).then((result) => {
                    if (result.isConfirmed) {
                        url.delete(
                            "genres/" + id
                        )
                            .then(response => {
                                if (response.data.success)
                                {
                                    this.genres =  this.genres.filter((cGenre) => cGenre.id != id);
                                    tvShowerAlert('success','Deleted successfully');
                                }
                            })
                            .catch(error => {
                                let errors = error.response.data.errors;
                                for (const error of errors){
                                    tvShowerAlert('error',error.msg);
                                }
                            });
                    }
                });
            },
            addGenre(genre){
                url.post("genres",genre)
                    .then(response => {
                        if (response.data.success)
                        {
                            //this.genres.unshift(response.data.genre);
                            this.genre = {};
                            this.closeModal();
                            tvShowerAlert('success',response.data.message);
                        }
                    })
                    .catch(error => {
                        let errors = error.response.data.errors;
                        for (const error of errors){
                            tvShowerAlert('error',error.msg);
                        }
                    });
            },
            editGenre(genre){
                url.put("genres/" + genre.id,genre)
                    .then(response => {
                        if (response.data.success)
                        {
                            this.genre = {};
                            this.closeModal();
                            tvShowerAlert('success',response.data.message);
                        }
                    })
                    .catch(error => {
                        let errors = error.response.data.errors;
                        for (const error of errors){
                            tvShowerAlert('error',error.msg);
                        }
                    });

            },
        }
    }
</script>

<style scoped>

</style>