<template>
    <div class="h-screen bg-gray-100 overflow-hidden">

        <div class="flex items-center justify-center absolute h-screen top-0 left-0"></div>
        <transition name="custom" enter-active-class="animate__animated animate__bounceInDown" leave-active-class="animate__animated animate__bounceOutUp">

            <div v-if="showModal" class="w-11/12 lg:w-1/2 z-20 mx-auto bg-white flex flex-col relative self-center shadow-2xl rounded-md ">

                <div class="p-6 border-b-4 border-gray-200 text-lg font-bold text-indigo-400">
                    Modal title
                    <slot name="header">

                    </slot>
                </div>

                <div class="p-6">
                    <slot name="body">

                    </slot>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis ipsam cupiditate illum laborum atque voluptatibus ut doloremque excepturi quisquam repellendus dolor deserunt totam tempore, laboriosam earum sapiente esse praesentium.
                </div>

                <div class="border-t-4 border-gray-200 p-6 flex justify-end">
                    <slot name="footer">
                            <button @click="$emit('close')" type="button" class="float-right text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                                Cancel
                            </button>
                    </slot>
                </div>

            </div>

        </transition>

<!--        <transition name="custom" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">-->

<!--            <div v-if="showModal" class="bg-gray-700 bg-opacity-50 fixed bottom-0 left-0 w-full h-full transition duration-500 ease-in-out transfom z-10"></div>-->

<!--        </transition>-->
    </div>

</template>

<script>
    export default {
        name: "Modal"
    }
</script>

<style scoped>

</style>