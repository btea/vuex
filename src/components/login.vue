<template>
    <div class="box">
        <div class="login-container">
            <div class="user">
                <input type="text" placeholder="请输入手机号/邮箱" v-model="user">
            </div>
            <div class="password">
                <input type="password" placeholder="请输入密码" v-model="password">
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
        document.getElementsByTagName('title')[0].text = '登录页···'
        
    },
    methods: {
        login: function(){
            // type email/phone 邮箱或者手机登录
            // data 发送登录请求返回的数据
            // obj 发送请求传过去的参数
            let type, data, obj, _self = this;
            if(!this.user.trim()){
                this.tip = '用户名不能为空';
                this.type = 'warning';
                this.tipSwitch();
                return;
            }
            if(!this.password.trim()){
                this.tip = '密码不能为空',
                this.type = 'warning';
                this.tipSwitch();
                return ;
            }
            if(~this.user.indexOf('@')){
                type = 'email'
            }else{
                type = 'phone'
            }
            if(type === 'phone'){
                if(!this.validatePhone()){
                    this.tip = '手机号格式不对,请重新输入';
                    this.type = 'error';
                    this.tipSwitch();
                    return;
                }
            }
            if(type === 'email'){
                if(!this.validateEmial()){
                    this.tip = '邮箱格式不对';
                    this.type = '邮箱格式不对,请重新输入';
                    this.tipSwitch();
                    return;
                }
            }
            obj = {
                loginType: type,
                password: this.password
            }
            obj[type] = this.user;
            data = this.$store.dispatch('userInfo/login', obj);
            data.then(res => {
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
                _self.loginFail();
            })
        },
        validatePhone: function(){
            let reg = /^1[34578]\d{9}$/;
            if(reg.test(this.user)){
                return true;
            }
            return false;
        },
        validateEmial: function(){
            let reg = /@163\.com/;
            if(reg.test(this.user)){
                return true;
            }
            return false;
        },
        loginSuccess: function(){
            this.isEnter = true;
            this.tip = '登录成功';
            this.type = 'success';
            this.tipSwitch();
            setTimeout(() => {
                // 路由跳转
                this.isEnter = false;
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
            setTimeout(() => {
                this.isShowTips = false;
            }, 3000)    
        }
    }
}
</script>

<style lang="less" scoped>
    @color: #fff;
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
        .user,.password{
            text-align: center;
            margin: 15px 0;
            input{
                margin: 0;
                padding: 0;
                position: relative;
                outline: none;
                border: 1px solid #fff;
                background: rgba(255,255,255,.5);
                width: 250px;
                height: 40px;
                text-align: center;
                color: @color;
                &::-webkit-input-placeholder{
                    color: @color;
                }
                &::-webkit-input-placeholder{
                    color: @color;
                }
                &::-webkit-input-placeholder{
                    color: @color;
                }
            }
        }
        .login{
            text-align: center;
            margin-top: 30px;
            button{
                padding: 0;
                width: 250px;
                height: 40px;
                border-radius: 20px;
                box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
                overflow: hidden;
                background-image: -webkit-linear-gradient(0deg, #6cf, #9cf, aqua);
                background-size: 200% 100%;
                background-position: 0 0;
                display: block;
                transition: background .5s;
                color: #fff;
                outline: none;
                border: none;
                margin: 0 auto;
                cursor: pointer;
                &:hover{
                    background-position: -100% 0;
                }
            }
        }
        
    }
</style>




