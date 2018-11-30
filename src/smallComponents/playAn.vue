<template>
    <div class="play-animation">
        <canvas id="circle" ref="canvas"></canvas>
    </div>
</template>

<script>
export default {
    props: ['status'],
    data: function(){
        return {
            x: 100,
            y: 100,
            r: 50,
            color: '',
            total: 80,
            allCircle: [],
            num: 0, // 已经不在视图内的泡泡数目，当消失的数目大于80%时，重新绘制
        }
    },
    mounted: function(){ 
        this.w = this.$refs.canvas.width = window.innerWidth;
        this.h = this.$refs.canvas.height = window.innerHeight;

        this.ctx = this.$refs.canvas.getContext('2d');
        // 关闭锯齿
        this.ctx.mozImageSmoothingEnabled = false;
        this.ctx.webkitImageSmoothingEnabled = false;
        this.ctx.msImageSmoothingEnabled = false;
        this.ctx.imageSmoothingEnabled = false;
        this.cicleDraw(this.total);
        // this.startAnimation();
    },
    methods: {
        cicleDraw: function(n = 10){
            this.makeCircle(n)
            // console.log(this.allCircle);
            setInterval(() => {
                this.update();
            },100 / 6)
        },
        makeCircle: function(n){
            let x, y, r, speedX, speedY;
            for(let i = 0; i < n; i++){
                x = this.randomSection(0, this.w, true);
                y = this.randomSection(0, this.h, true);
                r = this.randomSection(5,30, true);
                speedX = this.randomSection(0,2);
                speedY = this.randomSection(0,2)
                this.allCircle.push({x, y, r, speedX, speedY})
                this.circle({x, y, r, speedX, speedY});
            }
        },
        circle: function(obj){
            let {x, y, r} = obj;
            this.ctx.beginPath();
            this.ctx.arc(x, y, r, 0, 2*Math.PI);
            this.ctx.fillStyle = '#6cf';
            this.ctx.fill();
            // this.ctx.closePath();
        },
        update: function(){
            this.ctx.clearRect(0,0,this.w, this.h);
            
            // 数据归零
            this.num = 0;

            this.allCircle.forEach(c => {
                c.x -= c.speedX
                c.y -= c.speedY;
                this.circle(c);
                // this.cicleDraw(c);
                if(c.x < 0 || c.y < 0){
                    this.num++;
                }
                if(this.num / this.total > 0.8){
                    // 重新绘制，保存的泡泡和计算消失的泡泡的都归；零
                    this.num = 0;
                    this.allCircle = [];
                    this.makeCircle(this.total);
                }
            })
        },
        randomSection: function(min, max, integer){
            /**
             * param integer 是否是整数，true表示生成随机整数，false表示生成随机数
            */
            if(integer){
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
            return Math.random() * (max - min + 1) + min;
        },
        startAnimation: function(){
            window.requestAnimFrame = (function(){
                return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
                function(callback){
                    window.setTimeout(callback, 1000 / 60);
                };
            })();
            this.id = window.requestAnimationFrame(this.update);
            console.log(this.id);
        }
    },

}
</script>
<style lang="less" scoped>
    .play-animation{
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        // background: linear-gradient(#6cf,aqua);
        background: -webkit-linear-gradient(to top, #1CB5E0, #000046);
        background: linear-gradient(to top, #1CB5E0, #000046);
    }
</style>
