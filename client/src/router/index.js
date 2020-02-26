import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      title: 'Dashboard',
      metaTags: [
        {
          name: 'description',
          content: 'The dashboard page.'
        },
        {
          property: 'og:description',
          content: 'The dashboard page.'
        }
      ]
    }
  },
  {
    path: '/projects',
    name: 'My Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue'),
    meta: {
      title: 'My Projects',
      metaTags: [
        {
          name: 'description',
          content: 'The projects page.'
        },
        {
          property: 'og:description',
          content: 'The projects page.'
        }
      ]
    }
  },
  {
    path: '/team',
    name: 'Team',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Team.vue'),
    meta: {
      title: 'Team',
      metaTags: [
        {
          name: 'description',
          content: 'The team page.'
        },
        {
          property: 'og:description',
          content: 'The team page.'
        }
      ]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
