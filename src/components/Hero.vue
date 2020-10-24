<template>
  <section class="hello">
    <hero-animation class="anim"></hero-animation>
    <h1>Ove Jørgensen</h1>
    <!-- <div class="arrow"></div> -->
    <div class="center-con">
      <div class="round" v-on:click="scrollHandler()">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
  </section>
</template>

<script>
import HeroAnimation from '../components/HeroAnimation'

export default {
  name: "Hero",
  components:{
    HeroAnimation
  },
  methods: {
    scrollHandler(){
      let options={offset:50};
      this.$scrollTo('.the-app-bar', options);
    }
  }
};
</script>

<style scoped>
.anim{
  position: absolute;
  z-index: 10;
}
.hello {
  /* position: relative; */
  color: white;
  background-color: #264653;
  width: 100vw;
  height: 100vh;
}
.hello h1 {
  position: relative;
  z-index: 2;
  font-size: 40px;
  top: 45%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
}

.center-con {
    display: flex;
    height: 100vh;
    position: relative;
    bottom: 100px;
    align-items:flex-end;
    justify-content: center;
    z-index: 100;
}

.round {
    position: relative;
    /* border: 0px solid #fff; */
    width: 100px;
    height: 100px;
    border-radius: 10%;
    z-index: 100;
}

span {
    z-index: 999;
    height: 3px;
    margin:1px;
    background: #fff;
    transition: 0.4s ease;
}

span:first-child {
    display: block;
    position: absolute;
    transform: rotate(45deg);
    left: 15%;
    bottom: 40%;
    width: 43px;
}

span:nth-child(2) {
    display: block;
    position: absolute;
    transform: rotate(-45deg);
    left: 43%;
    bottom: 40%;
    width: 43px;
}

span:nth-child(3) {
    display: block;
    position: absolute;
    transform: rotate(45deg);
    left: 26%;
    bottom: 54%;
    width: 30px;
}

span:nth-child(4) {
    display: block;
    position: absolute;
    transform: rotate(-45deg);
    left: 45%;
    bottom: 54%;
    width: 30px;
}

span:nth-child(5) {
    display: block;
    position: absolute;
    transform: rotate(45deg);
    left: 37%;
    bottom: 68%;
    width: 17px;
}

span:nth-child(6) {
    display: block;
    position: absolute;
    transform: rotate(-45deg);
    left: 47%;
    bottom: 68%;
    width: 17px;
}

span:nth-child(7) {
    display: block;
    position: absolute;
    transform: rotate(45deg);
    left: 37%;
    bottom: 68%;
    width: 17px;
}

span:nth-child(8) {
    display: block;
    position: absolute;
    transform: rotate(-45deg);
    left: 47%;
    bottom: 68%;
    width: 17px;
}

/* .round:hover span:nth-child(1) {
    transform: rotate(-135deg);
}

.round:hover span:nth-child(2) {
    transform: rotate(135deg);
} */

/* .round:hover span:nth-child(3) {
    transform: rotate(225deg);
}

.round:hover span:nth-child(4) {
    transform: rotate(-225deg);
} */

/* .round:hover span:nth-child(5) {
    transform: rotate(225deg);
}

.round:hover span:nth-child(6) {
    transform: rotate(-225deg);
} */

.round span:nth-child(1) {
    animation: mover1 3s alternate infinite;
}

.round span:nth-child(2) {
    animation: mover2 3s alternate infinite;
}

.round span:nth-child(3) {
}

.round span:nth-child(4) {
}

.round span:nth-child(5) {
}

.round span:nth-child(6) {
}

/* @keyframes mover1 {
    0% { 
      transform: translateY(0) rotate(45deg); 
      }
    100% { 
      transform: translateY(-10px) rotate(45deg); 
      }
}
@keyframes mover2 {
    0% { 
      transform: translateY(0) rotate(-45deg); 
      }
    100% { 
      transform: translateY(-10px) rotate(-45deg); 
      }
} */

.round:hover span:nth-child(1) {
    transform: translateX(-16px) translateY(-10px) rotate(45deg) scale(2, 1);
}

.round:hover span:nth-child(2) {
    transform: translateX(16px) translateY(-10px) rotate(-45deg) scale(2, 1);
}

.round:hover span:nth-child(3) {
    transform: rotate(225deg) translate(10px, 10px);
}

.round:hover span:nth-child(4) {
    transform: rotate(-225deg) translate(-10px, 10px);
}

.round:hover span:nth-child(5) {
    transform: translateX(-25px) translateY(-40px) rotate(-45deg) scale(5.1, 1);
}

.round:hover span:nth-child(6) {
    transform: translateX(25px) translateY(-40px) rotate(45deg) scale(5.1, 1);
}

.round:hover span:nth-child(7) {
    transform: translateX(5px) translateY(-20px) rotate(90deg) scale(2, 1);
}

.round:hover span:nth-child(8) {
    transform: translateX(-5px) translateY(-20px) rotate(-90deg) scale(2, 1);
}
</style>