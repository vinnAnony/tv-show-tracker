<template>
    <div class="flex flex-wrap mt-4">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                    <div class="flex flex-col">
                        <p class="text-3xl font-bold leading-7 text-center">Notification</p>
                        <form @submit.prevent="sendMessage(notification)">
                            <div class="md:flex items-center mt-8">
                                <div class="w-full flex flex-col">
                                    <label class="font-semibold leading-none">Subject</label>
                                    <input v-model="notification.subject"
                                           type="text"
                                           required
                                           class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                </div>
                            </div>
                            <div class="w-full flex flex-col mt-8">
                                <label class="font-semibold leading-none">Movie Description</label>
                                <textarea v-model="notification.message"
                                          type="text"
                                          required
                                          class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                            </div>
                            <div class="flex items-center justify-center w-full">
                                <button type="submit" class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                    Send Notification
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
    import url from '../../api/index';
    export default {
        name: "SubscribersNotification",
        props: {
            genreId: {
                type: Number
            },
        },
        data(){
            return{
                notification:{},
            }
        },
        methods:{
          sendMessage(notification){
              notification.genre_id = this.genreId;
              url.post("send-subscribers-notification",notification)
                  .then(response => {
                      if (response.data.success)
                      {
                          Vue.swal({
                              toast: true,
                              position: 'top-end',
                              showConfirmButton: false,
                              timer: 3000,
                              icon: response.data.success ? 'success' : 'error',
                              title: response.data.message
                          });
                          this.$emit('close');
                      }
                  })
                  .catch(error => {
                      let errors = error.response.data.errors;
                      for (const error of errors){
                          Vue.swal({
                              toast: true,
                              position: 'top-end',
                              showConfirmButton: false,
                              timer: 3000,
                              icon: 'error',
                              title: error.msg
                          });
                      }
                  });
          },
        },
    }
</script>

<style scoped>

</style>