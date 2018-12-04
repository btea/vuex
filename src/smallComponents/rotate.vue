<template>
    <canvas id="rotate"></canvas>
</template>

<script>
export default {
    data: function(){
        return {
            w: 0,
            h: 0,
            color: 'aqua',
            r: 100,
            maxR: 200,
            deg: 0, // 画布旋转角度
            allCircle: [],
            allPoints: []
        };
    },
    mounted: function(){
        this.canvas = document.getElementById('rotate');
        this.ctx = this.canvas.getContext('2d');
        this.w = this.canvas.width = window.innerWidth;
        this.h = this.canvas.height = window.innerHeight;

        this.drawCircle();
        this.allPoint(10); // 初始化，生成多少个圆
        setInterval(() => {
            this.update();
        },1000 / 60);
    },
    methods: {
        drawCircle: function(){
            let c = this.ctx;
            c.beginPath();
            c.arc(this.w/ 2, this.h/2, this.r, 0, 2*Math.PI);
            c.strokeStyle = this.color;
            c.stroke();
        },
        generateCircleParam: function(i){
            let x, y, r, color, speed, deg, pointR; // 圆拓展扩大的速度
            x = this.w / 2;
            y = this.h / 2;
            r = this.r;
            color = this.color;
            speed = i * 0.1;
            deg = this.randomSection(0,360,true);
            pointR = this.randomSection(3,6,true);
            return {x, y, r, color, speed, deg, pointR};  
        },
        _drawCicle: function(cir){ // 圆扩大之后重新绘制
            let c = this.ctx;
            c.beginPath();
            c.arc(cir.x, cir.y, cir.r, 0, 2 * Math.PI);
            c.strokeStyle = cir.color;
            c.stroke();
        },
        generatePointParam: function(circle){
            let centerX = this.w/2, centerY = this.h / 2, radian = 2 * Math.PI * 360 / (circle.deg),
                x, y, color, r;  
            x = circle.r * Math.cos(radian) + centerX;
            y = circle.r * Math.sin(radian) + centerY;
            r = circle.pointR;
            color = '#5cf';
            return {x, y, r, color};
        },
        allPoint: function(num){
            for(let i = 0; i < num; i++){
                this.allCircle.push(this.generateCircleParam(i + 1));
                // this.allPoints.push(this.generatePointParam());
            }
        },
        drawPoint: function(circle){
            let obj = this.generatePointParam(circle),c = this.ctx;    
            c.beginPath();
            c.arc(obj.x, obj.y, obj.r, 0, 2*Math.PI);
            c.fillStyle = obj.color;
            c.fill();
        },
        update: function(){
            let _self = this;
            this.ctx.clearRect(0,0,this.w,this.h);
            this.allCircle.forEach((c, i) => {
                c.r += c.speed;
                if(c.r > _self.maxR){
                    c.r = _self.r;
                    c.deg = _self.randomSection(0,360,true);
                    c.pointR = _self.randomSection(3,6,true);
                }
                _self.drawPoint(c);
                _self._drawCicle(c);
            });
            // this.deg++;
            // this.ctx.rotate(this.deg * Math.PI/180);
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
    }
    
}
</script>


<style lang="less" scoped>
    #rotate{
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
    }
</style>

