<template>
  <v-app>
    <!-- <app-bar v-on:activate-drawer="activateDrawer" />
    <drop-down :active="drawer" v-on:activate-drawer="activateDrawer" class="hidden-md-and-up" /> -->
    <the-app-bar />
    <hero />
    <about />
    <projects />
    <work />
    <education />
    <page-footer />
  </v-app>
</template>

<script>
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Education from './components/Education'
import Work from './components/Work'
import PageFooter from './components/PageFooter'
// import AppBar from './components/AppBar'
// import DropDown from './components/DropDown'
import TheAppBar from './components/TheAppBar'

export default {
  name: 'App',
  components: {
    // DropDown,
    // AppBar,
    TheAppBar,
    Hero,
    Projects,
    About,
    Education,
    Work,
    PageFooter,
  },
  data(){
    return {
      drawer: false,
    }
  },
  methods:{
    activateDrawer(){
      this.drawer = !this.drawer;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
body{
  /* margin: 0; */
}
#app {
  position: relative;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
