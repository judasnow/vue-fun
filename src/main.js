require('weui/dist/style/weui.css')
require('./assets/style/base.css')

import Vue from 'vue'
import VueRouter from 'vue-router'

// pages
import ActivityPage from './page/activity.vue'
import ActivitiesPage from './page/activities.vue'
import TeamPage from './page/team.vue'

import store from './vuex/store'


Vue.use(VueRouter)

var App = Vue.extend({
  store,
  components: {

  }
})

var router = new VueRouter()
router.map({
  '/activities': {
    component: ActivitiesPage
  },
  '/activity': {
    component: ActivityPage
  },
  '/team': {
    component: TeamPage
  }
})
router.start(App, '#app')
