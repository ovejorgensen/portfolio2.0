<template>
  <v-container class="contain projects">
    <v-row  class="head" justify="center">
      <h1>My Projects</h1>
    </v-row>
    <v-row class="main-row" justify="center" align="center">
      <v-col
        v-for="card in cards"
        :key="card.title"
        cols="12"
        xl="3"
        lg="4"
        md="6"
        sm="6"
        xs="12">
      <v-card :href="card.route" target="_blank" hover height="100%">
        <v-img
        height="200px"
        v-bind:src="require('../../src/assets/' + card.src)">
        </v-img>

        <v-divider />

        <v-card-text>
          <h3 v-html="card.title" class="mb-2"></h3>
          <v-card-subtitle
            class="pb-0"
            style="padding-top:0"
            v-text="card.subtitle">
          </v-card-subtitle>
        </v-card-text>

        <v-card-text style="height:60px" class="text--primary" v-text="card.info"></v-card-text>

        <v-card-actions>
          <v-btn color="orange" :href="card.github" target="_blank" text>GitHub</v-btn>
          <a class="linker" v-if="card.route" :href="card.route" target="_blank" text>{{card.route.split("https://")[1]}}<v-icon class="linker-icon" small>mdi-open-in-new</v-icon></a>
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
        github: "https://github.com/ovejorgensen/bachelor_website",
        tags: ["JavaScript", "Node.js", "Express.js", "Three.js"]
      },
      {
        title: "Galaga",
        subtitle: "Retro Arcade Game",
        info: "Arcade game created in JavaScript with p5.js",
        open: "Try it!",
        src: "galaga.png",
        route: "https://galaga.ovekj.no",
        github: "https://github.com/ovejorgensen/galaga",
        tags: ["JavaScript", "p5.js"]
      },
            {
        title: "My Old Portfolio",
        subtitle: "Website",
        info: "One of my first websites, made using jQuery, Bootstrap and Less. Hosted on GitHub Pages.",
        open: "Check it out",
        route: "https://ovejorgensen.github.io",
        src: "old.png",
        link: "ovejorgensen.github.io",
        github: "https://github.com/ovejorgensen/ovejorgensen.github.io",
        tags: ["jQuery", "Bootstrap", "Less"]
      },
    ]
  })
};
</script>

<style scoped>
.linker{
  text-decoration: none;
  display: flex;
  justify-content: right;
}
i.linker-icon{
  color: #1976d2;
}
.chip-class{
  margin: 0 5px 10px 0;
}
.contain{
    /* width: 100vw; */
    margin-top: 50px;
}
.head {
  margin: 100px 0 50px 0;  
}
.cards {
  text-align: left;
}
</style>
