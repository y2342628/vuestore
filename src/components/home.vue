<template>
	<div class="tmpMar">
		<!-- 1.利用mintui实现轮播图 -->
		<mt-swipe :auto="2000">
		  <mt-swipe-item v-for='item in list'>
		  	<a :href="item.url">
		  		<img :src="item.img">
		  	</a>
		  </mt-swipe-item>
		</mt-swipe>
		<!-- 2.利用mui的九宫格实现导航栏 -->
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻咨询</div>
		                </router-link>
		                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="/photo/photolist">
		                    <span class="mui-icon mui-icon-email">
		                    </span>
		                    <div class="mui-media-body">图片分享</div></router-link>
		                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="/goods/goodslist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link>
		                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="/feedback">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link>
		                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="/video">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></router-link>
		                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="/callme">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></router-link>
		                </li>
		        </ul> 
		</div>

	</div>
</template>
<script>
	//引入mintui的提示组件
	import { Toast } from 'mint-ui';
	//引入ajax域名
	import common from '../kits/common.js'
	export default{
		data(){
			return {
				list:[]
			}
		},
		created(){
			this.getImg()
		},
		methods:{
			getImg(){
				this.$http.get(common.apidomain+'/api/getlunbo')
				.then(function(res){
					if(res.body.status!=0){
						Toast(res.body.message)
						return;
					}
					this.list=res.body.message;
				})
			}
		}
	}
</script>
<style scoped>
	.mint-swipe{
		height: 250px;
	}
	
	.mint-swipe-item img{
		width: 100%;
		height: 100%;
	}
	.mui-content{
		background-color: #fff;
	}
	.mui-content ul {
		background-color: #fff;
		border: none;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
		border: none;
	}
	.mui-icon-home:before,
	.mui-icon-email:before,
	.mui-icon-chatbubble:before,
	.mui-icon-location:before,
	.mui-icon-search:before,
	.mui-icon-phone:before{
		content: '';
		display: inline-block;
		width: 50px;
		height: 50px;
		background-size: cover;
	}
	.mui-icon-home:before{
		background-image: url(../../statics/imgs/1.png);
	}
	.mui-icon-email:before{
		background-image: url(../../statics/imgs/2.png);
	}
	.mui-icon-chatbubble:before{
		background-image: url(../../statics/imgs/3.png);
	}
	.mui-icon-location:before{
		background-image: url(../../statics/imgs/4.png);
	}
	.mui-icon-search:before{
		background-image: url(../../statics/imgs/5.png);
	}
	.mui-icon-phone:before{
		background-image: url(../../statics/imgs/6.png);
	}
</style>