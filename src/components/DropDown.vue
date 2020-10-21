<template>
    <v-navigation-drawer v-model="active" temporary absolute id="drawer">
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
          <v-list-item v-for="(item, i) in content" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <!-- <v-list-item-title v-text="item.text" @click="redirect(item.text)"></v-list-item-title> -->
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: "Toolbar",
  props: {
    active: Boolean,
    page: Number
  },
  data() {
    return {
      drawer: null,
      content: [
        { icon: "mdi-account", name: "About", scroll: ".about"},
        { icon: "mdi-check-circle", name: "Projects", scroll: ".projects"},
        { icon: "mdi-folder", name: "Work", scroll: ".work" },
        { icon: "mdi-school", name: "Education", scroll: ".edu" },
        { icon: "mdi-email", name: "Contact", scroll: ".contact" },
      ],
    };
  },
  methods: {
    // redirect(here) {
    //   if (this.drawer) this.drawer=!this.drawer;
    //   this.$emit('toggle', here)
    // }
  }
};
</script>

<style>
#drawer {
  z-index: 110;
  position: absolute;
  height: 600px;
}
</style>