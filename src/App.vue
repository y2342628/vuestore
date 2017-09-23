<template>
	<div>
		{{msg}}
		<p class="skyblue">这是一个p标签</p>
		<button @click='conmsg'>输出</button>
		<router-link to='/login'>登录</router-link>
		<router-link to='/register'>注册</router-link>
		<router-view></router-view>


		<!-- 使用mintui的组件 -->
		<mt-button @click='toas' type="danger">danger</mt-button>

		<!-- 使用mui的组件 -->
		<!-- 九宫格 -->
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		        </ul> 
		</div>
		<!-- 图文列表 -->
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="http://www.dcloud.io/hellomui/images/shuijiao.jpg">
						<div class="mui-media-body">
							幸福
							<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="http://www.dcloud.io/hellomui/images/shuijiao.jpg">
						<div class="mui-media-body">
							木屋
							<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="http://www.dcloud.io/hellomui/images/shuijiao.jpg">
						<div class="mui-media-body">
							CBD
							<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
						</div>
					</a>
				</li>

			</ul>


	</div>
</template>

<script>
//导入 mint的js
import { Toast } from 'mint-ui';

//导出这个vue对象
export default{
	data(){
		return {
			msg:'哈哈哈'
		}
	},
	methods:{
		conmsg(){
			console.log(this.msg)
		},
		toas(){
			Toast('哈哈哈');
		}
	}
}	

</script>

<style scoped>
	.skyblue{
		color:skyblue;
	}

</style>