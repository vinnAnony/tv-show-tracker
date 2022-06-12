<template>
    <div>
        <user-navbar/>
        <router-view>

        </router-view>
    </div>

</template>

<script>
    import UserNavbar from "../ui/UserNavbar";
    export default {
        name: "Index",
        components: {UserNavbar}
    }
</script>

<style scoped>

</style>