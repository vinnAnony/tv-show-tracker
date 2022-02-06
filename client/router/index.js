import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import Home from "../components/pages/Home";
import Subscriptions from "../components/pages/Subscriptions";
import Favourites from "../components/pages/Favourites";
import Detailed from "../components/pages/MovieDetails";
import Account from "../components/pages/auth/Account";
import Dashboard from "../components/pages/admin/Dashboard";


const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: Vue.component("home-component", Home),
    },
    {
        path: '/account',
        name: 'account',
        component: Vue.component("account-component",Account),
        meta: {
            guest: true
        }
    },
    {
        path: '/subscriptions',
        name: 'subscriptions',
        component: Vue.component("subscriptions-component",Subscriptions),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/favourites',
        name: 'favourites',
        component: Vue.component("favourites-component",Favourites),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/movie-details',
        name: 'movie-details',
        component: Vue.component("detailed-component",Detailed),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Vue.component("dashboard-component",Dashboard),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '*',
        redirect: '/'
    },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

// Meta Handling
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('jwToken');
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!token){
            next({ name: 'account' });
        }
        else {
            next();
        }
    }
    else if (to.matched.some(record => record.meta.guest)) {
        if (localStorage.getItem('jwToken') == null) {
            next()
        } else {
            next({ name: '/' })
        }
    } else {
        next()
    }
});

export default router