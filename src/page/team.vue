<template>
<article class="weui_article">
	<h1>{{ name }}</h1>
	<section>
	  <h2 class="title">{{ desc }}</h2>
	  <toast v-show="true">购买成功</toast>
	<section>
</article>
</template>


<style></style>


<script>
import { getTeam } from '../vuex/actions'
import { Toast } from 'vue-weui'

export default {
  components: {
  	toast: Toast
  },
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
