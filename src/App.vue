<template>
  <v-app>
    <hero />
    <the-app-bar class="the-app-bar" />
    <v-container class="outer-contain">
      <about />
      <projects />
      <work />
      <achievements />
      <education />
    </v-container>
    <page-footer />
  </v-app>
</template>

<script>
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Education from "./components/Education";
import Achievements from "./components/Achievements"
import Work from "./components/Work";
import PageFooter from "./components/PageFooter";
import TheAppBar from "./components/TheAppBar";

export default {
  name: "App",
  components: {
    TheAppBar,
    Hero,
    Projects,
    Achievements,
    About,
    Education,
    Work,
    PageFooter,
  },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    activateDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

#app {
  position: relative;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  background: linear-gradient(90deg, #8CACAC, #AF8C9D, #2A5470);
  /* background: linear-gradient(90deg, #F6D285, #B0F3F1, #FFCFDF, #D9E4F5); */
  background-size: 400% 400%;
  animation: gradient 20s ease infinite;
}
.outer-contain {
  background-color: white;
  margin-top: 100px;
  border-radius: 10px;
  -webkit-box-shadow: 1px 1px 10px 8px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 1px 1px 10px 8px rgba(15, 5, 5, 0.2);
  box-shadow: 1px 1px 10px 8px rgba(0, 0, 0, 0.2);
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
