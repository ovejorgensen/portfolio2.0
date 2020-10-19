<template>
  <v-container class="contain">
    <v-row  class="head" justify="center">
      <h1>My Projects</h1>
    </v-row>
    <v-row class="main-row" align="center">
      <v-col
        v-for="card in cards"
        :key="card.title"
        cols="12"
        lg="4"
        md="6"
        sm="12"
        xs="12"
      >
        <v-card class="mx-auto cards" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            v-bind:src="require('../../src/assets/' + card.src)"
          >
            <v-card-title class="ctitle" v-text="card.title"></v-card-title>
          </v-img>

          <v-card-subtitle
            class="pb-0"
            v-text="card.subtitle"
          ></v-card-subtitle>

          <v-card-text class="text--primary" v-text="card.info"></v-card-text>

          <v-card-actions>
            <!-- <v-btn color="orange" v-text="card.open"></v-btn> -->

            <v-btn color="orange" :href="card.github" target="_blank" text>GitHub</v-btn>
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
        title: "Autonomomus Drone Inspection",
        subtitle: "Data Presentation and Analysis",
        info: "Bachelor's Project presented for a degree in computer science",
        open: "More info",
        src: "bach.png",
        github: "https://github.com/ovejorgensen/bachelor_website"
      },
      {
        title: "Galaga",
        subtitle: "Retro Arcade Game",
        info: "Arcade game created in JavaScript with p5.js",
        open: "Try it!",
        src: "galaga.png",
        github: "https://github.com/ovejorgensen/galaga"
      },
            {
        title: "My Old Portfolio",
        subtitle: "Website",
        info: "One of my first websites, made using jQuery, Bootstrap and Less. Hosted on GitHub Pages.",
        open: "Check it out",
        src: "old.png",
        link: "ovejorgensen.github.io",
        github: "https://github.com/ovejorgensen/ovejorgensen.github.io"
      },
    ]
  })
};
</script>

<style scoped>
.contain{
    width: 100vw;
    margin-top: 50px;
}
.head {
  margin: 100px 0 50px 0;  
}
.ctitle {
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
}
.cards {
  text-align: left;
}
</style>
