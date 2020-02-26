import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import Vuelidate from 'vuelidate'

import colors from 'vuetify/lib/util/colors'

import FacebookIcon from '@/components/icons/IconFacebook.vue'
import TwitterIcon from '@/components/icons/IconLinkedin.vue'
import LinkedinIcon from '@/components/icons/IconTwitter.vue'

Vue.use(Vuetify)
Vue.use(Vuelidate)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#1a6094',
        secondary: '#22d1ca',
        accent: '#22d1ca',
        success: '#3cd1c2',
        info: '#3cd1c2',
        warning: '#f58223',
        error: '#f83e70',
        background: colors.grey.lighten4
      }
    }
  },
  icons: {
    iconfont: 'md',
    values: {
      facebook: {
        component: FacebookIcon
      },
      twitter: {
        component: TwitterIcon
      },
      linkedin: {
        component: LinkedinIcon
      }
    }
  }
})
