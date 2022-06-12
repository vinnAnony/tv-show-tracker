<template>
<div>
    <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <router-link :to="{name:'admin-users'}"
           class="w-full min-w-200  flex bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <div class="text-center">
                <div class="mb-1 text-md">Users</div>
                <div class="-mt-1 font-sans text-sm font-semibold">{{dashInfo.users_count.countVal}}</div>
            </div>
        </router-link>
        <router-link :to="{name:'admin-subscriptions'}"
           class="w-full min-w-200  flex bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <div class="text-center">
                <div class="mb-1 text-md">Subscriptions</div>
                <div class="-mt-1 font-sans text-sm font-semibold">{{dashInfo.subscriptions_count.countVal}}</div>
            </div>
        </router-link>
        <router-link :to="{name:'admin-movies'}"
           class="w-full min-w-200  flex bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <div class="text-center">
                <div class="mb-1 text-md">Movies</div>
                <div class="-mt-1 font-sans text-sm font-semibold">{{dashInfo.movies_count.countVal}}</div>
            </div>
        </router-link>
    </div>
</div>
</template>

<script>
    import AdminSidebar from "../../ui/AdminSidebar";
    import AdminNavBar from "../../ui/AdminNavBar";
    import url from "../../../api";
    export default {
        name: "Dashboard",
        components: {AdminNavBar, AdminSidebar},
        data(){
            return{
                dashInfo:{},
            }
        },
        beforeMount() {
            url
                .get("dashboard-summary/")
                .then((response)=>
                {
                    this.dashInfo = response.data.dashData;
                });
        }
    }
</script>

<style scoped>

</style>