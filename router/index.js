import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import Home from "../components/views/Home";


const routes = [
    {
        path: '/',
        name: 'index',
        component: Vue.component("welcome-component",Welcome),
    },
    {
        path: '/home',
        name: 'home',
        component: Vue.component("home-component", Home),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/about',
        name: 'about',
        component: Vue.component("about-component",About),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/archive',
        name: 'archive',
        component: Vue.component("archive-component",Archive),
        meta: {
            requiresAuth: true
        }
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
            next({ name: 'home' })
        }
    } else {
        next()
    }
});

export default router