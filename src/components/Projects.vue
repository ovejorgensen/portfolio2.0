<template>
  <v-container class="contain">
    <v-row class="main-row" align="center">
      <v-col v-for="card in cards" :key="card.title" cols="12" lg="4" md="6" sm="12" xs="12">
        <v-card class="mx-auto cards" max-width="400">
          <v-img class="white--text align-end" height="200px" src="../../src/assets/galaga.png">
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0" v-text="card.subtitle"></v-card-subtitle>

          <v-card-text class="text--primary" v-text="card.info"></v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>Try it!</v-btn>

            <v-btn color="orange" text>GitHub</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Projects",
  data: () => ({
    cards: [
      {
        title: "Galaga",
        subtitle: "Retro Arcade Game",
        info: "Arcade game created in JavaScript with p5.js",
        src: "../../src/assets/galaga.png",
        flex: 12
      },
      {
        title: "Galaga2",
        subtitle: "Retro Arcade Game",
        info: "Arcade game created in JavaScript with p5.js",
        src: "../../src/assets/galaga.png",
        flex: 12
      },
      {
        title: "Galaga3",
        subtitle: "Retro Arcade Game",
        info: "Arcade game created in JavaScript with p5.js",
        src: "../../src/assets/galaga.png",
        flex: 12
      },
      {
        title: "Galaga4",
        subtitle: "Retro Arcade Game",
        info: "Arcade game created in JavaScript with p5.js",
        src: "../../src/assets/galaga.png",
        flex: 12
      }
    ]
  })
};
</script>

<style>
.contain {
  position: absolute;
  top: 60px;
  overflow: auto !important;
}
.cards {
  position: absolute;
  text-align: left;
}
</style>