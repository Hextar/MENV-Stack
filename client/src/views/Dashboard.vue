<template>
  <div class="dashboard">
    <h1 class="title grey--text">Dashboard</h1>

    <v-container class="my-4 mx-0 px-0" fluid>

      <v-row no-gutters class="mb-3 pa-3 hidden-sm-and-down">
        <v-col cols="12" md="6">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
                <v-icon left small>folder</v-icon>
                <span class="caption text-capitalize">Title</span>
              </v-btn>
            </template>
            <span>Sort by title</span>
          </v-tooltip>
        </v-col>
        <v-col cols="12" md="2">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn slot="activator" small text color="grey" @click="sortBy('person')" v-on="on">
                <v-icon left small>person</v-icon>
                <span class="caption text-capitalize">Assigned to</span>
              </v-btn>
            </template>
            <span>Sort by person</span>
          </v-tooltip>
        </v-col>
        <v-col cols="12" md="2">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn slot="activator" small text color="grey" @click="sortBy('due')" v-on="on">
                <v-icon left small>calendar_today</v-icon>
                <span class="caption text-capitalize">Due by</span>
              </v-btn>
            </template>
            <span>Sort by due by date</span>
          </v-tooltip>
        </v-col>
        <v-col cols="12" md="2">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn slot="activator" small text color="grey" @click="sortBy('status')" v-on="on">
                <v-icon left small>access_time</v-icon>
                <span class="caption text-capitalize">Status</span>
              </v-btn>
            </template>
            <span>Sort by status</span>
          </v-tooltip>
        </v-col>
      </v-row>

      <v-card
        tile
        v-for="project in projects" :key="project.id"
      >
        <v-row no-gutters :class="`ma-0 pa-3 project ${project.status}`">
          <v-col cols="12" md="6" justify="start">
            <div class="pa-3">
              {{ project.title }}
            </div>
          </v-col>
          <v-col cols="6" md="2">
            <div class="pa-3">
              {{ project.person }}
            </div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="pa-3">
              {{ project.due }}
            </div>
          </v-col>
          <v-col cols="12" sm="4" md="2" class="ma-2 ma-md-0 d-flex justify-start justify-md-end align-center">
            <v-chip small :class="`${project.status} white--text`">
              {{ project.status }}
            </v-chip>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  components: {},
  data () {
    return {
      projects: [
        {
          id: 0,
          title: 'Design a new website',
          person: 'The Net Ninja',
          due: '1st Jan 2019',
          status: 'ongoing',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          id: 1,
          title: 'Code up the homepage',
          person: 'Chun Li',
          due: '10th Jan 2019',
          status: 'complete',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          id: 2,
          title: 'Design video thumbnails',
          person: 'Ryu',
          due: '20th Dec 2018',
          status: 'complete',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          id: 3,
          title: 'Create a community forum',
          person: 'Gouken',
          due: '20th Oct 2018',
          status: 'overdue',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        }
      ]
    }
  },
  methods: {
    sortBy (attr) {
      this.projects.sort((a, b) => a[attr] < b[attr] ? -1 : 1)
    }
  }
}
</script>

<style>
  .project.overdue {
    border-left: 6px solid rgba(248, 62, 112, .75);
  }
  .project.ongoing {
    border-left: 6px solid rgba(245, 130, 35, .75);
  }
  .project.complete {
    border-left: 6px solid rgba(26, 96, 148, .75);
  }
  .v-chip.overdue {
    background-color: rgba(248, 62, 112, .75) !important;
  }
  .v-chip.ongoing {
    background-color: rgba(245, 130, 35, .75) !important;
  }
  .v-chip.complete {
    background-color: rgba(26, 96, 148, .75) !important;
  }
</style>

<!--
<style lang="scss">
  .project {
    .overdue {
      border-left: 6px solid red;
    }
    .ongoing {
      border-left: 6px solid yellow;
    }
    .complete {
      border-left: 6px solid green;
    }
  }
</style>
-->
