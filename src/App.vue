<template>
	<div>
		<!-- 1.使用mintui的顶部区域 -->
		<mt-header fixed title="vue商城"></mt-header>

		<!--  2.使用router-view占位-->
		<router-view></router-view>

		<!-- 3. 使用mui的底部区域-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-chat">
				<span class="mui-icon mui-icon-email">
					
				</span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

	
	
	</div>
</template>

<script>

//导出这个vue对象
export default{
	data(){
		return {
			msg:'哈哈哈'
		}
	},
	methods:{
		
	}
}	

</script>

<style scoped>
	.skyblue{
		color:skyblue;
	}

</style>