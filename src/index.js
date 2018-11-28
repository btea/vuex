import Vue from 'vue';
import App from './components/app'
import router from './router/route'
import store from './store/store'
import ElementUI from 'element-ui'

import './style/index.less';
// import 'element-ui/lib/theme-chalk/index.css'

console.log(router);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})