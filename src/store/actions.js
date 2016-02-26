import todoApi from '../api/todo'
import * as types from './mutations-types'


export const getTodosList = function(state, pageNum=1) {
	state.dispatch(types.TODOS_GET_LIST, pageNum)
}
