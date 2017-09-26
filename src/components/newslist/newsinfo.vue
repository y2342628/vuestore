<template>
	<div class="tmpMar">
		<!-- 1.2新闻详情的结构 -->
		<div class="infotitle">
			<h4 v-text='info.title'></h4>
			<p>
				<span>{{info.add_time | datefmt}}</span>
				<span>{{info.click}}次浏览</span>
			</p>
		</div>
		<div class="content" v-html='info.content'></div>
		<!-- 2、使用评论的子组件 -->
	<comment :id='id'></comment>
	</div>
</template>
<script>
	//引入mintui的提示组件
	import { Toast } from 'mint-ui';
	//引入ajax域名
	import common from '../../kits/common.js'
	//引入评论组件comment
	import comment from '../subcom/comment.vue'

	export default{
		data(){
			return {
				id:0,
				info:{}
			}
		},
		created(){
			this.id=this.$route.params.id;
			this.getinfo()
		},
		methods:{
			//1.1发送ajax请求获取新闻详情
			getinfo(){
				this.$http.get(common.apidomain+'/api/getnew/'+this.id)
				.then(function(res){
					if(res.body.status!=0){
						Toast(res.body.message)
						return;
					}
					this.info=res.body.message[0]
				})
			}
		},
		components:{
			comment
		}
	}
</script>
<style scoped>
	.infotitle{
		color: #0094ff;
	}
	.infotitle p{
		font-size: 14px;
		color: rgba(0,0,0,.5);
	}
	.infotitle ,.content{
		padding: 5px;
	}
</style>