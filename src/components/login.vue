<template>
    <div class="box">
        <div class="login-container">
            <div class="user">
                <input type="text" placeholder="请输入手机号/邮箱" v-model="user">
            </div>
            <div class="password">
                <input type="password" placeholder="请输入密码" v-model="password">
                <!-- <customInput placeholder="请输入密码" width="200" height="30" type="password"></customInput> -->
            </div>
            <div class="login">
                <button @click="login">登录</button>
            </div>
            
        </div>
        <bgAnime></bgAnime>
        <enterAni v-show = "isEnter"></enterAni>  
    </div>
</template>

<script>
import bgAnime from './loginBg';
import enterAni from './enterAni';
import customInput from '../smallComponents/input'
export default {
    data(){
        return {
            data: [],
            isEnter: false,
            user: '',
            password: ''
        }
    },
    components: {
        bgAnime,
        enterAni,
        customInput
    },
    mounted: function(){
        let self = this;
        // fetch('http://localhost:8080/api/user/playlist?uid=59361195').then(res => res.json()).then(data => {
        //     console.log(data);
        //     self.data = data.playlist;
        //     console.log(self.data);
        // })
        // setTimeout(function(){
        //     self.data = [
        //         {
        //             name: 'a',
        //             src: ''
        //         },
        //         {
        //             name: 'b',
        //             src: ''
        //         }
        //     ]
        // },1000)
    },
    methods: {
        login: function(){
            let type;
            if(~this.user.indexOf('@')){
                type = 'email'
            }else{
                type = 'phone'
            }
            
            console.log(this.$store.state.userInfo.uid);
        }
    }
}
</script>

<style lang="less" scoped>
    .box{
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }
    .login-container{
        width: 400px;
        height: 300px;
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 100;
        transform: translate(-50%,-50%);
        background: rgba(255,255,255,.5);
        .user,.password{
            text-align: center;
            margin: 15px 0;
            input{
                margin: 0;
                padding: 0;
                position: relative;
                outline: none;
                border: none;
                padding-left: 1em;
                width: 200px;
                height: 30px;
                &::-webkit-input-placeholder{
                    color: #3c3c3C;
                }
                &::-webkit-input-placeholder{
                    color: #3c3c3C;
                }
                &::-webkit-input-placeholder{
                    color: #3c3c3C;
                }
            }
        }
        .login{
            text-align: center;
            button{
                margin: 0;
                padding: 0;
                width: 200px;
                height: 30px;
                border-radius: 10px;
                background: #6cf;
                color: #fff;
                opacity: .8;
                outline: none;
                border: none;
                margin: 0 auto;
                cursor: pointer;
                &:hover{
                    opacity: 1;
                }
            }
        }
        
    }
</style>




