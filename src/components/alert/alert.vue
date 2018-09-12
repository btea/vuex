<template>
    <div class="alert" v-html="tips"></div>
</template>

<script>
export default {
    data () {
        return {
            tips: 'tips'
        }
    },
    mounted () {
        console.log(this.$slots);
    }
}
</script>


<style lang="less" scoped>
    .alert{
        position: fixed;
        left: 50%;
        top: 50%;
        color: #ffffff;
        transform: translate(-50%,-50%);
        background-color: #333333;
        z-index: 9999;
        padding: 10px 15px;
    }
</style>

