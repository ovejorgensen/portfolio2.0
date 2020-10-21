<template>
    <v-navigation-drawer v-model="active" dark temporary absolute id="drawer">
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
          <v-list-item v-for="(item, i) in content" :key="i" @transitionend="updateDrawer(true)" @click="updateDrawer()" v-scroll-to="item.scroll">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
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
  destroyed(){
    this.$emit('activate-drawer')
  },
  computed:{
      updateDrawer(transition=false){
        if(transition && this.active) return
        return this.$emit('activate-drawer')
      }
  },
};
</script>

<style scoped>
#drawer {
  position: fixed;
}
</style>