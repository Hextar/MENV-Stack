<template>
  <div class="projects">
    <h1 class="title grey--text">My Projects</h1>

    <v-container class="my-2 mx-0 px-0" fluid>

      <v-expansion-panels>
        <v-expansion-panel
          v-for="(project, i) in myProjects" :key="i"
        >
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-text class="ma-0 pa-0">
                <p>Assigned to <span class="font-weight-bold">{{ project.person }}</span></p>
                <p>Due by <span class="font-weight-bold">{{ project.due }}</span></p>
                <p>{{ project.content }}</p>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

    </v-container>

  </div>
</template>

<script>

export default {
  name: 'Projects',

  components: {},

  data () {
    return {
      projects: [
        {
          title: 'Design a new website',
          person: 'Hextar',
          due: '1st Jan 2019',
          status: 'ongoing',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          title: 'Code up the homepage',
          person: 'Chun Li',
          due: '10th Jan 2019',
          status: 'complete',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          title: 'Design video thumbnails',
          person: 'Ryu',
          due: '20th Dec 2018',
          status: 'complete',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          title: 'Create a community forum',
          person: 'Hextar',
          due: '20th Oct 2018',
          status: 'overdue',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        }
      ]
    }
  },
  computed: {
    myProjects () {
      return this.projects.filter(project => project.person === 'Hextar')
    }
  }
}
</script>
