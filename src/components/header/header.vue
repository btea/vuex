<template>
    <header>
        <div class="avatar">
            <img :src="userInfo.profile && userInfo.profile.avatarUrl" alt="">
            <div class="name">
                <span class="nickname">{{userInfo.profile && userInfo.profile.nickname}}</span>
                <eva-icon name="arrow-down" animation="pulse" fill="aqua"></eva-icon>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: ['userInfo'],
    data: function(){
        return {

        }
    },
    mounted: function(){
        console.log(this);
   }
}
</script>


<style lang="less" scoped>
    header{
        width: 100vw;
        height: 50px;
        background: linear-gradient(to right, rgba(102,204,255,.5),rgba(153,204,255,.5),rgba(0,255,255,.5));
        background: -webkit-linear-gradient(to right, rgba(102,204,255,.5),rgba(153,204,255,.5),rgba(0,255,255,.5));
        background: -moz-linear-gradient(to right, rgba(102,204,255,.5),rgba(153,204,255,.5),rgba(0,255,255,.5));
        // background: linear-gradient(to right,#6cf, #9cf, aqua);
        // background: -webkit-linear-gradient(to right,#6cf, #9cf, aqua);
        // background: -moz-linear-gradient(to right,#6cf, #9cf, aqua);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
        .avatar{
            height: 100%;
            float: right;
            margin-right: 100px;
            img{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                margin-top: 10px;
                // vertical-align: middle;
            }
            .name{
                display: inline-block;
                margin-top: 10px;
                cursor: pointer;
                vertical-align: top;
                .nickname{
                    color: #ffffff;
                    font-size: 14px;
                    vertical-align: super;
                }
            }
            
        }
    }
</style>
