<template>
    <div>
        <div class="user" @click="login">登录</div>
        <div>用户id： {{uid}}</div>
        <div class="playlist" @click="list">获取歌单</div>
        <div @click="userInfo">用户详细信息</div>
        <div>用户等级：{{level}}</div>
        <ul>
            歌单列表
            <li v-for="(list,index) in playlist" :key="index" @click="listDetail(list.id)">
                <div>id: {{list.id}}</div>
                <div>name: {{list.name}}</div>
                <div>playCount：{{list.playCount}}</div>
                <div>trackCount：{{list.trackCount}}</div>
            </li>
        </ul>
    </div>
</template>
<script>

import {mapState} from 'vuex'

// console.info(mapState(['uid','playlist']).uid);
export default {
    data: function() {
        return {
            num: 0,
            news: 'no game no life'
        }
    },
   
    mounted: function(){
        this.setInterval = setInterval(this.refresh,50)
        console.log(this);
        // fetch('baidu/examples/data/asset/data/les-miserables.gexf').then(res => {
        //     console.log(res);
        //     return res.json();
        // }).then(data => {
        //     console.log(data);
        // })
    },
    // 当使用mapState时,相应的模块需要设置namespaced为true
    // mapState第一个参数为相应的模块名，当dispatch相应action时，action名之前要天机模块名，如： this.$store.dispatch('userInfo/login',{})

    computed: mapState('userInfo',[
            'uid',
            'playlist',
            'level'
    ]),
    // computed: {
    //     uid(){
    //         return this.$store.state.userInfo.uid;
    //     },
    //     playlist(){
    //         return this.$store.state.userInfo.playlist
    //     }
    // },
    methods: {
        login(){
            this.$store.dispatch('userInfo/login',{
                loginType: 'phone',
                phone: 13517249392,
                password: 422325
            });
        },
        userInfo(){
            let uid = this.$store.state.userInfo.uid;
            if(uid){
                this.$store.dispatch('userInfo/userInfo',uid);
            }
        },
        list(){
            this.$store.dispatch('userInfo/playlist',59361195)
        },
        listDetail(id){
            this.$store.dispatch('userInfo/listDetail',id)
        }
    }
}
</script>


