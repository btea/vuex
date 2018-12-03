<template>
    <div class="play-animation">
        <canvas id="circle" ref="canvas"></canvas>
        <canvas id="line" ref="line"></canvas>
    </div>
</template>

<script>
export default {
    props: ['status'],
    data: function(){
        return {
            // x: 100,
            // y: 100,
            // r: 50,
            color: '',
            total: 80, // 泡泡总数
            allCircle: [], // 所有圆的集合
            num: 0, // 已经不在视图内的泡泡数目，当消失的数目大于80%时，重新绘制
            xr: 5,
            x: 100, // 线状动画x轴的起点
            interval: 10, // 每个柱状动画的间隔,
            allLine: [],
            lineMin: 20,
            lineMax: 80
        }
    },
    mounted: function(){ 
        this.w = this.$refs.line.width = this.$refs.canvas.width = window.innerWidth;
        this.h = this.$refs.line.height = this.$refs.canvas.height = window.innerHeight;

        this.ctx = this.$refs.canvas.getContext('2d');
        this.cLine = this.$refs.line.getContext('2d');
        // 关闭锯齿
        this.ctx.mozImageSmoothingEnabled = this.cLine.mozImageSmoothingEnabled = false;
        this.ctx.webkitImageSmoothingEnabled = this.cLine.webkitImageSmoothingEnabled = false;
        this.ctx.msImageSmoothingEnabled = this.cLine.msImageSmoothingEnabled = false;
        this.ctx.imageSmoothingEnabled = this.cLine.imageSmoothingEnabled = false;
        this.cicleDraw(this.total);
        
        // this.lineDraw({
        //     xr: 5,
        //     yr: 30,
        //     x: 100,
        //     y: this.h / 2
        // });
        this.allLineDraw();
    },
    methods: {
        cicleDraw: function(n = 10){
            this.makeCircle(n)
            // console.log(this.allCircle);
            // setInterval(() => {
                // this.update();
            // },100 / 6)
            this.startAnimation();
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
            window.requestAnimFrame(this.update);
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
            this.id = window.requestAnimFrame(this.update);
        },

        // 绘制播放时动画
        lineDraw: function(lineObj){
            let c = this.cLine;
            let {xr, yr, x, y} = lineObj;
            c.beginPath();
            c.strokeStyle = '#6cf';
            c.moveTo(x,y + yr);
            c.lineTo(x, y - yr);
            c.arc(x + xr, y - yr, xr, Math.PI, 2*Math.PI);
            c.stroke();
            c.beginPath();
            c.strokeStyle = '#6cf';
            c.moveTo(x + xr * 2, y + yr);
            c.lineTo(x + xr * 2, y - yr);
            c.arc(x + xr, y + yr, xr, 0, Math.PI);
            c.stroke();
        },
        // 绘制多个
        allLineDraw: function(){
            let obj;
            while(this.x + 100 < this.w){
                this.x += (this.xr * 2 + this.interval);
                obj = {
                    xr: this.xr,
                    yr: this.randomSection(20,60,true),
                    x: this.x,
                    y: this.h / 2,
                    speed: this.randomSection(1,5,true),
                    status: 1,
                }
                this.lineDraw(obj);
                this.allLine.push(obj);
            }
            window.requestAnimationFrame(this.loopAnimation);
            // setInterval(() => {
                // this.loopAnimation();
            // },200)
        },
        loopAnimation: function(){
            this.cLine.clearRect(0,0,this.w, this.h);
            this.allLine.forEach(line => {
                if(line.yr > this.lineMax){
                    line.status = -1;
                }
                if(line.yr < this.lineMin){
                    line.status = 1;
                }
                line.yr += line.status * line.speed;
                // line.yr = this.randomSection(20,60,true);
                this.lineDraw(line);
            })
            window.requestAnimationFrame(this.loopAnimation);
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
        #line{
            position: absolute;
            left: 0;
            top: 0;
        }
    }
</style>
