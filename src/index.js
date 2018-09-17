import Vue from 'vue';
import App from './components/app'
import router from './router/route'
import store from './store/store'
import ElementUI from 'element-ui'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'

// import 'element-ui/lib/theme-chalk/index.css'
import Button from './components/button/button'
import Alert from './components/alert/alert'
import './style/index.less'

// 全局注册
Vue.component('Button',Button);
Vue.component('Alert',Alert);

Vue.use(Vant)
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})