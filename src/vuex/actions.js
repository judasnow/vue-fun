'use strict'

/**
 * 统一定义系统中所有的 action
 * 这里是 api 和 mutation 连接的地方
 */


import teamApi from '../api/team'
import activityApi from '../api/activity'
import * as types from './mutations-types'


export const getTeam = function({ dispatch }, id) {
  teamApi.getTeam(
    id=1,
  function(team) {
    dispatch(types.GET_TEAM, team)
  }, function() {
    console.dir (fail)
  })
}
