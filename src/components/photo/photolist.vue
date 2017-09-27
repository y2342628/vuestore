<template>
	<div class="tmpMar">
		<!-- 导航区域 -->
			<div class="navlist">
				<ul v-bind="{style:'width:'+ulwidth+'px;'}">
					<li @click='getlist(0)'>全部</li>
					<li @click='getlist(item.id)' v-for='item in navlist'>
						{{item.title}}
					</li>
				</ul>
			</div>
			<!-- 图片列表 -->
			<div class="imglist">
				<ul >
					 <li v-for="item in list">
					  <router-link v-bind='{to:"/photo/photoinfo/"+item.id}'>
					  	   <img v-lazy="item.img_url">
						    <div class="desc">
						    	<h4 v-text='item.title'></h4>
						    	<p v-text='item.zhaiyao'></p>
						    </div>
					  </router-link>
					 </li>
				</ul>
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
				ulwidth:372,
				navlist:[],
				list:[]
			}
		},
		created(){
			this.getnavlist()
			this.getlist(0);
		},
		methods:{
			getlist(cateid){
				cateid=cateid?cateid:0;
				this.$http.get(common.apidomain+'/api/getimages/'+cateid)
				.then(function(res){
					if(res.body.status!=0){
						Toast(res.body.message);
						return;
					}
					this.list=res.body.message;
					
				})
			},
			//获取导航列表 设置ul的宽度
			getnavlist(){
				this.$http.get(common.apidomain+'/api/getimgcategory')
				.then(function(res){
					if(res.body.status!=0){
						Toast(res.body.message);
						return;
					}
					this.navlist=res.body.message;
					var w=77;
					var count=this.navlist.length+1;
					this.ulwidth=w*count;

				})
			}
		}
	}
</script>
<style scoped>
	.navlist{
		max-width: 375px;
		width: 375px;
		overflow-x: auto;
	}
	.navlist ul {
		
		padding-left: 10px;
		margin: 5px;
	}
	.navlist li {
		list-style: none;
		padding: 0px 10px;
		display: inline-block;
		border-right: 1px solid #ccc;
		color:#0094ff;
		font-size: 14px;
		cursor: pointer;
	}
	.navlist li:last-of-type{
		border-right: none;
	}
	.imglist {

	}
	.imglist ul{
 		padding-left: 0px;
 		margin: 0px;
	}
	.imglist ul  li{
		list-style: none;
		position: relative;
	}
	.imglist li img {
		width: 100%;
	}
	.desc{
		background-color: rgba(0,0,0,.3);
		position: absolute;
		left: 0px;
		bottom: 5px;
		color: white;
		padding: 5px;
	}
	.desc p {
		color:white;
	}
	image[lazy=loading] {
	  width: 40px;
	  height: 300px;
	  margin: auto;
	}
</style>