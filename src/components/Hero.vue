<template>
  <section class="hello">
    <h1>Ove Jørgensen</h1>
    <div class="arrow"></div>
  </section>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style scoped>
.hello {
  /* position: relative; */
  color: white;
  background-color: #264653;
  width: 100vw;
  height: 100vh;
}
.hello h1 {

  position: relative;
  font-size: 40px;
  top: 45%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
}
.arrow,
.arrow:before {
  position: absolute;
  left: 50%;
}

.arrow {
  width: 40px;
  height: 40px;
  top: 90vh;
  margin: -20px 0 0 -20px;
  -webkit-transform: rotate(45deg);
  border-left: none;
  border-top: none;
  border-right: 2px #fff solid;
  border-bottom: 2px #fff solid;
}

.arrow:before {
  content: "";
  width: 20px;
  height: 20px;
  top: 50%;
  margin: -10px 0 0 -10px;
  border-left: none;
  border-top: none;
  border-right: 1px #fff solid;
  border-bottom: 1px #fff solid;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: arrow;
}

@keyframes arrow {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-10px, -10px);
  }
}
</style>