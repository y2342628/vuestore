<template>
	<div class="tmpMar">
		<!-- 利用mui实现图文列表 -->
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item in list'>
					<router-link v-bind='{to:"/news/newsinfo/"+item.id}'>
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis' v-text='item.zhaiyao'></p>
							<div class="newsfoot">
								<span>发表时间：{{item.add_time | datefmt }}</span>
								<span>点击数：{{item.click}}</span>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
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
				list :[]
			}
		},
		created(){
			this.getNews();
		},
		methods:{
			getNews(){
				this.$http.get(common.apidomain+'/api/getnewslist')
				.then(function(res){
					this.list=res.body.message;
				})
			}
		}
	}
</script>
<style scoped>
	.mui-table-view .mui-media-object{
		line-height: 80px;
	    max-width: 80px;
	    height: 80px;
	}
	.newsfoot{
		font-size: 14px;
		margin-top: 1.5em;
		color: #0094ff;
	}
</style>