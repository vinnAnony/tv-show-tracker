<template>
        <div class=" bg-white ">
            <nav class=" 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">

                <div class="flex justify-between ">
                    <div class="hidden sm:flex flex-row items-center space-x-6">
                        <ul class="hidden md:flex flex-auto space-x-2">
                            <router-link :to="{name:'home'}" class="text-white bg-indigo-600 focus:outline-none cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
                                Home</router-link>
                            <router-link :to="{name:'home'}" class="focus:outline-none text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
                                Subscriptions</router-link>
                            <router-link :to="{name:'home'}" class="focus:outline-none text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
                                Favourites</router-link>
                        </ul>
                    </div>
                    <div class=" flex space-x-3 items-center">
                        <h1 class=" font-normal text-2xl leading-6 text-gray-800" >Tv Shower</h1>
                    </div>
                    <div class="hidden sm:flex flex-row space-x-4">
                        <router-link v-if="!authState.loggedIn" :to="{name:'account'}"><button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >
                            Sign Up
                        </button></router-link>
                        <router-link v-if="!authState.loggedIn" :to="{name:'account'}"><button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center">
                            Sign In
                        </button></router-link>
                        <button v-if="authState.loggedIn" @click="logOut" class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >
                            Logout
                        </button>
                    </div>


                    <div id="bgIcon" @click="toggleMenu()"  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  flex justify-center items-center sm:hidden cursor-pointer">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg6.svg" alt="burger" />
                        <img class=" hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg7.svg" alt="cross" />
                    </div>
                </div>

                <div id="MobileNavigation" class="hidden sm:hidden mt-4 mx-auto">
                    <div class="flex flex-col gap-4 mt-4 w-full mx-2 mx-auto">
                        <ul id="list" class="flex flex-col gap-1 w-full mx-2 mx-auto">
                            <router-link :to="{name:'home'}" class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
                                Home</router-link>
                            <router-link :to="{name:'home'}" class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
                                Subscriptions</router-link>
                            <router-link :to="{name:'home'}" class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
                                Favourites</router-link>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-4 mt-4 w-full mx-2 mx-auto">
                        <router-link v-if="!authState.loggedIn" :to="{name:'account'}"><button class="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-indigo-700 bg-indigo-600 bg-opacity-0 hover:opacity-100 duration-100 border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                            Sign Up
                        </button></router-link>
                        <router-link v-if="!authState.loggedIn" :to="{name:'account'}"><button class="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center">
                            Log In
                        </button></router-link>
                            <button v-if="authState.loggedIn" @click="logOut" class="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-indigo-700 bg-indigo-600 bg-opacity-0 hover:opacity-100 duration-100 border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                            Logout
                            </button>
                    </div>
                </div>
            </nav>
        </div>

</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        name: "Header",
        data(){
            return{}
        },
        methods:{
            toggleMenu(){

                let icon = document.getElementById('bgIcon');
                const childEle = icon.children;

                childEle[0].classList.toggle('hidden');
                childEle[1].classList.toggle('hidden');

                let mobileNav = document.getElementById('MobileNavigation').classList.toggle('hidden');

            },
            logOut(){
                Vue.swal({
                    text: "Are you sure you want to logout?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#57d675',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$router.push('/');
                        this.$store.dispatch('auth/logout');

                        Vue.swal({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            icon: 'success',
                            title: 'Successfully logged out.'
                        });
                    }
                });
            }
        },
        computed:{
            ...mapGetters('auth', {
                authState: 'authState'
            })
        },
    }
</script>

<style>

</style>