import todoApi from '../api/todo'
import * as types from './mutations-types'


// action 为啥不写到 module 中？
// 因为 action 相对来说是外部接口？
export const getTodosList = (store) => {
	store.dispatch(types.TODO_GET_LIST)
}
