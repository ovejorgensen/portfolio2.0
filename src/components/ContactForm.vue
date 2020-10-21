<template>
  <v-container class="contact">
      <h3><a href="mailto:ove.kristian.jorgensen@gmail.com">ove.kristian.jorgensen@gmail.com</a></h3>
      <h3 style="padding:10px">+47 91158933</h3>
    <!-- <v-row justify="center">
      <v-col cols="6">
        <v-form ref="form" lazy-validation dark>
          <v-text-field :counter="10" label="Name" required></v-text-field>

          <v-text-field label="E-mail" required></v-text-field>

          <v-btn color="success" class="mr-4">
            Send
          </v-btn>
        </v-form>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style scoped>
.contact{
    padding-bottom: 40px;
}
</style>

