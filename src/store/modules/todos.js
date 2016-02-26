'use strict'

import {
    TODO_GET_LIST,
} from '../mutations-types'


export const todosInitialState = []

export const todosMutations = {
    [TODO_GET_LIST] (state) {
		state.todos = [1,2,3]
    }
}
