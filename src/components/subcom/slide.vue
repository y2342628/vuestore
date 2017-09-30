<template>
	<div class="tmpMar">
		<!-- 提取出mintui实现轮播图组件-->
		<mt-swipe :auto="2000">
		  <mt-swipe-item v-for='item in list'>
		  	<a :href="item.url">
		  		<img :src="item.img">
		  	</a>
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>
	
	export default{
		data(){
			return {
				
			}
		},
		props:['list'],
		methods:{
		}
	}
</script>
<style scoped>
	.mint-swipe{
		height: 300px;
	}
	
	.mint-swipe-item img{
		width: 100%;
		height: 100%;
	}
</style>