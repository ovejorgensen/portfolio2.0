<template>
  <div class="about">
    <h1>About</h1>
    <v-container>
      <v-row align="center" justify="center">
        <v-col lg="3" md="3" sm="12" xs="12" cols="12">
          <v-list-item-avatar size="200">
            <v-img src="../../src/assets/ove.jpg"> </v-img>
          </v-list-item-avatar>
        </v-col>
        <!-- <v-col cols="1"></v-col> -->
        <v-col xl="6" lg="6" md="9" sm="9" xs="12" cols="12">
          <p>
            Hi, my name is Ove Jørgensen. I am currently enrolled in a Master's
            degree at the University of Stavanger where I'm studying Data
            Science. I am also working part time as a software engineer at a
            small company.
            <br />
            <br />
            I created this website as a way to show of some of my work, but also
            as a playground and a way for me to further improve my
            web-programming skills. The front-end has been created using Vue and
            Vuetify, and it is hosted on AWS using AWS Amplify.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  text-align: center;
}
.about h1 {
  margin: 100px 0 0 0;
}
.about p {
  /* padding: 0 50px 0 0; */
}
</style>
