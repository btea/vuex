<template>
    <div class="anime">
        <div class="rect"></div>
    </div>
</template>

<script>
import anime from 'animejs'
export default {
    mounted(){
        anime({
            targets: '.rect',
            translateX: 250,
            scale: 2,
            rotate: '1turn'
        })
    }
}
</script>
<style lang="less" scoped>
    .rect{
        width: 20px;
        height: 20px;
        background: red;
    }
</style>

