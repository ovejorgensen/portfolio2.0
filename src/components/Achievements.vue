<template>
  <div class="achievements">
    <h1>Achievements</h1>
    <v-row style="margin-top:25px" justify="center" align="center">
      <v-col xl="6" lg="6" md="9" sm="9" xs="12" cols="12">
        Capgemini hosted a hackathon in october 2020 that me and four of my
        friends ended up winning. The competition tasked us with "fixing" a
        website where we had to do a series of minor assignments to restore the site. After
        completing the tasks we spent the remaining part of the competition
        adding a personal flair to the website, redesigning several parts,
        creating some animations, as well as creating a logo. The entire
        competition was done using React, and although just one person on our
        team had worked with react prior to the competition we still managed to win.
      </v-col>
      <v-col
        style="max-width:400px"
        xl="6"
        lg="6"
        md="9"
        sm="9"
        xs="12"
        cols="12"
      >
        <v-card
          hover
          height="100%"
          xl="6"
          lg="6"
          md="9"
          sm="9"
          xs="12"
          cols="12"
        >
          <v-img height="200px" src="../../src/assets/capathon.png"> </v-img>
            <!-- <v-carousel>
                <v-carousel-item
                v-for="(data,i) in data"
                :key="i"
                v-bind:src="require('../../src/assets/' + data.img)"
                
                ></v-carousel-item>
            </v-carousel>
          <v-divider /> -->

          <v-card-text>
            <h3 class="mb-2">CapAthon</h3>
            <v-card-subtitle class="pb-0" style="padding-top:0">
              Capgemini
            </v-card-subtitle>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Achievements",
  data(){
      return {
          data: [
              {img: "capathon.png"},
              {img: "capathon.jpg"}
          ]
      }
  }
};
</script>

<style scoped>
.achievements {
  text-align: center;
}
.achievements h1 {
  margin: 100px 0 50px 0;
}
</style>
