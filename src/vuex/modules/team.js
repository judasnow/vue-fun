'use strict'

/**
 * 相应概念的 init state and mutations
 */

import {
  GET_TEAM
} from '../mutations-types'

const state = {
  name: 'defaule name',
  desc: 'default desc'
}

const mutations = {
  [GET_TEAM] (state, team) {
    state.name = team.name
    state.desc = team.desc
  }
}

export default {
  state,
  mutations
}
