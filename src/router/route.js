import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../components/app'
import NotFound from '../smallComponents/404/404'
import nightNotFound from '../smallComponents/404/night-404'
import Login from '../components/login'
import Home from '../components/home'

Vue.use(VueRouter)

let isNight = () => {
    let h = new Date().getHours();
    if(h >= 20){
        return true;
    }
    return false;
}

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
        component: isNight() ? nightNotFound : NotFound
    }
];

var router = new VueRouter({routes})

export default router
