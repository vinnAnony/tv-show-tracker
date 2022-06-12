import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import {auth} from "./modules/auth/auth";
import {favMovies} from "./modules/favMovies";


export default new Vuex.Store({
    modules: {
        auth,
        favMovies,
    }
});