<template>
  <div style="position:relative, width:100%, height:100%">
    <v-app-bar dark></v-app-bar>
    <v-app-bar fixed dark class="bar">
      <v-toolbar-title class="bar-inner">Ove Jørgensen</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        v-for="(el, id) in content"
        :key="id"
        class="hidden-sm-and-down bar-inner"
      >
        <v-btn v-scroll-to="el.scroll" text>
          <span style="margin-right:10px">
            <v-icon color="grey">{{ el.icon }} </v-icon>
          </span>
          {{ el.name }}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-md-and-up bar-inner">
        <v-app-bar-nav-icon @click.stop="updateDrawer()"></v-app-bar-nav-icon>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" dark temporary absolute id="drawer">
      <v-list>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img src="../../src/assets/ove.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Ove Jørgensen</v-list-item-title>
            <v-list-item-subtitle>mail@ovekj.no</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item
          v-for="(item, i) in content"
          :key="i"
          @click="updateDrawer()"
          v-scroll-to="item.scroll"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
      drawer: false,
      content: [
        { icon: "mdi-account", name: "About", scroll: ".about" },
        { icon: "mdi-book-check", name: "Projects", scroll: ".projects" },
        { icon: "mdi-notebook-edit", name: "Work", scroll: ".work" },
        { icon: "mdi-check-circle", name: "Achievements", scroll: ".achievements" },
        { icon: "mdi-school", name: "Education", scroll: ".edu" },
        { icon: "mdi-email", name: "Contact", scroll: ".footah" },
      ],
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    updateDrawer() {
      this.drawer = !this.drawer;
    },
    handleScroll() {
      //   let top =
      //     (document.documentElement && document.documentElement.scrollTop) ||
      //     document.body.scrollTop;
      //   let num = visualViewport.height;
      //   let el = document.getElementsByClassName("bar-inner");
      //   let fadeEnd = 50;
      //   el.forEach((inner) => {
      //     if (top > num && top < num + fadeEnd) inner.style.opacity = (top - num) / fadeEnd;
      //     else if (top >= num + fadeEnd) inner.style.opacity = 1;
      //     else inner.style.opacity = 0;
      //   });
      //   let bar = document.getElementsByClassName("bar")[0];
      //   if (top > num + fadeEnd) bar.style.position = "sticky";
      //   else bar.style.position = "fixed";
      let top =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
      let num = visualViewport.height;
      let el = document.getElementsByClassName("bar")[0];
      let fadeEnd = 50;
      //   if(top > num && top < num + fadeEnd) el.style.opacity = (top-num)/fadeEnd;
      if (top >= num) el.style.opacity = 1;
      else el.style.opacity = 0;

      let barInner = document.getElementsByClassName("bar-inner");
      barInner.forEach((inner) => {
        if (top > num && top < num + fadeEnd)
          inner.style.opacity = (top - num) / fadeEnd;
        else if (top >= num + fadeEnd) inner.style.opacity = 1;
        else inner.style.opacity = 0;
      });
    },
  },
};
</script>

<style>
#drawer {
  position: fixed;
  width: 100%;
  height: 100%;
}
.bar-inner {
  /* opacity: 0; */
}
.bar {
  /* position: sticky; */
  opacity: 0;
  /* top: '-70', */
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
