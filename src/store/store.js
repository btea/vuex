import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import api from '../api/api'
import axios from 'axios'
import actions from './actions'


Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        userInfo: {},
        account: {
            id: null
        },
        playList: null,
        profile: null
    },
    mutations: {
        status(state,info){
            // state.loginStatus = !state.loginStatus;
            state.account = info.data.account;
            state.profile = info.data.profile;
        },
        info(state,info){
            state.userInfo = info.data;
        }
    },
    actions: {
        playList: actions.playList,
        getStatus({commit}){
            // fetch("api/" + api.phoneLogin + "?phone=13517249392&password=422325").then(res => res.json()).then(data => {
            //     console.log(data);
            //     commit({
            //         type: 'status',
            //         data: data
            //     })
            // })
            // 本地node启动之后可无需代理
            // fetch('http://localhost:3000/search?keywords=童话镇').then(res => res.json()).then(data => {
            //     console.log(data);
            // })
            axios.get("api/" + api.phoneLogin + "?phone=13517249392&password=422325").then(res => {
                console.log(res);
                commit({
                    type: 'status',
                    data: res.data
                })
            }).catch(err => {
                console.log(err);
            })
        }
    },
    // modules: {}
})

export default store;