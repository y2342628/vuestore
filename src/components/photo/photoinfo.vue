<template>
	<div class="tmpMar">
		<div class="imginfo">
				<!-- 1.图片标题 -->
			<div class="imgtitle">
				<h4 v-text='photoinfo.title'></h4>
				<p>{{photoinfo.add_time | datefmt}}   {{photoinfo.click}}次浏览</p>
				<p class="line"></p>
			</div>
			
			<!-- 2.利用mui的九宫格实现缩略图 -->
				<div class="mui-content">
				        <ul class="mui-table-view mui-grid-view mui-grid-9">
				            <li v-for="(item, index) in list" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				            	<img class="preview-img"  :src="item.src" height="100" @click="$preview.open(index, list)">
				           </li>
				        </ul> 
				</div>

			<div  class="desc" v-html='photoinfo.content'></div>
		</div>
		<!-- 引入评论组件 -->
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
					photoinfo:{},
					list:[]
				}
			},
			created(){
				this.id=this.$route.params.id;
				this.getphotoinfo();
				this.getlist()
			},
			methods:{
				//获取缩略图的信息
				getlist(){
					this.$http.get(common.apidomain+'/api/getthumimages/'+this.id)
					.then(function(res){
						res.body.message.forEach(function(v,i){
							v.h=300;
							v.w=300;
						})
						this.list=res.body.message;
					})
				},
				//获取图片描述的信息
				getphotoinfo(){
					this.$http.get(common.apidomain+'/api/getimageInfo/'+this.id)
					.then(function(res){
						if(res.body.status!=0){
							Toast(res.body.message)
							return;
						}
						this.photoinfo=res.body.message[0];
						
					})
				}
			},
			components:{
				comment
			}
	}
</script>
<style scoped>
		
		.imginfo .imgtitle {
			padding: 10px;
		}
		.imginfo .imgtitle h4{
			color: #0094ff;
		}
		.imginfo .imgtitle p {
			color: rgba(0,0,0,.4);
		}
		.imgtitle .line {	
			height: 2px;
			background-color: rgba(0,0,0,.3); 
		}
		.desc {
			padding: 5px;
		}
</style>