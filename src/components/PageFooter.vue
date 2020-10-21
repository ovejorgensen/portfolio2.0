<template>
  <v-footer dark padless class="footah">
    <v-card flat tile class="lighten-1 white--text text-center foot-inner">
      <v-card-text>
        <v-btn
          v-for="(icon, id) in icons"
          :key="id"
          target="_blank"
          class="mx-4 white--text"
          :href="icon.link"
          icon
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        © {{ new Date().getFullYear() }} — <strong>Ove Jørgensen</strong>, All
        Rights Reserved
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    name: "PageFooter",
    data: () => ({
      icons: [
      {
        icon: 'mdi-github',
        link: 'https://www.github.com/ovejorgensen'
      },
      {
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/ovejorgensen/',
      }],
    }),
}
</script>

<style>
.footah {
  margin-top: 100px;
}
.foot-inner {
  width: 100%;
}
</style>
