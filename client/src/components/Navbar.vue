<template>
  <nav>
    <v-app-bar
      app
      flat
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">MY</span>
        <span>TODO</span>
        <span class="font-weight-black">APP</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            text
            color="grey"
            v-on="on"
          >
            <span>MENU</span>
            <v-icon right>expand_more</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, i) in links" :key="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn color="grey" text>
        <span>Sign Out</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      app
      class="primary"
      dark
      v-model="drawer"
    >
      <v-col align="center" class="mt-5">
        <v-avatar size="100">
          <img class="text-center" src="/avatar-1.png" />
        </v-avatar>
        <p class="text-center white--text title mt-1">Hextar</p>
      </v-col>

      <v-divider></v-divider>
      <v-list>
        <v-list-item
          link
          v-for="link in links" :key="link.id"
          router :to="link.route"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',

  components: {},

  props: {
    isMobile: Boolean
  },

  data () {
    return {
      drawer: false,
      links: [
        { id: '1', title: 'Dashboard', icon: 'dashboard', route: '/' },
        { id: '2', title: 'My Projects', icon: 'file_copy', route: '/projects' },
        { id: '3', title: 'Team', icon: 'people', route: '/team' }
      ]
    }
  }
}
</script>
