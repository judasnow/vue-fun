'use strict'

import {
    TODO_GET_LIST,
} from '../mutations-types'


export const todosInitialState = []

export const todosMutations = {
    [TODO_GET_LIST] (state) {
		console.dir ('CALL TODO_GET_LIST')
		state.total = 1024
    }
}
