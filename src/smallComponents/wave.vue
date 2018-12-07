<template>
    <div class="wave">
        <canvas id="waveCurve" ref="wave"></canvas>
        <canvas id="img" ref="img"></canvas>
        <img src="" alt="" id="dataUrl">
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
            showpiexl: [],
            speed: 1
        }
    },
    mounted: function(){
        this.w = this.$refs.img.width = this.$refs.wave.width = window.innerWidth;
        this.h = this.$refs.img.height = this.$refs.wave.height = window.innerHeight;
        this.wave = this.$refs.wave.getContext('2d');
        this.img = this.$refs.img.getContext('2d');
        // 关闭锯齿
        this.wave.mozImageSmoothingEnabled = false;
        this.wave.webkitImageSmoothingEnabled = false;
        this.wave.msImageSmoothingEnabled = false;
        this.wave.imageSmoothingEnabled = false;
        
        

        this.drawImg('/src/img/1.jpg',this.wave);
        let z = new Image(),_self = this,can_img = this.img;
        z.src = '/src/img/2.jpg';
        // z.crossorigin = '';
        // z.src = srcImg;
        z.onload = function(){
            can_img.drawImage(z, 0, 0);
            let d = can_img.getImageData(0,0,_self.w,_self.h);
            _self.pixelPoint = d;
            // setInterval(() => {
            //     _self.update();
            // },50)
            _self.update();
            // _self.recovery(255);
        }
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
        // 将图片绘制到canvas
        drawImg: function(src,$canvas){
            let _self = this;
            let img = new Image();
            // 允许跨域
            // img.setAttribute('crossOrigin', 'Anonymous');
            img.crossorigin = '';
            img.src = src;
            img.onload = function(){
                $canvas.drawImage(img,0,0);
            }
        },
        update: function(){
            // if(this.ry > this.h){
            //     this.ry = 0;
            //     let len = this.pixelPoint.data.length;
            //     for(let i = 0; i < len; i+= 4){
            //         this.pixelPoint.data[i+3] = 255;
            //     }
            // }
            // this.ry++;
            // this.waveAnimation(0);
            if(this.ry < 0){
                this.speed = 1;
            }
            if(this.ry > this.h){
                this.speed = -1;
                this.ry = this.h - 1;
            }
            this.ry += this.speed;
            if(this.speed === 1){
                this.waveAnimation(0);
            }else{
                this.recovery(255);
            }
            setTimeout(this.update, 50);
        },
        randomY: function(min, max){
            return Math.floor(Math.random()* (max - min + 1) + min);
        },
        waveAnimation: function(alpha){
            /**
             * @param alpha 控制像素点透明度，从上往下，曲线覆盖的部分透明度均为0
            */
            for(let i = 0; i < this.w / 10; i += 0.1){
                let obj = {
                    x: Math.round(i * 10)
                };
                obj.y = Math.round(this.ry + Math.sin(i) * this.randomY(4,8)); // 采用随机数可以做出锯齿的效果
                for(let k = 0; k < obj.y; k++){
                    let sym = obj.x * 4 + k * this.w * 4;
                    this.pixelPoint.data[sym + 3] = alpha;
                }
            };
            this.img.putImageData(this.pixelPoint,0,0);
        },
        recovery: function(alpha){
            /**
             * @param aplpha 从下往上，恢复图片的像素，所有曲线包裹外的像素点透明度均恢复为255
            */
            for(let i = 0; i < this.w / 10; i += 0.1){
                let x = Math.round(i*10);
                let y = Math.round(this.ry + Math.sin(i) * 10);
                for(let k = y; k < this.h; k++){
                    let sym = x * 4 + this.w * k * 4;
                    // console.log(this.pixelPoint);
                    // debugger;
                    this.pixelPoint.data[sym + 3] = alpha; 
                }
                // for(let k = this.h; k > y; k--){
                //     let sym = ((k - 1) * this.w + 1) * 4 + x * 4;
                //     this.pixelPoint.data[sym + 3] = alpha;
                // }
            };
            this.img.putImageData(this.pixelPoint,0,0);
        },
        downloadImg: function(){
            let data = this.$refs.img.toDataURL();
            document.getElementById('dataUrl').setAttribute('src', data);
            // download
            let l = document.createElement('a');
            l.href = data;
            l.download = '1.png';
            l.click();
        }   
    },
}
</script>

<style lang="less" scoped>
    #waveCurve,#img{
        // width: 100vw;
        // height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
    }
    #img{
        z-index: 1;
    }
</style>

