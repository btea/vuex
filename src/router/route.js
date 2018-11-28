import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../components/app'
import NotFound from '../components/404'
import Login from '../components/login'

Vue.use(VueRouter)

const routes = [
    {
        path: '/app',
        component: App
    },
    {
        path: '/login',
        component: Login 
    },
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '*',
        component: NotFound
    }
];

var router = new VueRouter({routes})

export default router
