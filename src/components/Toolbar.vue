<template>
  <div>
    <v-toolbar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items sm="4" class="hidden-sm-and-down">
        <button
          class="toolBtns"
          v-for="(item, i) in items "
          :key="i"
          @click="redirect(item.text)"
        >{{ item.text }}</button>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" temporary absolute id="drawer">
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
        <v-list-item-group v-model="page" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text" @click="redirect(item.text)"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  props: {
    page: Number
  },
  data() {
    return {
      drawer: null,
      items: [
        { text: "Home", icon: "mdi-star" },
        { text: "About", icon: "mdi-account" },
        { text: "Projects", icon: "mdi-check-circle" },
        { text: "Work", icon: "mdi-folder" },
        { text: "Education", icon: "mdi-school" },
        { text: "Contact Me", icon: "mdi-email" }
      ]
    };
  },
  methods: {
    redirect(here) {
      if (this.drawer) this.drawer=!this.drawer;
      this.$emit('toggle', here)
    }
  }
};
</script>

<style>
.v-toolbar {
  /* box-shadow: none !important; */
  /* position: absolute; */
  overflow: hidden;
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 100;
}
.toolBtns {
  margin: 0 10px 0 10px;
}
#drawer {
  z-index: 110;
  position: absolute;
}
</style>