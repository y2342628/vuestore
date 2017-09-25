<template>
	<div class="tmpMar">
		<div class="infotitle">
			<h4 v-text='info.title'></h4>
			<p>
				<span>{{info.add_time | datefmt}}</span>
				<span>{{info.click}}次浏览</span>
			</p>
		</div>
		<div class="content" v-html='info.content'></div>
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
				info:{}
			}
		},
		created(){
			this.id=this.$route.params.id;
			this.getinfo()
		},
		methods:{
			getinfo(){
				this.$http.get(common.apidomain+'/api/getnew/'+this.id)
				.then(function(res){
					this.info=res.body.message[0]
				})
			}
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