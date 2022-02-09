<template>
    <div class="flex flex-wrap mt-4">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                    <div class="flex flex-col">
            <p class="text-3xl font-bold leading-7 text-center">User Info</p>
            <form @submit.prevent="editUser(userData)">
                <div class="md:flex items-center mt-8">
                    <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none">Username</label>
                        <input v-model="userData.user_name" type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                    </div>
                </div>
                <div class="md:flex items-center mt-8">
                    <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none">Full Name</label>
                        <input v-model="userData.full_name" type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                    </div>
                </div>
                <div class="md:flex items-center mt-8">
                    <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none">User Role</label>
                        <select v-model="userData.role_id" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">
                            <option value="1">User</option>
                            <option value="2">Admin</option>
<!--                            <option-->
<!--                                    v-for="user_role in user_roles"-->
<!--                                    :key="user_role.id"-->
<!--                                    v-bind:value="user_role.id">{{user_role.name}}</option>-->
                        </select>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                    <button type="submit" class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Edit User
                    </button>
                </div>
            </form>
        </div>
    </div>
        </div>
        </div>
    </div>
</template>

<script>
    import url from '../../../api/index'
    export default {
        name: "AdminAddUser",
        props: {
            userData: {
                type: Object
            },
        },
        data(){
            return{
                user:{},
                user_roles:{}
            }
        },
        computed: {

        },
        created() {
            //fetch user roles
        },
        methods:{
            editUser(user){
                url.put("api/auth/user/" + user.id,user)
                    .then(response => {
                        if (response.data.success)
                        {
                        this.$emit('close');
                            console.log(response.data.message);
                        }
                    })
                    .catch(error => {
                        console.error("There was an error!", error);
                    });

            },
        }
    }
</script>

<style scoped>

</style>