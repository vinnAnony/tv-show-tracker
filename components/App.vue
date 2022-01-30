<template>
    <Header/>
    <router-view>

    </router-view>
</template>

<script>
    import Header from "./views/Header";
    export default {
        name: "App",
        components: {Header}
    }
</script>

<style scoped>

</style>