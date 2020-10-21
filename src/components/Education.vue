<template>
  <div class="edu">
    <h1>Education</h1>
    <v-container>
      <v-row align="center" justify="center">
        <v-col xl="6" lg="6" md="6" sm="12" xs="12" cols="12">
          <v-timeline dense class="timeline">
            <v-timeline-item v-for="(el, id) in content" :key="id" large>
              <template v-slot:icon>
                <v-avatar>
                  <img :src="el.imgLink" />
                </v-avatar>
              </template>
              <v-card class="elevation-2">
                <v-card-title class="headline inner">
                  {{el.headline}}
                </v-card-title>
                <v-card-subtitle>
                  {{el.date}}<br />{{el.subheader}}
                </v-card-subtitle>
                <!-- <v-card-text>{{el.description}}</v-card-text> -->
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
        <v-col xl="6" lg="6" md="6" sm="12" xs="12" cols="12" justify="center">
          <img class="image" src="../../src/assets/worldmap.png" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      content: [
      {
        imgLink: "https://media-exp1.licdn.com/dms/image/C510BAQHPFaPb9Rq_jg/company-logo_200_200/0?e=2159024400&v=beta&t=njxG6nk2oK5G17dOBcIx7zKns-T-odt7NtvEXTHhFgc",
        headline: "Data Science - Master's Degree",
        subheader: "University of Stavanger",
        date: "2020 - present",
        description: "jdsiaojdisoajdisoadjioadjiosajdiosadjioasdjisoadjiosadjiosadjsioadjasio"
      },
      {
        imgLink: "https://media-exp1.licdn.com/dms/image/C4D0BAQExmiYh8biSLA/company-logo_200_200/0?e=2159024400&v=beta&t=bIgBvfuSHYzWISeqUd56eOnGWdr_OZP2m6bPtvM75gw",
        headline: "Exchange Semester",
        subheader: "Griffith University - Queensland, Australia",
        date: "2019",
        description: "jdsiaojdisoajdisoadjioadjiosajdiosadjioasdjisoadjiosadjiosadjsioadjasio"
      },
      {
        imgLink: "https://media-exp1.licdn.com/dms/image/C510BAQHPFaPb9Rq_jg/company-logo_200_200/0?e=2159024400&v=beta&t=njxG6nk2oK5G17dOBcIx7zKns-T-odt7NtvEXTHhFgc",
        headline: "Computer Science - Bachelor's Degree",
        subheader: "University of Stavanger",
        date: "2017 - 2020",
        description: "jdsiaojdisoajdisoadjioadjiosajdiosadjioasdjisoadjiosadjiosadjsioadjasio"
      }
      ],
    };
  },
};
</script>

<style scoped>
.edu {
  margin-top: 50px;
  text-align: center;
}
/* .timeline {
  float: left;
} */
.edu h1 {
  margin: 100px 0 50px 0;
}
.inner{
  display: inline-block;
}
.image{
  width: 90%;
  height: auto;
  /* display: inline-block; */
  /* position: relative; */
}
</style>
