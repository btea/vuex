<template>
    <div>
        登录成功之后进入主页
        <header></header>
    </div>
</template>
<script>
export default {
    data: function(){
        return {

        }
    },
    mounted: function(){
        this.getUserInfo();
    },
    methods: {
        getUserInfo: function(){
            let user = this.$store.state.userInfo, data;
            console.log(user);
            // return;
            if(!user.uid){ return ;}
            data = this.$store.dispatch('userInfo/userInfo', user.uid);
            data.then(res => {
                if(res.data.status === 200){
                    res.commit('userInfo', res.data.data);
                }
            })
            console.log(data);
        }
    }
}
</script>

