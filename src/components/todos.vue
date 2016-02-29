<template>
<h5>todos ({{ total }})</h5>
<!-- 这里怎样才能将 data 中的 -->
<todo-input is-show="{{isShow}}" new-todo="666"></todo-input>

<ul v-if="isShow">
    <li>
        <span>content</span>
        <input type="checkbox">
    </li>
</ul>
</template>


<script>
import store from '../store'
import todoInput from './todo_input.vue'
const { getTodosList } = store.actions

export default {
	data() {
		return {
			isShow: false,
			newTodo: '新todo'
		}
	},
	computed: {
		total() {
			return store.state.todos.length
		}
	},
	created() {
		getTodosList()
	},
	components: {
		'todo-input': todoInput
	},
	events: {
		'toggle-list': function() {
			this.isShow = !this.isShow
		},
		'add-new-todo': function(newTodo) {
			console.dir(newTodo)
		}
	}
}
</script>


<style>
</style>
