<template>
    <div class="wave">
        <canvas id="waveCurve" ref="wave"></canvas>
        <canvas id="img" ref="img"></canvas>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            r: 10, // 波浪线圆的半径
            ry: 100, // 波浪线开始的高度
            w: 0, // canvas宽度
            h: 0, // canvas高度
            points: [],
            pixelPoint: [],
            showpiexl: []
        }
    },
    mounted: function(){
        this.w = this.$refs.img.width = this.$refs.wave.width = 200;
        this.h = this.$refs.img.height = this.$refs.wave.height = 300;
        this.wave = this.$refs.wave.getContext('2d');
        this.img = this.$refs.img.getContext('2d');
        // 关闭锯齿
        this.wave.mozImageSmoothingEnabled = false;
        this.wave.webkitImageSmoothingEnabled = false;
        this.wave.msImageSmoothingEnabled = false;
        this.wave.imageSmoothingEnabled = false;
        
        

        this.drawImg('/src/img/1.jpg',this.wave);

        let z = new Image(),_self = this,can_img = this.img;
        z.src = '/src/img/f.jpg';
        z.onload = function(){
            can_img.drawImage(z, 0, 0);
            let d = can_img.getImageData(0,0,200,300);
            _self.pixelPoint = d;
            _self.pixelChange();
            setInterval(() => {
                _self.update();
            },100)
        }
        // this.filterImg();
    },
    methods: {
        // 获取符合所有波浪曲线的点   取到的点组合而成的是完整的半圆形状，不是很好看
        allPoint: function(){
            let x_center; // 点距离所在半圆圆心的x轴距离
            for(let i = 0; i < this.w; i++){
                let obj = {
                    x: i
                };
                x_center = Math.abs(this.r - i % (2 * this.r));
                obj.y = Math.sqrt(this.r * this.r - x_center * x_center) + this.ry;
                this.points.push(obj);
            }
            this.drawWave();
        },
        // sin curve 绘制三角函数曲线点  sin函数返回一个-1到1之间的数值，表示给定角度（单位：弧度）的正弦值
        waveCurvePoint: function(){
            for(let i = 0; i < this.w / 10; i += 0.1){
                let obj = {
                    x: i * 10
                };
                obj.y = Math.round(Math.sin(i) * 10 + this.ry);
                this.points.push(obj);
                for(let k = 0; k < obj.y; k++){
                    let sym = x * 4 + k * this.w * 4;
                    this.imgData[sym + 3] = 0;
                }
            };

            // this.drawWave();
        },
        drawWave: function(){
            let p = this.points;
            this.wave.beginPath();
            this.wave.lineJoin = 'round';
            this.wave.lineWidth = 2;
            this.wave.moveTo(0, this.ry);
            for(let i = 0; i < p.length; i++){
                this.wave.lineTo(p[i].x, p[i].y);
            }
            this.wave.stroke();
        },
        drawImg: function(src,$canvas){
            let _self = this;
            let img = new Image();
            img.src = src;
            img.onload = function(){
                $canvas.drawImage(img,0,0);
            }
        },
        update: function(){
            this.ry--;
            this.pixelChange();
            // if(this.ry < 0){
                // this.ry = 100;
            // }
            // this.wave.clearRect(0,0,this.w,this.h);
            // this.points.length = 0;
            // this.waveCurvePoint();
        },
        pixelChange: function(){
            for(let i = 0; i < this.w / 10; i += 0.1){
                let obj = {
                    x: Math.round(i * 10)
                };
                obj.y = Math.round(this.ry + Math.sin(i) * 10);
                for(let k = 0; k < obj.y; k++){
                    let sym = obj.x * 4 + k * this.w * 4;
                    this.pixelPoint.data[sym + 3] = 0;
                }
            };
            this.img.putImageData(this.pixelPoint,0,0);
        }   
    },
}
</script>

<style lang="less" scoped>
    #waveCurve,#img{
        // width: 100vw;
        // height: 100vh;
        position: fixed;
        left: 50%;
        top: 50%;
    }
    #img{
        z-index: 1;
    }
</style>

