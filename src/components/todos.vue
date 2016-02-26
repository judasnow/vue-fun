<template>
<h5>todos ({{ total }})</h5>
<ul>
    <li>
        <span>content</span>
        <input type="checkbox">
    </li>
</ul>

<p>
    <input type="text">
    <button>add</button>
</p>
</template>

<script>
import store from '../store'
const { getTodosList } = store.actions

export default {
	computed: {
		total() {
			return store.state.todos.length
		}
	},
	created() {
		getTodosList()
	}
}
</script>

<style>
</style>
