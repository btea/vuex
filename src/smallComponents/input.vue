<template>
    <span class="input">
        <input :type="type" :style="{width: w + 'px', height: h + 'px'}" :placeholder = placeholder>
        <!-- <span class="line"></span> -->
    </span>
</template>

<script>
export default {
    data: function(){
        return {
            w: 100,
            h: 20,
            placeholder: '请输入',
            type: 'text'
        }
    },
    mounted: function(){
        var attrs = this.$attrs;
        this.modifyAttr(attrs);
    },
    methods: {
        modifyAttr: function(attrs){
            attrs.width && (this.w = attrs.width);
            attrs.height && (this.h = attrs.height);
            attrs.placeholder && (this.placeholder = attrs.placeholder);
            attrs.type && (this.type = attrs.type);
        }
    }
}
</script>


<style lang="less" scoped>
.input{
    input{
        margin: 0;
        padding: 0;
        position: relative;
        outline: none;
        border: none;
        padding-left: 1em;
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

    &:after{
        content: '';
        position: absolute;
        left: 51%;
        right: 51%;
        bottom: 0;
        height: 2px;
        background-color: aqua;
        transition: all .5s;
    }
    &:hover{
        &:after{
            left: 0;;
            right: 0;
        }
    }
}

</style>

