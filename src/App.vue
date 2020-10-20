<template>
  <v-app>
    <Hero />
    <AppBar />
    <About />
    <Projects />
    <Work />
    <Education />
    <Footer />
  </v-app>
</template>

<script>
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import Education from './components/Education.vue'
import Work from './components/Work.vue'
import Footer from './components/Footer.vue'
import AppBar from './components/AppBar.vue'

export default {
  name: 'App',
  components: {
    AppBar,
    Hero,
    Projects,
    About,
    Education,
    Work,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
body{
  margin: 0;
}
#app {
  position: relative;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
