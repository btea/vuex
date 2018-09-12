<template>
    <div>
        <div class="user" @click="login">登录</div>
        <div>用户id： {{uid}}</div>
        <div class="playlist" @click="list">获取歌单</div>
        <div @click="userInfo">用户详细信息</div>
        <Button><span>this is a span</span></Button>
        <Button type="primary">登录</Button>
        <Button type="primary" ghost></Button>
        <Button type="warning"></Button>
        <Button type="warning" ghost></Button>
        <Button type="error">自定义按钮</Button>
        <Button type="error" ghost>自定义按钮，样式修改</Button>
        <Alert><div>123</div><div>456</div></Alert>
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
// 局部注册
// import Button from './button/button'
// console.log(Button);

import {mapState} from 'vuex'

console.log(mapState);

export default {
    data: function() {
        return {
            num: 0
        }
    },
    // 局部注册组件
    // components: {
        // Button: Button
    // },

    mounted: function(){
        this.setInterval = setInterval(this.refresh,50)
    },
    // computed: mapState([
    //     'uid',
    //     'playlist'
    // ]),
    computed: {
        uid(){
            return this.$store.state.userInfo.uid;
        },
        playlist(){
            return this.$store.state.userInfo.playlist
        }
    },
    methods: {
        login(){
            this.$store.dispatch('login',{
                loginType: 'phone',
                phone: 13517249392,
                password: 422325
            });
        },
        userInfo(){
            let uid = this.$store.state.userInfo.uid;
            console.log(uid);
        },
        list(){
            this.$store.dispatch('playlist',59361195)
        },
        listDetail(id){
            this.$store.dispatch('listDetail',id)
        }
    }
}
</script>


