<template>
    
</template>

<script>
    export default {
        name: "SignUp",
        data(){
            return {
                signUpData:{}
            }
        },
        methods: {
            register(){
                axios.post("http://localhost:4000/api/auth/register",this.signUpData)
                    .then(response => {
                        this.$emit('switchView');
                        this.signUpData = {};
                        console.log(response.message);
                    })
                    .catch(error => {
                        console.error("There was an error!", error);
                    });
            }
        },
    }
</script>

<style scoped>

</style>