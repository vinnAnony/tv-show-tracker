<template>
    <div>
        <div class="flex flex-wrap mt-4">
            <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div class="rounded-t mb-0 px-4 py-3 border-0">
                        <div class="flex flex-wrap items-center">
                            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 class="font-semibold text-base text-blueGray-700">
                                    Subscriptions
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
                        </div>
                    </div>
                    <div class="block w-full overflow-x-auto">
                        <table class="items-center w-full bg-transparent border-collapse">
                            <thead>
                            <tr>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Genre
                                </th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    No. of Subscriptions
                                </th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    No. of Movies
                                </th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="genre_subscription in genre_subscriptions" :key="genre_subscription.id">
                                <td class="font-bold border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                    {{genre_subscription.genre_name}}
                                </td>
                                <td class="text-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {{genre_subscription.subscriptions.length}}
                                </td>
                                <td class="text-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    -
                                </td>
                                <td class="text-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                        <button
                                                @click="showModal(genre_subscription.id)"
                                                class="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                style="transition:all .15s ease">
                                            <font-awesome-icon icon="envelope"/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <sweet-modal ref="notificationModal" v-bind:genre-id="notify_genreId">
                        <subscribers-notification @close="closeModal" v-bind:genre-id="notify_genreId"/>
                    </sweet-modal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import url from '../../../api/index'
    import SubscribersNotification from "../../ui/SubscribersNotification";
    export default {
        name: "AdminSubscriptions",
        components: {SubscribersNotification},
        data(){
            return{
                genre_subscriptions:{},
                notify_genreId:0,
            }
        },
        methods:{
            showModal(genre_id){
                this.notify_genreId = genre_id;
                this.$refs.notificationModal.open()
            },
            closeModal(){
                this.$refs.notificationModal.close();
            },
        },
        beforeMount() {
            url
                .get("genre-subscriptions")
                .then((response)=>
                {
                    console.log(response.data);
                    this.genre_subscriptions = response.data;
                });
        }
    }
</script>

<style scoped>

</style>