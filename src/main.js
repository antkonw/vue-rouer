// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
// import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper';

import axios from 'axios';
Vue.prototype.$http = axios;

Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

import Home from './pages/Home';
import Detail from './pages/Detail';
import PetDetail from './pages/PetDetail';
import HomeFirst from './components/HomeFirst';
import HomeSecond from './components/HomeSecond';
import HomeThird from './components/HomeThird';
import HomeFourth from './components/HomeFourth';
import HomeFifth from './components/HomeFifth';

const routes = [
	{
		path:'/',
		component:Home,
		children:[
			{
				path:'/home/life',
				component:HomeFirst	
			},
			{
				path:'home/pet',
				component:HomeSecond	
			},
			{
				path:'home/child',
				component:HomeThird	
			},
			{
				path:'home/weather',
				component:HomeFourth	
			},
			{
				path:'home/mine',
				component:HomeFifth	
			},
		]
	},
	{
	    path:'/detail/:id',
	    name:'detail',
	    component:Detail
	},
	{
		path:'/petDetail/:id',
		name:'petDetail',
		component:PetDetail
	}
]

const router = new VueRouter({
	routes
});

new Vue({
    el: '#app',
    data:{
  	 transitionName:"slide"
    },
    router,
    watch: {
	  	// 监视路由，参数为要目标路由和当前页面的路由
	  	'$route' (to, from){
	  		const toDepth = to.path.substring(0, to.path.length-2).split('/').length
	  		const fromDepth = from.path.substring(0, from.path.length-2).split('/').length
	  		this.transitionName = toDepth < fromDepth ? 'slide' : 'slide_back'
	  	}
  }
})
