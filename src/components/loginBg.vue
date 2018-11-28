<template>
    <div class="bg">
        <div class="circle">
            <div class="box">
                <div class="shine"></div>
                <div class="shine"></div>
                <div class="shine"></div>
                <div class="shine"></div>
                <div class="shine"></div>
                <div class="shine"></div>
                <div class="shine"></div>
                <div class="shine"></div>
                <div class="shine"></div>
                <div class="shine"></div>
            </div>
        </div>
        <div class="clouds">
            <div class="cloud"></div>
            <div class="cloud"></div>
            <div class="cloud"></div>
            <div class="cloud"></div>
        </div>
    </div>

</template>

<style lang="less" scoped>
.bg{
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding-top: 250px;
  animation: changeSky 8s linear both;
}
@-moz-keyframes changeSky {
  0%, 100% {
    background: linear-gradient(to top, #90dffe 0%, #38a3d1 100%) #87cefa;
  }
  50% {
    background: url("http://www.script-tutorials.com/demos/360/images/stars.png") #131862;
  }
}
@-webkit-keyframes changeSky {
  0%, 100% {
    background: linear-gradient(to top, #90dffe 0%, #38a3d1 100%) #87cefa;
  }
  50% {
    background: url("http://www.script-tutorials.com/demos/360/images/stars.png") #131862;
  }
}
@-o-keyframes changeSky {
  0%, 100% {
    background: linear-gradient(to top, #90dffe 0%, #38a3d1 100%) #87cefa;
  }
  50% {
    background: url("http://www.script-tutorials.com/demos/360/images/stars.png") #131862;
  }
}
@keyframes changeSky {
  0%, 100% {
    background: linear-gradient(to top, #90dffe 0%, #38a3d1 100%) #87cefa;
  }
  50% {
    background: url("http://www.script-tutorials.com/demos/360/images/stars.png") #131862;
  }
}
.circle {
  margin: 0 auto;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  transform: rotate(0deg);
  animation: rotateParent 8s linear;
}
@-moz-keyframes rotateParent {
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rotateParent {
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes rotateParent {
  to {
    transform: rotate(360deg);
  }
}
@keyframes rotateParent {
  to {
    transform: rotate(360deg);
  }
}
.box {
  position: relative;
  background-color: #fdb813;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin-top: -80px;
  margin-left: 45px;
  transition: all 1s ease-in-out;
  animation: orbit 8s linear, changeSize 8s linear, rotate 20s linear 8s infinite, shine-shadows 8s ease-in-out 10s infinite both;
}
@-moz-keyframes orbit {
  0%, 100% {
    background: #fdb813;
  }
  50% {
    background: #fefcd7;
  }
}
@-webkit-keyframes orbit {
  0%, 100% {
    background: #fdb813;
  }
  50% {
    background: #fefcd7;
  }
}
@-o-keyframes orbit {
  0%, 100% {
    background: #fdb813;
  }
  50% {
    background: #fefcd7;
  }
}
@keyframes orbit {
  0%, 100% {
    background: #fdb813;
  }
  50% {
    background: #fefcd7;
  }
}
@-moz-keyframes changeSize {
  0%, 100% {
    width: 160px;
    height: 160px;
  }
  50% {
    width: 120px;
    height: 120px;
  }
}
@-webkit-keyframes changeSize {
  0%, 100% {
    width: 160px;
    height: 160px;
  }
  50% {
    width: 120px;
    height: 120px;
  }
}
@-o-keyframes changeSize {
  0%, 100% {
    width: 160px;
    height: 160px;
  }
  50% {
    width: 120px;
    height: 120px;
  }
}
@keyframes changeSize {
  0%, 100% {
    width: 160px;
    height: 160px;
  }
  50% {
    width: 120px;
    height: 120px;
  }
}
.shine {
  position: absolute;
  border-radius: 50%;
  background: #fdb813;
  width: 5px;
  height: 1px;
  top: 50%;
  left: 50%;
  z-index: -2;
  margin-left: -2.5px;
  animation: orbit 8s linear, shine1 2s linear 5s forwards, shine-shadows 8s ease-in-out 0s infinite both;
}
.shine:nth-child(1) {
  transform: rotate(18deg);
}
.shine:nth-child(2) {
  transform: rotate(36deg);
}
.shine:nth-child(3) {
  transform: rotate(54deg);
}
.shine:nth-child(4) {
  transform: rotate(72deg);
}
.shine:nth-child(5) {
  transform: rotate(90deg);
  width: 10px;
}
.shine:nth-child(6) {
  transform: rotate(108deg);
}
.shine:nth-child(7) {
  transform: rotate(126deg);
}
.shine:nth-child(8) {
  transform: rotate(144deg);
}
.shine:nth-child(9) {
  transform: rotate(162deg);
}
.shine:nth-child(10) {
  transform: rotate(180deg);
  width: 10px;
}
.shine:nth-child(11) {
  transform: rotate(198deg);
}
.shine:nth-child(12) {
  transform: rotate(216deg);
}
.shine:nth-child(13) {
  transform: rotate(234deg);
}
.shine:nth-child(14) {
  transform: rotate(252deg);
}
.shine:nth-child(15) {
  transform: rotate(270deg);
}
.shine:nth-child(16) {
  transform: rotate(288deg);
}
.shine:nth-child(17) {
  transform: rotate(306deg);
}
.shine:nth-child(18) {
  transform: rotate(324deg);
}
.shine:nth-child(19) {
  transform: rotate(342deg);
}
.shine:nth-child(20) {
  transform: rotate(360deg);
}
.shine:nth-child(21) {
  transform: rotate(378deg);
}
.shine:nth-child(22) {
  transform: rotate(396deg);
}
.shine:nth-child(23) {
  transform: rotate(414deg);
}
.shine:nth-child(24) {
  transform: rotate(432deg);
}
.shine:nth-child(25) {
  transform: rotate(450deg);
}
.shine:nth-child(26) {
  transform: rotate(468deg);
}
.shine:nth-child(27) {
  transform: rotate(486deg);
}
.shine:nth-child(28) {
  transform: rotate(504deg);
}
.shine:nth-child(29) {
  transform: rotate(522deg);
}
.shine:nth-child(30) {
  transform: rotate(540deg);
}
.shine:nth-child(31) {
  transform: rotate(558deg);
}
.shine:nth-child(32) {
  transform: rotate(576deg);
}
.shine:nth-child(33) {
  transform: rotate(594deg);
}
.shine:nth-child(34) {
  transform: rotate(612deg);
}
.shine:nth-child(35) {
  transform: rotate(630deg);
}
.shine:nth-child(36) {
  transform: rotate(648deg);
}
.cloud {
  width: 350px;
  height: 150px;
  border-radius: 100px;
  background: #fff;
  position: absolute;
  top: 30%;
  left: 60%;
  opacity: 0;
  box-shadow: 0 8px 5px rgba(0,0,0,0.1);
  animation: fade 1s linear 6s forwards, float 5s ease-in-out 6s infinite, move 20s linear 6s infinite;
}
@-moz-keyframes fade {
  to {
    opacity: 0.7;
  }
}
@-webkit-keyframes fade {
  to {
    opacity: 0.7;
  }
}
@-o-keyframes fade {
  to {
    opacity: 0.7;
  }
}
@keyframes fade {
  to {
    opacity: 0.7;
  }
}
@-moz-keyframes float {
  0%, 100% {
    margin-top: 0;
  }
  25% {
    margin-top: 15px;
  }
  50% {
    margin-top: -15px;
  }
}
@-webkit-keyframes float {
  0%, 100% {
    margin-top: 0;
  }
  25% {
    margin-top: 15px;
  }
  50% {
    margin-top: -15px;
  }
}
@-o-keyframes float {
  0%, 100% {
    margin-top: 0;
  }
  25% {
    margin-top: 15px;
  }
  50% {
    margin-top: -15px;
  }
}
@keyframes float {
  0%, 100% {
    margin-top: 0;
  }
  25% {
    margin-top: 15px;
  }
  50% {
    margin-top: -15px;
  }
}
@-moz-keyframes move {
  from {
    left: 100%;
  }
  to {
    left: -40%;
  }
}
@-webkit-keyframes move {
  from {
    left: 100%;
  }
  to {
    left: -40%;
  }
}
@-o-keyframes move {
  from {
    left: 100%;
  }
  to {
    left: -40%;
  }
}
@keyframes move {
  from {
    left: 100%;
  }
  to {
    left: -40%;
  }
}
.cloud:before {
  content: '';
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  top: -40px;
  left: 15%;
  background: #fff;
}
.cloud:after {
  content: '';
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  top: -75px;
  left: 35%;
  background: #fff;
}
.cloud:nth-of-type(1) {
  top: 20%;
  z-index: -1;
  transform: scale(0.5);
  animation-delay: 8s;
}
.cloud:nth-of-type(2) {
  top: 40%;
  transform: scale(1);
  animation-delay: 8s;
}
.cloud:nth-of-type(3) {
  top: 60%;
  z-index: -1;
  transform: scale(1);
  animation-delay: 4s;
}
.cloud:nth-of-type(4) {
  top: 80%;
  transform: scale(0.8);
  animation-delay: 9s;
}
@-moz-keyframes shine-shadows {
  0%, 100% {
    box-shadow: 0 0 80px 15px rgba(253,184,19,0.5);
  }
  50% {
    box-shadow: 0 0 100px 5px rgba(253,184,19,0.1);
  }
}
@-webkit-keyframes shine-shadows {
  0%, 100% {
    box-shadow: 0 0 80px 15px rgba(253,184,19,0.5);
  }
  50% {
    box-shadow: 0 0 100px 5px rgba(253,184,19,0.1);
  }
}
@-o-keyframes shine-shadows {
  0%, 100% {
    box-shadow: 0 0 80px 15px rgba(253,184,19,0.5);
  }
  50% {
    box-shadow: 0 0 100px 5px rgba(253,184,19,0.1);
  }
}
@keyframes shine-shadows {
  0%, 100% {
    box-shadow: 0 0 80px 15px rgba(253,184,19,0.5);
  }
  50% {
    box-shadow: 0 0 100px 5px rgba(253,184,19,0.1);
  }
}
@-moz-keyframes shine1 {
  0% {
    height: 0;
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    height: 200px;
    margin-top: -100px;
  }
}
@-webkit-keyframes shine1 {
  0% {
    height: 0;
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    height: 200px;
    margin-top: -100px;
  }
}
@-o-keyframes shine1 {
  0% {
    height: 0;
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    height: 200px;
    margin-top: -100px;
  }
}
@keyframes shine1 {
  0% {
    height: 0;
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    height: 200px;
    margin-top: -100px;
  }
}
@-moz-keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-o-keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
