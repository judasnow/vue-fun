'use strict'

/**
 * 相应概念的 init state and mutations
 */

import { GET_TEAM } from '../mutations-types'
import Team from '../../model/team'

const state = new Team()

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
