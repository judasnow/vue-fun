'use strict'

/**
 * 应该和各种组件相对应
 * 因为 store 对象的作用就是全局的保存组件状态
 * 在这个模块中需要定义 mutation 以及 初始状态
 */


import {
  GET_ACTIVITIES,
  GET_ACTIVITY
} from '../mutations-types'


const state = {
  // FIXME 这里能定义成一个类型应该更好
  activities: []
}


// 同步修改 state
const mutations = {
  [GET_ACTIVITIES](state, newActivities) {

  },
  [GET_ACTIVITY](state) {

  }
}

export default {
  state,
  mutations
}
