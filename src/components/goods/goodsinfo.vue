<template>
	<div class="tmpMar">
		 <!-- 1.轮播图区域 -->
		 <div class="bor">
		 	<slide :list='imglist'></slide>
		 </div>
		 <!-- 2.商品信息 -->
		 <div class="bor">
		 	<h4 v-text='goodinfo.title'></h4>
		 	<p class="line"></p>
		 	<ul>
		 		<li>市场价：<del>￥{{goodinfo.market_price}}</del>  销售价：<span class="red">￥{{goodinfo.sell_price}}</span></li>
		 		<li>购买数量:<inputNumber @sendcount='getcount'></inputNumber></li>
		 		<li>
		 			<mt-button size="small" type="primary">立即购买</mt-button>
					<mt-button size="small" type="danger"  @click='addcar'>加入购物车</mt-button>
		 		</li>
		 	</ul>
		 </div>
		 <!-- 3.商品参数 -->
		 <div class="bor">
		 	<h5>商品参数</h5>
		 	<p class="line"></p>
		 	<ul>
		 		<li>商品货号：{{goodinfo.goods_no}}</li>
		 		<li>库存情况：{{goodinfo.stock_quantity}}</li>
		 		<li>上架时间：{{goodinfo.add_time | datefmt}}</li>
		 	</ul>
		 </div>
		 <!-- 4.商品详情 -->
		 <div class="bor">
		 	<router-link v-bind="{to:'/goods/goodsdesc/'+this.id}">
		 		<mt-button size="large" type="primary">图文详情</mt-button>
		 	</router-link>
			<router-link v-bind="{to:'/goods/goodscomment/'+this.id}">
				<mt-button size="large" type="danger" class='lastbtn'>商品评论</mt-button>
			</router-link>
		 </div>
	</div>
</template>
<script>
	//引入轮播图组件
	import slide from '../subcom/slide.vue'
	 //引入mintui的提示组件
	import { Toast } from 'mint-ui';
	//引入ajax域名
	import common from '../../kits/common.js'
	//引入增删数量的组件
	import inputNumber from '../subcom/inputNumber.vue'
	//引入共有的vm对象
	import {vm} from '../../kits/vm.js'
	//引入本地存储系列方法
	import {setItem} from '../../kits/localitem.js'

	export default{
		data(){
			return {
				id:0,
				imglist:[],
				goodinfo:{},
				count:1
			}
		},
		created(){
			this.id=this.$route.params.id;
			this.getimglist();
			this.getgoodinfo()
		},
		methods:{
			//发送ajax请求根据id获取轮播图
			getimglist(){
				this.$http.get(common.apidomain+'/api/getthumimages/'+this.id)
				.then(function(res){
					if(res.body.status!=0){
						Toast(res.body.message)
						return;
					}
					this.imglist=res.body.message
				})
			},
			//发送ajax请求获取商品信息
			getgoodinfo(){
				this.$http.get(common.apidomain+'/api/goods/getinfo/'+this.id)
				.then(function(res){
					if(res.body.status!=0){
						Toast(res.body.message)
						return;
					}
					this.goodinfo=res.body.message[0]
				})
			},
			//获取组件传来的count
			getcount(value){
				this.count=value;
			},
			//加入购物车事件
			addcar(){
				//发送给app.vue页面
				vm.$emit('sendtoapp',this.count);
				//加入本地存储
				setItem({id:this.id,count:this.count})
			}
		},
		components:{
			slide,
			inputNumber
		}
	}
</script>
<style scoped>
	.bor {
		border: 1px solid #ccc;
		margin: 5px;
		padding: 5px;
		border-radius: 5px;
	}
	h4 {
		color: #0094ff;
		padding: 5px;
	}
	del{
		font-size: 14px;
		margin-right: 20px;
	}
	.red{
		color: red;
		font-weight: bold;
	}
	.line {
		height: 2px;
		background-color: rgba(0,0,0,.2);
	}
	ul{
		list-style: none;
		padding: 5px;
	}
	li{
		padding: 8px;
	}
	.lastbtn{
		margin-top: 20px;
	}
</style>