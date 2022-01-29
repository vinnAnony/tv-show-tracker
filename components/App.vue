<template>
    <Header/>
    <div class="w-full flex justify-center align-center">
        <div class="shadow-lg shadow-purple-200 p-4 w-full md:w-96 h-52 rounded bg-gradient-to-bl from-purple-300 to-blue-900 flex flex-col justify-center items-center mt-4 max-w-[24rem]">
            <p class="text-gray-100 font-semibold">Vinn Njeru</p>
        </div>
    </div>
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