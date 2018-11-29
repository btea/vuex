<template>
    <div class="alert">
        <div :class="['tip', className]">{{tips}}</div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            tips: '',
            className: ''
        }
    },

    mounted: function(){
        this.$attrs.tip && (this.tips = this.$attrs.tip);
        this.$attrs.type && (this.className = this.$attrs.type);
    }
}
</script>

<style lang="less" scoped>
    .alert{
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: rgba(255,255,255,0);
        left: 0;
        top: 0;
        z-index: 10000000;
        .tip{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 8px;
            padding: 5px 10px;
            &.success{
                background-color: #f0f9eb;
                color: #67c23a;
            }
            &.info{
                background-color: #f4f4f5;
                color: #909399;
            }
            &.warning{
                background-color: #fdf6ec;
                color: #e6a23c;
            }
            &.error{
                background-color: #fef0f0;
                color: #f56c6c;
            }
        }
    }
</style>





