<template>
  <div id="app">
    <SliderMain msg="Hey man"/>
  </div>
</template>

<script>
import SliderMain from './components/SliderMain.vue'

export default {
  name: 'App',
  components: {
    SliderMain
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
body{
  margin: 0;

  height: 100%;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
