<!-- 评论功能模版 -->
<template>
	<div class="tmpMar">
		<!-- 1.提交评论 -->
		<div class="postcomment">
			<h3>提交评论</h3>
			<p class="p"></p>
			<textarea placeholder="请输入要评论的内容..." v-model='postcontent'></textarea>
			<mt-button type="primary" size="large" @click='postcomment'>发表评论</mt-button>
		</div>
		<!-- 2.评论列表 -->
		<div class="list">
			<h3>提交评论</h3>
			<p class="p"></p>
			<div class="commentlist" v-for='(item,index) in list' >
				<div class="title">
					<span>第{{index+1}}楼</span>
					<span>用户：{{item.user_name}}</span>
					<span>发表时间：{{item.add_time | datefmt}}</span>

				</div>
				<div class="content">
					{{item.content}}
				</div>
			</div>
				<!-- 3.加载更多 -->
			<mt-button @click='getmore' plain size="large" type="danger">加载更多</mt-button>
		</div>
	</div>
</template>
<script>
	//引入mintui的提示组件
	import { Toast } from 'mint-ui';
	//引入ajax域名
	import common from '../../kits/common.js'

	export default{
		data(){
			return {
				postcontent:'',
				list:[],
				pageIndex:1
			}
		},
		props:['id'],
		created(){
			this.getcomment();
		},
		methods:{
			// 发表评论功能
			postcomment(){
				if(!this.postcontent.trim()){
					Toast("不能提交空的评论");
					return;
				}
				this.$http.post(common.apidomain+'/api/postcomment/'+this.id,{content:this.postcontent},{emulateJSON:true})
				.then(function(res){
					if(res.body.status!=0){
						Toast(res.body.message)
						return;
					}
					Toast(res.body.message)
					this.list=[{
						user_name:'用户',
						add_time:new Date(),
						content:this.postcontent
					}].concat(this.list)
					this.postcontent='';
				})
			},
			// 获取评论数据
			getcomment(){
				
				this.$http.get(common.apidomain+'/api/getcomments/'+this.id+'?pageindex='+this.pageIndex)
				.then(function(res){
					if(res.body.status!=0){
						Toast(res.body.message)
						return;
					}
					this.list=this.list.concat(res.body.message)
				})
			},
			//获取更多功能
			getmore(){
				this.pageIndex++;
				this.getcomment()
			}
		}
	}
</script>
<style scoped>
	.p {
		height: 1px;
		background-color: rgba(0,0,0,0.2);
	}
	.commentlist{
		padding: 5px;
		font-size: 15px;
		background-color: rgba(0,0,0,.1);
	}
	.commentlist .title{
		padding: 5px;
		background-color: rgba(0,0,0,.1);
	}
	.commentlist  .content{
		padding: 5px;
		background-color: #fff;
	}
</style>