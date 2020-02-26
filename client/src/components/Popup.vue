<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn
        fab large fixed bottom right
        v-on="on"
        class="accent"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a new Project</h2>
      </v-card-title>
      <v-card-text>
        <form>
          <v-text-field
            v-model="title"
            prepend-icon="folder"
            :error-messages="tilteErrors"
            :counter="30"
            label="Title"
            required
            @input="$v.title.$touch()"
            @blur="$v.title.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="person"
            prepend-icon="person"
            :error-messages="personErrors"
            :counter="10"
            label="Assigned To"
            required
            @input="$v.person.$touch()"
            @blur="$v.person.$touch()"
          ></v-text-field>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="due"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="due"
                prepend-icon="calendar_today"
                :error-messages="dueErrors"
                label="Due By"
                required
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="due"
              class="mt-3"
              :min="nowDate"
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(due)">OK</v-btn>
            </v-date-picker>
          </v-menu>
          <v-textarea
            v-model="content"
            prepend-icon="comment"
            :error-messages="contentErrors"
            :counter="500"
            rows="1"
            label="Content"
            required
            @input="$v.content.$touch()"
            @blur="$v.content.$touch()"
          ></v-textarea>
          <v-select
            v-model="status"
            prepend-icon="access_time"
            :items="status_available"
            :error-messages="statusErrors"
            label="Item"
            required
            @change="$v.status.$touch()"
            @blur="$v.status.$touch()"
          ></v-select>
          <v-btn
            text
            class="mt-3 mx-3 accent"
            @click="submit"
            :loading="loading"
            :disabled="loading"
          >
            submit
          </v-btn>
          <v-btn
            text
            class="mt-3 mx-3"
            @click="clear"
          >
            clear
          </v-btn>
        </form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minValue, maxLength } from 'vuelidate/lib/validators'
import db from '@/fb'
import moment from 'moment'

export default {
  mixins: [validationMixin],

  name: 'Popup',

  components: {},

  props: {
    isMobile: Boolean
  },

  validations: {
    title: { required, maxLength: maxLength(30) },
    person: { required, maxLength: maxLength(10) },
    due: {
      required,
      minValue: minValue(moment(new Date()).startOf('day'))
    },
    content: { required, maxLength: maxLength(500) },
    status: { required }
  },

  data () {
    return {
      loading: false,
      nowDate: new Date().toISOString().slice(0, 10),
      menu: false,
      title: '',
      person: '',
      due: '',
      content: '',
      status: '',
      status_available: [
        'ongoing',
        'overdue',
        'complete'
      ]
    }
  },

  computed: {
    tilteErrors () {
      const errors = []
      if (!this.$v.title.$dirty) return errors
      !this.$v.title.maxLength && errors.push('Title must be at most 30 characters long')
      !this.$v.title.required && errors.push('Title is required.')
      return errors
    },
    personErrors () {
      const errors = []
      if (!this.$v.person.$dirty) return errors
      !this.$v.person.maxLength && errors.push('Person must be at most 10 characters long')
      !this.$v.person.required && errors.push('Person is required')
      return errors
    },
    dueErrors () {
      const errors = []
      if (!this.$v.due.$dirty) return errors
      // !this.$v.due.minValue && errors.push('Due date must be in the future')
      !this.$v.due.required && errors.push('Due is required')
      return errors
    },
    contentErrors () {
      const errors = []
      if (!this.$v.content.$dirty) return errors
      !this.$v.content.maxLength && errors.push('Content must be at most 500 characters long')
      !this.$v.content.required && errors.push('Content is required')
      return errors
    },
    statusErrors () {
      const errors = []
      if (!this.$v.status.$dirty) return errors
      !this.$v.status.required && errors.push('Status is required')
      return errors
    }
  },

  methods: {
    currentDate () {
      return moment(new Date()).startOf('day')
    },
    submit () {
      this.$v.$touch()
      if (!this.$v.error) {
        this.loading = true
        console.log('=========>', this.due)
        db.collection('projects').add({
          title: this.title,
          person: this.person,
          due: new Date(this.due).getTime(),
          content: this.content,
          status: this.status
        })
          .then(success => {
            this.loading = false
            console.log('added project to db')
          })
      }
    },
    clear () {
      this.$v.$reset()
      this.title = ''
      this.person = ''
      this.due = null
      this.content = ''
      this.status = null
    }
  }
}
</script>
