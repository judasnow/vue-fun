/**
 * 在这里初始化 Vue.Store
 * 一个 store 对象应该是和一个 app 相对应的
 */

import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'

Vue.use(Vuex)
Vue.config.debug = true

export default new Vuex.Store({
  strict: true,
  state: {
    todos: todosInitialState
  },
  actions,
  getters: [],

  mutations: [todosMutations]
})
