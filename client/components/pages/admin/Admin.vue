<template>
    <div class="bg-gray-100">
        <admin-sidebar/>
        <div class="relative md:ml-64 bg-blueGray-100">
            <admin-nav-bar class="sticky"/>
            <div class="relative  md:pt-10 pb-10 pt-12">
                <div class="px-1 md:px-10 mx-auto w-full">
                    <div>
                        <router-view>

                        </router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import AdminSidebar from "../../ui/AdminSidebar";
    import AdminNavBar from "../../ui/AdminNavBar";
    export default {
        name: "Admin",
        components: {AdminNavBar, AdminSidebar}
    }
</script>

<style scoped>

</style>