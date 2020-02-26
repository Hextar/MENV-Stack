<template>
  <v-footer
    light
    padless
    inset
    :app="!isMobile"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="grey lighten-5">
        <v-row no-gutters >
          <v-col sm="5" md="4" v-if="!isMobile">
            <strong class="subtitle-1 grey--text text--lighten-1 font-weight-light">
              Get connected with us on social networks!
            </strong>
          </v-col>
          <v-col cols="10" sm="5" md="4">
            <v-row no-gutters>
              <v-col
                class="d-flex justify-center align-center align-md-end"
                v-for="icon in icons" :key="icon.id"
              >
                <v-btn
                  class="mx-4"
                  dark
                  icon
                  router :to="{ name: icon.name, path: icon.path}" target="_blank"
                >
                  <v-icon size="24px">{{ icon.icon }}</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text class="py-2 grey lighten-3 text-center text-uppercase">
        &copy; {{ new Date().getFullYear() }} —
        <span class="font-weight-light">MY</span>
        <span>TODO</span>
        <span class="font-weight-black">APP</span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>

export default {
  name: 'Footer',

  components: {},

  props: {
    isMobile: Boolean
  },

  data: () => ({
    icons: [
      {
        id: 0,
        name: 'facebook',
        icon: '$facebook',
        color: '#ff0000',
        path: 'https://facebook.com'
      },
      {
        id: 1,
        name: 'twitter',
        icon: '$twitter',
        color: '#bdbdbd',
        path: 'https://twitter.com'
      },
      {
        id: 3,
        name: 'linkedin',
        icon: '$linkedin',
        color: '#bdbdbd',
        path: 'https://linkedin.com'
      }
    ]
  })
}
</script>
