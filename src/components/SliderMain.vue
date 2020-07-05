<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <LandingPage />
        <div class="arrow" @click="$refs.fullpage.api.moveSectionDown()"></div>
      </div>
      <div class="section">
        <About />
      </div>
      <div class="section">
        <LandingPage />
      </div>
      <div class="section">
        <LandingPage />
      </div>
      <div class="section">
        <LandingPage />
      </div>
    </full-page>
  </div>
</template>

<script>
import LandingPage from "./LandingPage";
import About from "./About";

export default {
  name: "SliderMain",
  components: {
    LandingPage,
    About
  },
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HERE",
        // menu: '#menu',
        anchors: ["page1", "page2", "page3", "page4", "page5"],
        sectionsColor: ["#264653", "#FFFFFF", "#E9C46A", "#F4A261", "#E76F51"]
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  position: relative;
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
