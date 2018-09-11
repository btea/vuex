<template>
    <div>
        <div class="user" @click="login">登录</div>
        <div>用户id： {{userId}}</div>
        <div class="num">{{num}}</div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            num: 0
        }
    },
    mounted: function(){
        this.setInterval = setInterval(this.refresh,50)
    },
    computed: {
        userId(){
            return this.$store.state.account.id;
        }
    },
    methods: {
        login(){
            this.$store.dispatch('getStatus');
            console.log(this.$store);
        },
        refresh(){
            if(this.num > 1000){
                clearInterval(this.setInterval);
                return ;
            }
            this.num++;
        }
    }
}
</script>


