import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../components/app'
import NotFound from '../components/404'
import Login from '../components/login'
import Home from '../components/home'

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
        path: '/home',
        component: Home
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
