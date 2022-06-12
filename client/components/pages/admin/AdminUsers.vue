<template>
    <div>
        <div class="flex flex-wrap mt-4">
            <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div class="rounded-t mb-0 px-4 py-3 border-0">
                        <div class="flex flex-wrap items-center">
                            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 class="font-semibold text-base text-blueGray-700">
                                    Users
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
                        <table id="datatable" class="items-center w-full bg-transparent border-collapse">
                            <thead>
                            <tr>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Full Name
                                </th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Email
                                </th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Role
                                </th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="user in users" :key="user.id">
                                <td class="font-bold border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                    {{user.full_name}}
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {{user.email}}
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {{user.role_id==1 ? 'User' : 'Admin'}}
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                        <button
                                                @click="showModal(user)"
                                                class="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                style="transition:all .15s ease">
                                            <font-awesome-icon icon="edit"/>
                                        </button>
                                    </div>
                                    <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                        <button
                                                @click="deleteUser(user.id)"
                                                class="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                style="transition:all .15s ease">
                                            <font-awesome-icon icon="trash"/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <sweet-modal ref="userModal" v-bind:user-data="user">
                        <admin-add-user @close="closeModal" v-bind:user-data="user"/>
                    </sweet-modal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'jquery/dist/jquery.min.js';
    import "datatables.net-dt/js/dataTables.dataTables";
    import "datatables.net-dt/css/jquery.dataTables.min.css";
    import url from '../../../api/index'
    import $ from 'jquery';
    import AdminAddUser from "./AdminAddUser";
    export default {
        name: "AdminUsers",
        components: {AdminAddUser},
        data(){
            return{
                users:[],
                user:{}
            }
        },
        beforeMount(){
            url
                .get("auth/users")
                .then((response)=>
                {
                    this.users = response.data;
                //     $('#datatable').DataTable({
                //         //data: this.users,
                // });
                })
        },
        methods: {
            showModal(user){
                this.user = user;
                this.$refs.userModal.open()
            },
            closeModal(){
                this.$refs.userModal.close();
                this.user=null;
            },
            deleteUser(id) {
                Vue.swal({
                    text: "Are you sure you want to delete this user?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#57d675',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                }).then((result) => {
                    if (result.isConfirmed) {
                        url.delete(
                            "auth/user/" + id
                        )
                            .then(response => {
                                if (response.data.success)
                                {
                                    this.users =  this.users.filter((cUser) => cUser.id != id);
                                    Vue.swal({
                                        toast: true,
                                        position: 'top-end',
                                        showConfirmButton: false,
                                        timer: 2000,
                                        icon: 'success',
                                        title: 'Deleted successfully.'
                                    });
                                }
                            })
                            .catch(error => {
                                console.error("There was an error!", error);
                            });
                    }
                });
            }
        },
    }
</script>

<style scoped>

</style>