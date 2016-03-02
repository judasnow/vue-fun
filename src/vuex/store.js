/**
 * assemble modules and export the store
 */

import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'

import activities from './modules/activities'
import team from './modules/team'

Vue.use(Vuex)
Vue.config.debug = true


export default new Vuex.Store({
  strict: true,
  modules: {
    team,
    activities
  }
})
