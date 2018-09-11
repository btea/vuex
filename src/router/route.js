import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../components/app'
import NotFound from '../components/404'

Vue.use(VueRouter)

const routes = [
    {
        path: '/app',
        component: App
    },
    {
        path: '/',
        redirect: '/app'
    },
    {
        path: '*',
        component: NotFound
    }
];

var router = new VueRouter({routes})

export default router
