// 1、导入vue'
import Vue from 'vue';
//2、导入app
import App from './App.vue';

//4.导入路由
import vueRouter from 'vue-router'

//4.1把路由绑定到Vue对象上
Vue.use(vueRouter)

//4.1.1导入组件]

import login from './components/account/login.vue'
import register from './components/account/register.vue'

//4.2定义路由规则
var  router=new vueRouter({
	routes:[
		{path:'/login',component:login},
		{path:'/register',component:register},
	]
})
//5.导入mint-ui和css
import 'mint-ui/lib/style.min.css';
import mint from 'mint-ui';
//6.导入mui的css
import '../statics/mui/css/mui.css';
//绑定mint-ui
Vue.use(mint)
//3、实例化vue
new Vue({
	el:'#app',
	//4.3、导入路由规则
	router:router,

	 render:c=>c(App) //es6语法  等同于reder:function(create){create(App)}
})
