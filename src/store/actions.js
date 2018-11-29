import api from '../api/api'
import axios from 'axios'

const proxy = 'api';
// const proxy = '';
// 登录
var login =async function({commit},user){
    if(typeof user != 'object'){
        return ;
    }
    let url,res;
    if(user.loginType === 'phone'){
        url = proxy + api.phoneLogin + '?phone=' + user.phone + '&password=' + user.password;
        res = await axios.get(url);
        return {res, commit};
        // axios.get(url).then(res => {
            // commit({
                // type: 'login',
                // login: res.data
            // })
        // }).catch(err => {
            // console.log(err);
        // })
    }
}
// 获取用户详细信息
var userInfo =async function({commit},uid){
    if(uid && typeof uid === 'number'){
        let url = proxy + api.userDetail + '?uid=' + uid, data;
        data = await axios.get(url);
        return {data, commit};
        // axios.get(url).then(res => {
            // if(res.status === 200 && res.data && res.data.code === 200){
                // commit('userInfo',res.data);
            // }
        // }).catch(err => {
            // console.log(err);
        // })
    }
}
// 获取用户歌单
var playlist = function({commit}, id){
    if(id && typeof id === 'number'){
        let url = proxy + api.playList + '?uid=' + id;
        console.log('url',url);
        axios.get(url).then(res => {
            console.log(res);
            if(res.status === 200 && res.data && res.data.code === 200){
                commit('playlist',res.data);
            }
        }).catch(err => {
            console.log(err);
        })
    }
}
// 获取歌单详情
var listDetail = function({commit},id){
    if(id && typeof id === 'number'){
        let url = proxy + api.playListDetail + '?id=' + id;
        axios.get(url).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }
}

// 获取单曲详情
var getSongDetail = function({commit},id){
    
}
export default {
    login,
    playlist,
    listDetail,
    userInfo
}