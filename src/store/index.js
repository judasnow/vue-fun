/**
 * 在这里初始化 Vue.Store
 */

import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import { todosMutations, todosInitialState } from './modules/todos'

Vue.use(Vuex)
Vue.config.debug = true

export default new Vuex.Store({
  state: {
    todos: todosInitialState
  },
  actions,
  getters: [],
  mutations: [todosMutations],
  strict: true
})
