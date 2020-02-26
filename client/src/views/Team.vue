<template>
  <div class="team">
    <h1 class="title grey--text">Team</h1>

    <v-container class="my-2 mx-0 px-0" fluid>

      <v-row>
        <v-col
          cols="12" sm="6" md="4" lg="3"
          v-for="person in team" :key="person.id"
        >
          <v-card flat class="ma-0 pa-2 text-center">
            <v-responsive class="pt-4">
              <v-avatar size="96">
                <img :src="person.avatar" :alt="person.name" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle-1">{{ person.name }}</div>
              <div class="subtitle-2">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="accent">
                <v-icon small left>message</v-icon>
                <span>message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>

export default {
  name: 'Team',

  components: {},

  data () {
    return {
      team: [
        { id: 0, name: 'Hextar', role: 'Web developer', avatar: '/avatar-1.png' },
        { id: 1, name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
        { id: 2, name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
        { id: 3, name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
        { id: 4, name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png' }
      ]
    }
  }
}
</script>
