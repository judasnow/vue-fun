'use strict'

import {
    TODO_GET_LIST,
} from '../mutations-types'

export const todosInitialState = []

export const todosMutations = {
    [TODO_GET_LIST](state, pageNum) {
		console.dir('TODO_GET_LIST')
    }
}
