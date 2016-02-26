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
    mutations: [todosMutations],
    strict: true
})
