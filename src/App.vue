<template>
  <v-app>
    <hero />
    <the-app-bar />
    <v-container class="outer-contain">
      <about />
      <projects />
      <work />
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
import Work from "./components/Work";
import PageFooter from "./components/PageFooter";
import TheAppBar from "./components/TheAppBar";

export default {
  name: "App",
  components: {
    TheAppBar,
    Hero,
    Projects,
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
  /* 
    background: linear-gradient(137deg, #264653, #21862f, #f16f65);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 12s ease infinite;
    -moz-animation: AnimationName 12s ease infinite;
    -o-animation: AnimationName 12s ease infinite;
    animation: AnimationName 12s ease infinite; */
  /* background: radial-gradient(circle, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
  
  background: linear-gradient(90deg, #F6D285, #B0F3F1, #FFCFDF, #D9E4F5);
  background-size: 400% 400%;
  animation: gradient 20s ease infinite;
}
.outer-contain {
  background-color: white;
  margin-top: 100px;
  border-radius: 10px;
  -webkit-box-shadow: 1px 1px 10px 8px rgba(0, 0, 0, 0.39);
  -moz-box-shadow: 1px 1px 10px 8px rgba(0, 0, 0, 0.39);
  box-shadow: 1px 1px 10px 8px rgba(0, 0, 0, 0.39);
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
/* @-webkit-keyframes AnimationName {
    0%{background-position:0% 15%}
    50%{background-position:100% 86%}
    100%{background-position:0% 15%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 15%}
    50%{background-position:100% 86%}
    100%{background-position:0% 15%}
}
@-o-keyframes AnimationName {
    0%{background-position:0% 15%}
    50%{background-position:100% 86%}
    100%{background-position:0% 15%}
}
@keyframes AnimationName {
    0%{background-position:0% 15%}
    50%{background-position:100% 86%}
    100%{background-position:0% 15%}
} */
</style>
