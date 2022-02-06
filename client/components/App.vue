<template>
    <div>
        <Header/>
        <router-view>
        </router-view>
    </div>

</template>

<script>
    import Header from "./ui/Header";
    export default {
        name: "App",
        components: {Header}
    }
</script>

<style scoped>

</style>