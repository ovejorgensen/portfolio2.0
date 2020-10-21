<template>
  <v-app>
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
import TheAppBar from './components/TheAppBar'

export default {
  name: 'App',
  components: {
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

#app {
  position: relative;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
