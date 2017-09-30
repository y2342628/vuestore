<template>
	<div class="tmpMar">
		<div class="list" v-for='(item,index) in carlist'>
			<mt-switch v-model="value[index]"></mt-switch>
			<img :src="item.thumb_path">
			<div class='desc'>
				<h4>{{item.title}}</h4>
				<ul>
					<li class="red">￥{{item.sell_price}}</li>
					<li><carinputNumber  :initcount='item.cou' :initid='item.id' @frominput='getcount'></carinputNumber></li>
					<li class="del" @click='del(item.id,index)'>删除</li>
				</ul>
			</div>
		</div>
		<div class="total">
			<p>总计（不含运费）</p>
			<p>已购选商品{{totalkind}}件，总价{{totalprice}}元</p>
		</div>
	</div>

</template>
<script>
	//导入本地存储的获取对象和setitem两个方法
	import {setItem,getgoodsobj,removeobj} from '../../kits/localitem.js'
	 //引入mintui的提示组件
	import { Toast } from 'mint-ui';
	//引入ajax域名
	import common from '../../kits/common.js'
	//引入增减数量的组件
	import carinputNumber from '../subcom/carinputNumber.vue'
	//引入公用的vm对象
	import {vm} from '../../kits/vm.js'
	export default{
		//计算当前勾选的总数量和总价钱
		computed:{
			totalkind(){
				var totalkind=0;
				var totalprice=0;
				for(var i=0;i<this.value.length;i++){
					if(this.value[i]){
						totalkind++;
						totalprice+=this.carlist[i].cou*this.carlist[i].sell_price

					}
				}
				this.totalprice=totalprice;
				return totalkind
			}
		},
		data(){
			return {
				value:[],
				carlist:[],
				nowallcount:0,
				totalprice:0
			}
		},
		created(){
			this.getcalist()
		},
		methods:{
			//添加删除事件
			del(id,index){
				//1.删除当前carlist列表中的数据
				this.carlist.splice(index,1)
				//2.删除this.value中对应的值
				this.value.splice(i,1)
				//3.删除localStorage中对应的值
				// removeobj(id)
				//4.删除app.vue中对应的值
				this.nowallcount=0;
				for(var i=0;i<this.carlist.length;i++){
					this.nowallcount+=this.carlist[i].cou
				}
				vm.$emit('sendtoapp',this.nowallcount,'replace')

			},
			//获取当前count的数量变化
			getcount(obj){
			
				//1.更新当前list列表中的cou
				for(var i=0;i<this.carlist.length;i++){
					if(this.carlist[i].id==obj.id){
						this.carlist[i].cou=obj.count
					}
				}
				//2.更新徽章中的数据
				this.nowallcount=0;
				for(var i=0;i<this.carlist.length;i++){
					this.nowallcount+=this.carlist[i].cou
				}
				vm.$emit('sendtoapp',this.nowallcount,'replace')
				//3.更新localStorage中的数据
				setItem({id:obj.id,count:obj.count},'replace')

			},
			//获取本地存储中的obj对象
			getcalist(){
				var goodsobj=getgoodsobj()
				var idstr="0";
				for(var k in goodsobj){
					idstr+=','+k
				}
				this.$http.get(common.apidomain+'/api/goods/getshopcarlist/'+idstr)
				.then(function(res){
					//把localStorage对象中的count赋值给carlist中的cou 方便操作
					res.body.message.forEach(function(v,i){
						v.cou=goodsobj[v.id]
					})
					this.carlist=res.body.message;
					//初始化switch组件对应的value值
					for(var i=0;i<this.carlist.length;i++){
						this.value.push(false)
					}

				})	
			}
		},
		components:{
			carinputNumber
		}
	}
</script>
<style scoped>
	.list{
		border: 1px solid #ccc;
		margin: 5px;
		padding: 5px;
		display: flex;
	}
	.list img{
		width: 75px;
		height: 75px;
		margin-top: 10px;
	}
	.desc{
		flex: 1;
	}
	.desc h4 {
		color: #0094ff;
	}
	.desc ul {
		list-style: none;
		padding: 0px;
		margin:5px 0px;
	}
	.desc li {
		display: inline-block;
	}
	.red {
		color: red;
		font-weight: bold;
	}
	.del {
		color: #0094ff;
		font-weight: bold;
		cursor: pointer;
	}
	.total{
		height: 80px;
		background-color: rgba(0,0,0,.2);
		padding: 8px;
	}
</style>