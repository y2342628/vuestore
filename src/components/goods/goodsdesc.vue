<template>
	<div class="tmpMar">
		<h4>{{gooddesc.title}}</h4>
		<p class="line"></p>
		<p v-html='gooddesc.content'></p>
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
				id:0,
				gooddesc:{}
			}
		},
		created(){
			this.id=this.$route.params.id;
			this.getgooddesc();
		},
		methods:{
			//获取商品描述的ajax请求
			getgooddesc(){
				this.$http.get(common.apidomain+'/api/goods/getdesc/'+this.id)
				.then(function(res){
					if(res.body.status!=0){
						Toast(res.body.message);
						return;
					}
					this.gooddesc=res.body.message[0]
				})
			}
		}
	}
</script>
<style scoped>
	.tmpMar{
		padding: 8px;
	}
	h4{
		color: #0094ff;
	}
	.line{
		height: 2px;
		background-color: rgba(0,0,0,.2);
		margin: 10px 0;
	}
</style>