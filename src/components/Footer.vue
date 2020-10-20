<template>
  <v-footer dark padless class="footah">
    <v-card flat tile class="lighten-1 white--text text-center foot-inner">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
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
      <!-- <v-card-text>
        <v-btn
          class="mx-4 white--text"
          target="_blank"
          href=""
          icon
        >
          <v-icon size="24px">
            <mdi-github></mdi-github>
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-4 white--text"
          target="_blank"
          href=
          icon
        >
          <v-icon size="24px"> </v-icon>
        </v-btn>
      </v-card-text> -->

      <!-- <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text> -->

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
    name: "Footer",
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
