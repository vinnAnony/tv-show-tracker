import Vue from 'vue'
import router from './router/index'

require('./components');
require('./assets/scss/app.scss');


const app = new Vue({
    el: '#app',
    router
});