<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <LandingPage />
        <div class="arrow" @click="$refs.fullpage.api.moveSectionDown()"></div>
      </div>
      <div class="section">
        <Toolbar @toggle="redirect" v-bind:page="this.page"/>
        <About />
      </div>
      <div class="section">
        <Toolbar @toggle="redirect" v-bind:page="this.page"/>

        <LandingPage />
      </div>
      <div class="section">
        <Toolbar @toggle="redirect" v-bind:page="this.page"/>

        <LandingPage />
      </div>
      <div class="section">
        <Toolbar @toggle="redirect" v-bind:page="this.page"/>

        <LandingPage />
      </div>
      <div class="section">
        <Toolbar @toggle="redirect" v-bind:page="this.page"/>
        <Projects />
      </div>
    </full-page>
  </div>
</template>

<script>
import LandingPage from "./LandingPage";
import About from "./About";
import Toolbar from "./Toolbar";
import Projects from "./Projects";

export default {
  name: "SliderMain",
  components: {
    LandingPage,
    About,
    Toolbar,
    Projects
  },
  data() {
    return {
      page: 0,
      options: {
        licenseKey: "&X18O?Q$d9",
        anchors: ["home", "about", "work", "education", "projects", "contact"],
        scrollOverflow: true,
        sectionsColor: [
          "#264653",
          "#E76F51",
          "#E9C46A",
          "#F4A261",
          "#E76F51",
          "#264653"
        ]
      }
    };
  },
  methods: {
    redirect(data) {
      if(data=="Home") this.page=0;
      if(data=="About") this.page=1;
      if(data=="Work") this.page=2;
      if(data=="Education") this.page=3;
      if(data=="Projects") this.page=4;
      if(data=="Contact Me") this.page=5;
      if (data === "Contact Me") data = "contact";
      this.$refs.fullpage.api.moveTo(data.toLowerCase());
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  position: relative;
  overflow: auto !important;
}
.arrow,
.arrow:before {
  position: absolute;
  left: 50%;
}

.arrow {
  width: 40px;
  height: 40px;
  top: 90%;
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
