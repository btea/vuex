<template>
    <div class="clip">
        <canvas id="animation" ref="canvas"></canvas>
        <!-- <div class="container">
            <div class="box" :style="{width: boxW + 'px',height: boxH + 'px',marginLeft: marginX + 'px',marginTop: marginY + 'px'}" @mousedown.prevent="down($event)" @mouseup.prevent="up($event)" @mousemove.prevent="move($event)"></div>
        </div> -->
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            w: 0,
            h: 0,
            allPoint: [],
            boxW: 400,
            boxH: 200,
            startX: 0,
            startY: 0,
            endX: 0,
            endY: 0,
            icChoose: false, // 鼠标是否按下去
            marginX: 0,
            marginY: 0
        }
    },
    mounted: function(){
        this.w = this.$refs.canvas.width = window.innerWidth;
        this.h = this.$refs.canvas.height = window.innerHeight;
        this.ani = this.$refs.canvas.getContext('2d');

        this.ani.mozImageSmoothingEnabled = false;
        this.ani.msImageSmoothingEnabled = false;
        this.ani.webkitImageSmoothingEnabled = false;
        this.ani.ImageSmoothingEnabled = false;

        this.generatePoint();

        document.addEventListener('keydown',(event => {this.isClip(event)}))
    },
    methods: {
        getPoint(i,j){
            /**
             * @param i 第i行，i为整数，范围为1~h
             * @param j 第j列，j为整数, 范围为1~w
            */
            /**
             * 变量说明  position在所有像素点rgba值中具体位置
            */
            let position;
            position = (i - 1) * this.w * 4 + (j - 1) * 4;
        },
        generatePoint: function(num = 100){
            for(let i = 0; i < num; i++){
                this.allPoint.push({
                    x: this.randomPoint(100,300,true),
                    y: this.randomPoint(100,300,true),
                    color: `rgba(${this.randomPoint(0,255)},${this.randomPoint(0,255)},${this.randomPoint(0,255)},1)`
                })
            };
            this.renderPoint();
        },
        renderPoint: function(){
            this.allPoint.forEach(p => {
                this.ani.fillStyle = p.color;
                this.ani.fillRect(p.x,p.y,1,1)
            })
        },
        randomPoint: function(min, max, isInteger){
            let r = Math.random() * (max - min + 1) + min;
            return isInteger ? Math.floor(r) : r;
        },
        isClip: function(event){
            if(event.key === 'a' && event.ctrlKey){
                console.log('start');
            }
        },
        down: function(e){
            this.isChoose = true;
            this.startX = e.x;
            this.startY = e.y;
        },
        up: function(e){
            this.isChoose = false;
            this.endX = e.x;
            this.endY = e.y;
            this.getMargin();
            // console.log('startX', this.startX);
            // console.log('startY',this.startY);
            // console.log('endX',this.endX);
            // console.log('endY',this.endY);
        },
        move: function(e){
            if(this.isChoose){
                this.endX = e.x;
                this.endY = e.y;
                this.getMargin();
            }
        },
        getMargin: function(){
            this.marginX = this.endX - this.startX;
            this.marginY = this.endY - this.startY;
        }
    }

}
</script>
<style lang="less" scoped>
    .clip{
        position: relative;
        width: 100vw;
        height: 100vh;
        .container{
            position: absolute;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,.8);
            z-index: 10;
            .box{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background: #ffffff;
                cursor: move;
            }
        }
    }
</style>


