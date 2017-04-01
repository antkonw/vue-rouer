<template>
	<div>
		<!-- <div class="carousel">
			<swiper :options="swiperOption" ref="mySwiperA">
			  <swiper-slide>slide1</swiper-slide>
			  <swiper-slide>slide2</swiper-slide>
			  <swiper-slide>slide3</swiper-slide>
			  <swiper-slide>slide4</swiper-slide>
			  <div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div> -->
		<div class="lists">
			<div class="list" v-for="data in datas">
				<router-link :to="{name:'detail',params:{id:data.id}}">
					<div class="list-header">
						<img :src="data.headerImg" alt="" class="headerImg" />
						<span class="name">{{data.author}}</span>
					</div>
					<div class="list-coverImg">
						<img :src="data.coverImg" alt="">
					</div>
					<div class="list-title">
						<p>{{data.title}}</p>
					</div>
					<div class="list-bottom flex">
						<div>
							<img src="../../static/img/icon/zan.png" alt="">
							<span>{{data.zanNum}}</span>
						</div>
						<div>
							<img src="../../static/img/icon/like.png" alt="">
							<span>{{data.likeNum}}</span>
						</div>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.carousel{width:100%;overflow:hidden;}
	.lists{margin:0 0 65px 0;}
	.list{width:100%;background-color:#fff;border-top:1px solid #cecece;border-bottom:1px solid #cecece;margin-top:6px;}
	.list-header{width:100%;height:45px;line-height:45px;padding:0 10px;}
	.list-header .headerImg{width:30px;height:30px;border-radius:50%;border:1px solid #eee;position:relative;top:-2px;}
	.list-header .name{color:#999;font-size:1.4rem;margin-left:10px;}
	.list .list-coverImg{width:100%;height:150px;}
	.list .list-coverImg img{width:100%;height:100%;} 
	.list .list-title p{width:100%;padding:10px 10px 0 10px;font-size:1.6rem;color:#555;}
	.list .list-bottom{padding:10px;}
	.list .list-bottom div{margin-right:15px;}
	.list .list-bottom div span{position:relative;top:2px;color:#999;}
	.swiper-slide{width:100%;height:180px;text-align: center;line-height:180px;font-size:2rem;background-color:#116876;color:#fff;}
</style>
<script>
	export default{
		data(){
			return {
				// swiperOption: {
			 //     	autoplay: 3000,
			 //        pagination : '.swiper-pagination',
				// },
				datas:[],
			}
		},
		created(){
 			this.fetchData()
		},
		watch:{
			'$route':'fetchData'
		},
		methods:{
			fetchData(){
				this.$http.get("../../static/json/json.json").then((response)=>{
					// console.log(response.data);
					var data = response.data.data;
					this.datas = data;
				});
			}
		}
}
</script>
