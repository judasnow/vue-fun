<template>
<h5>todos</h5>
<ul>
    <li>
        <span>{{ content }}</span>
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
    data() {
        return {}
    },
	computed: {
		count() {
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
