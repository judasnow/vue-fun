<template>
<article class="weui_article">
	<h1>{{ name }}</h1>
	<section>
		<h2 class="title">{{ desc }}</h2>
	<section>
</article>
</template>


<style></style>


<script>
import { getTeam } from '../vuex/actions'

export default {
  // 注入了 vuex 相关的对象
  vuex: {
    state: {
      name: ({ team }) => {
        return team.name
      },
      desc: ({ team }) => {
        return team.desc
      }
    },
    actions: {
      getTeam
    }
	},
  created: function() {
    this.getTeam(1)
  }
}
</script>
