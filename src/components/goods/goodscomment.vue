<template>
	<div class="tmpMar">
		<comment :id='id'></comment>
	</div>
</template>
<script>
	//引入评论组件
	import comment from '../subcom/comment.vue'
	export default{
		data(){
			return {
				id:0
			}
		},
		created(){
			this.id=this.$route.params.id
		},
		components:{
			comment
		}
	}
</script>
<style scoped>
	
</style>