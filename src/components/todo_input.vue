<template>
<p>
	<small>
		<a v-on:click="toggleList">show</a>
	</small>
	<input v-model="newTodo" :placeholder="newTodo" type="text">
	<button @click="addNewTodo">add</button>
</p>
<p>{{ newTodo }}</p>
</template>


<script>
export default {
	props: ['isShow', 'newTodo'],
	data: function() {
		return {

		}
	},
	// 大量需要事件扩散的组件 需要重新规划
	methods: {
		toggleList() {
			this.$dispatch('toggle-list')
		},
		addNewTodo() {
			this.$dispatch('add-new-todo', this.newTodo)
		}
	}
}
</script>


<style>
</style>
