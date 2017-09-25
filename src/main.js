// 1、导入vue'
import Vue from 'vue';
//2、导入app
import App from './App.vue';

//4.导入路由
import vueRouter from 'vue-router'

//4.1把路由绑定到Vue对象上
Vue.use(vueRouter)

//4.1.1导入组件]

import home from './components/home.vue'
import shopcar from './components/shopcar/car.vue'


//4.2定义路由规则
var  router=new vueRouter({
	linkActiveClass:'mui-active',
	routes:[
		{path:'/home',component:home},
		{path:'/shopcar',component:shopcar},
	]
})
//8.导入vue-resource功能
import vueResource from 'vue-resource'
Vue.use(vueResource)
//5.导入mint-ui和css
import 'mint-ui/lib/style.min.css';
import mint from 'mint-ui';
//6.导入mui的css
import '../statics/mui/css/mui.css';
//7.导入公共css
import '../statics/css/site.css'
//绑定mint-ui
Vue.use(mint)
//3、实例化vue
new Vue({
	el:'#app',
	//4.3、导入路由规则
	router:router,

	 render:c=>c(App) //es6语法  等同于reder:function(create){create(App)}
})
