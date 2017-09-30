<template>
	<div>
		<!-- 1.使用mintui的顶部区域 -->
		<mt-header fixed title="vue商城"></mt-header>
		<!-- 添加返回按钮 -->
		<div class="goback"  v-if='isshow'>
			<a href="javascript:;" @click='goback'><返回</a>
		</div>

		<!--  2.使用router-view占位-->
		<router-view></router-view>

		<!-- 3. 使用mui的底部区域-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-chat">
				<span class="mui-icon mui-icon-email">
					
				</span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact">
					<span class="mui-badge" id="badge">{{count}}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
//引入共有的vm对象
import {vm} from './kits/vm.js'
//导入localStorage获取本地存储中购物车商品数量在页面初始化时更新
import {getgoodsobj} from './kits/localitem.js'

vm.$on('sendtoapp',function(count,type){
	//获取当前徽章这个dom对象
	var badge=document.querySelector('#badge')
	//不穿type参数 默认为add
	if(!type){
		type='add'
	}
	if(type=='add'){
		badge.innerText=(badge.innerText-0)+count
	}else{
		badge.innerText=count;
	}
	
})

//导出这个vue对象
export default{
	//监控当前路由的锚点 如果是home就不显示返回按钮
	watch:{
		"$route":function(nowroute,oldroute){
			if(nowroute.path=='/home'){
				this.isshow=false
			}else{
				this.isshow=true;
			}
		}
	},
	data(){
		return {
			count:0,
			isshow:false
		}
	},
	created(){
		var goodsobj=getgoodsobj();
		for(var k in goodsobj){
			this.count+=goodsobj[k]
		}
	},
	methods:{
		//定义返回事件
		goback(){
			this.$router.go(-1)
		}
	}
}	

</script>

<style scoped>
	.skyblue{
		color:skyblue;
	}
	.goback{
		position: fixed;
		top:10px;
		left: 8px;
		z-index: 1000;
	}
	.goback a{
		color: white;
	}

</style>