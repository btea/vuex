import api from '../api/api'
import axios from 'axios'

var userInfo = function({commit}, id){
    if(id){
        axios.get('api/' + api.playList + '?uid' + id).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }
}


export default {
    userInfo
}