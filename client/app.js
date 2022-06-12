import Vue from 'vue'
import router from './router/index'
import store from './store/index'

window.Vue = require('vue').default;
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

import Datatable from 'vue2-datatable-component';
Vue.use(Datatable);

import SweetModal from 'sweet-modal-vue/src/plugin.js'
Vue.use(SweetModal)

require('./components');
require('./assets/scss/app.scss');


const app = new Vue({
    el: '#app',
    router,
    store
});