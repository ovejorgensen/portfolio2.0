<template>
  <v-app-bar dark class="bar" fixed>
    <v-toolbar-title>Ove Jørgensen</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items
      v-for="(el, id) in content"
      :key="id"
      class="hidden-sm-and-down"
    >
      <v-btn v-scroll-to="el.scroll" text>
        <span style="margin-right:10px">
          <v-icon color="grey">{{ el.icon }} </v-icon>
        </span>
        {{ el.name }}
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="hidden-md-and-up">
        <v-app-bar-nav-icon @click.stop="updateDrawer()"></v-app-bar-nav-icon>
        <drop-down :active="drawer"></drop-down>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import DropDown from '../components/DropDown';

export default {
  name: "AppBar",
  components: {
      DropDown
  },
  data() {
    return {
      drawer: false,
      content: [
        { icon: "mdi-account", name: "About", scroll: ".about"},
        { icon: "mdi-check-circle", name: "Projects", scroll: ".projects"},
        { icon: "mdi-folder", name: "Work", scroll: ".work" },
        { icon: "mdi-school", name: "Education", scroll: ".edu" },
        { icon: "mdi-email", name: "Contact", scroll: ".contact" },
      ],
    };
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed:{
      updateDrawer(){
          return this.$emit('activate-drawer')
      }
  },
  methods: {
    handleScroll() {
      let top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      let num = visualViewport.height-50;
      let el = document.getElementsByClassName('bar')[0];
      let fadeEnd = 50;
      if(top > num && top < num + fadeEnd) el.style.opacity = (top-num)/fadeEnd;
      else if (top >= num+fadeEnd) el.style.opacity = 1;
      else el.style.opacity = 0;
    }
  }
};
</script>

<style>
.bar {
  position: sticky;
  opacity: 0;
  /* top: '-70', */
}
@keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-moz-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-o-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-ms-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}
</style>
