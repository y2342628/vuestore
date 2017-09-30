<template>
	<div class="tmpMar">
		<!-- 使用mui中的图文表格样式 -->
		<div id="mui-content" class="mui-content" style="background-color:#fff">
			    <ul class="mui-table-view mui-grid-view">
			        <li v-for='item in list' class="mui-table-view-cell mui-media mui-col-xs-6">
			            <router-link v-bind="{to:'/goods/goodsinfo/'+item.id}">
			                <img class="mui-media-object" :src="item.img_url">
			                <div class="mui-media-body">{{item.title}}</div>
			                <div class="desc">
			                	<p>
			                		<span class="red">￥{{item.sell_price}}</span>
			                		<s>￥{{item.market_price}}</s>
			                	</p>
			                	<p class="hot">
			                		<b>热卖中</b>
			                		<span>剩余{{item.stock_quantity}}件</span>
			                	</p>
			                </div>
			            </router-link>
			       </li>
			    </ul>    
		</div>
		<!-- 添加一个加载更多的按钮 -->
		<mt-button type="danger" size="large" plain @click='getmore' >{{btnmsg}}</mt-button>

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
				btnmsg:'加载更多',
				pageIndex:1,
				list:[],
				
			}
		},
		created(){
			this.getgoodslists()
		},
		methods:{
			//加载更多的事件
			getmore(){
				this.pageIndex++;
				this.getgoodslists();
			},
			//获取数据列表
			getgoodslists(){
				this.$http.get(common.apidomain+'/api/getgoods?pageindex='+this.pageIndex)
				.then(function(res){
					if(res.body.status!=0){
						Toast(res.body.message)
					}
					this.list=this.list.concat(res.body.message);
					//判断 如果获取的信息数据少于10条 说明没有更多信息了  按钮信息变为没有更多了 
					if(res.body.message.length<10){
						this.btnmsg='没有更多商品了';
						return;
					}
				})
			}
		}
	}
</script>
<style scoped>
 #mui-content{

 }
  #mui-content ul{
	padding: 0px;
 }	
  #mui-content ul li{
	padding: 0px;
	margin: 0px;
	border: 1px solid #ccc;
	box-sizing: border-box;
	
	box-shadow: 0px 0px 4px #000;
 }	
 #mui-content ul li a{
	padding: 0px;
	margin: 0px;
 }
.desc {
	text-align: left;
	height: 60px;
	background-color: rgba(0,0,0,0.1); 
	padding: 5px;
	position: relative;

}

.red{
	color: red;
	font-weight: bold;
	margin-right: 20px;
}
.desc .hot {
	width: 100%;
	position: absolute;
	bottom: 2px;
	left: 0px;
	font-size: 12px;
	padding:0px 5px;

}
.hot span {
	float: right
}
</style>