import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'

Vue.use(Vuex);

var store = new Vuex.Store({
    modules: {
        userInfo
    }
})

console.log('state',store.state);
export default store;