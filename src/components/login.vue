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
        <alert :tip="tip" :type="type" v-show="isShowTips"></alert>  
    </div>
</template>

<script>
import actions from '../store/actions'

import bgAnime from './loginBg';
import enterAni from './enterAni';
import customInput from '../smallComponents/input'
import alert from '../smallComponents/alert'
export default {
    data(){
        return {
            data: [],
            isEnter: false, // 是否登录成功，启动进入界面
            user: '',
            password: '',
            isShowTips: false, // 控制弹窗消息是否显示
            tip: '', // 弹窗显示消息内容
            type: '' // 弹窗显示消息类型
        }
    },
    components: {
        bgAnime,
        enterAni,
        customInput,
        alert
    },
    mounted: function(){
        let self = this;
    },
    methods: {
        login: function(){
            // type email/phone 邮箱或者手机登录
            // data 发送登录请求返回的数据
            // obj 发送请求传过去的参数
            let type, data, obj, _self = this;
            if(~this.user.indexOf('@')){
                type = 'email'
            }else{
                type = 'phone'
            }
            obj = {
                loginType: type,
                password: this.password
            }
            obj[type] = this.user;
            data = this.$store.dispatch('userInfo/login', obj);
            data.then(res => {
                console.log(res);
                if(res.res.status === 200 && res.res.data.code === 200){
                    res.commit({
                        type: 'login',
                        login: res.res.data
                    })
                    _self.loginSuccess();
                }else{ 
                    _self.loginFail();
                }
            },(err) => {
                console.log(err);
                _self.loginFail();
            })
            // console.log(data);  
            // console.log(this.$store.state.userInfo.uid);
        },
        validatePhone: function(){
            let reg = /^1[34578]\d{9}$/;
            if(reg.test(this.user)){
                return true;
            }
            return false;
        },
        validateEmial: function(){},
        loginSuccess: function(){
            this.isEnter = true;
            this.tip = '登录成功';
            this.type = 'success';
            this.tipSwitch();
            setTimeout(() => {
                // 路由跳转
                this.$router.push({path: 'home'});
            },1000)
        },
        loginFail: function(){
            this.tip = '登录失败，请核对账号密码';
            this.type = 'error';
            this.tipSwitch();
        },
        tipSwitch: function(t = 1000){
            this.isShowTips = true;
            console.log('显示');
            setTimeout(() => {
                this.isShowTips = false;
            }, t)
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




