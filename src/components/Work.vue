<template>
  <div class="work">
    <h1>Work</h1>
    <p>
      I am currently part time in a company called Lupix. My main project is
      working with a company called Windmaster Technologies, where I am one of
      two developers in charge of integrating a system for monitoring wind flows
      in turbine parks on Amazon Web Services.
      <br /><br />
      Check out the <a href="www.lupix.no">Lupix</a> homepage for more information.
    </p>
    <v-container style="margin-top:25px">
      <v-row class="main-row" align="center">
        <v-col cols="6">
          <v-card class="mx-auto cards" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="../../src/assets/wisdom.png"
          >
            <v-card-title class="ctitle" >The WISDOM Project</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">Windmaster Technologies</v-card-subtitle>
          <v-card-text class="text--primary">My current project</v-card-text>
        </v-card>
        </v-col>
        <v-col style="text-align: left" cols="6">
          The WISDOM project is by far the biggest project I have had the pleasure of being a part of. 
          Me and one other developer were hired with the intention of integrating this project to the cloud, and to
          create a suitable web-interface for visualization and analysis. With little to no prior knowledge of operating cloud systems
          we spent the course of a few months designing the architecture and developing a system on Amazon Web Services, both learning and integrating services such as AWS Lambda,
          Kinesis, DynamoDB, API Gateway, and Amplify.<br/><br/>
          We also chose Vue as front-end framework, having just a tiny bit of knowledge from before. After several months now of using Vue it has become one of my favorite frameworks. 
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Work",
};
</script>

<style scoped>
.cards{
  text-align: left;
}
.work {
  text-align: center;
}
.work h1 {
  margin: 100px 0 50px 0;
}
.work p {
  display: inline-block;
  width: 50%;
}
</style>
