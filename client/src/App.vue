<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background}">
    <Navbar :isMobile="isMobile" />
    <v-content class="ma-5">
      <router-view/>
    </v-content>
    <Popup />
    <Footer :isMobile="isMobile"/>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Popup from './components/Popup'

export default {
  name: 'App',

  components: {
    Navbar,
    Footer,
    Popup
  },

  data: () => ({
    theme: 'light',
    isMobile: false
  }),

  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
    this.getPosts()
  },

  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },

  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 600
    },
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    },
    async addPost () {
      await PostsService.addPost({
        title: this.title,
        description: this.description
      })
      this.$router.push({ name: 'Posts' })
    },
    async updatePost () {
      await PostsService.updatePost({
        id: this.$route.params.id,
        title: this.title,
        description: this.description
      })
      this.$router.push({ name: 'Posts' })
    },
    async deletePost (id) {
      await PostsService.deletePost(id)
      this.getPosts()
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>

<style lang="scss">
  // Import the Vuetify styles somewhere global
  /*@import '../../node_modules/vuetify/src/styles/styles';*/

  // import them main project style
  @import 'assets/main';
</style>
