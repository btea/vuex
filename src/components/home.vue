<template>
    <div class="home">
        <homeHeader :userInfo="userInfo"></homeHeader>  
        <alert v-show="isAlertShow" :type="type" :tip="tip"></alert>
        <!-- <play-an></play-an> -->
        <rotate></rotate>
        <!-- <wave></wave> -->
    </div>
</template>
<script>
import alert from '../smallComponents/alert'
import playAn from '../smallComponents/playAn'
import rotate from '../smallComponents/rotate'
import wave from '../smallComponents/wave'

import homeHeader from './header/header'

export default {
    data: function(){
        return {
            isAlertShow: false,
            tip: '',
            type: '',
            userInfo: ''
        }
    },
    components: {
        alert,
        playAn,
        homeHeader,
        rotate,
        wave
    },
    mounted: function(){
        this.getUserInfo();
    },
    methods: {
        getUserInfo: function(){
            let user = this.$store.state.userInfo, data, _self = this;
            console.log(user);
            // return;
            if(!user.uid){ return ;}
            data = this.$store.dispatch('userInfo/userInfo', user.uid);
            data.then(res => {
                if(res.data.status === 200 && res.data.data.code === 200){
                    res.commit('userInfo', res.data.data);
                    _self.userInfo = res.data.data;
                }else{
                    _self.tip = '获取个人信息失败';
                    _self.type = 'error'
                    _self.isAlertShow = true;
                    setTimeout(() => {
                        _self.isAlertShow = false;
                    },2000)
                }
            })
            
        }
    }
}
</script>
<style lang="less" scoped>
    .home{
        width: 100vw;
        height: 100vh;
    }
</style>

