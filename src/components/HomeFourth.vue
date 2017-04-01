<template>
	<div class="weather-main">
		<img :src="bgImg" alt="" class="weatherBg"> 
		<div class="shadow"></div>
		<div class="weather-header">
			<span>Sunday,</span>
			<span>May 25</span>
			<span>2017</span>
		</div>
		<div class="weather-body">
			<swiper :options="swiperOption" ref="mySwiperA">
			  <swiper-slide class="flex">
					<div class="weather-body-left">
						<img src="../../static/img/weather/weather_01.png" alt="">
					</div>
					<div class="weather-body-right">
						<p class="line_1">25°</p>
						<p class="line_2">局部阳光</p>
						<p>风：5级</p>
						<p>湿度：45%</p>
					</div>
			  </swiper-slide>
			  <swiper-slide class="flex">
					<div class="weather-body-left">
						<img src="../../static/img/weather/weather_01.png" alt="">
					</div>
					<div class="weather-body-right">
						<p class="line_1">18°</p>
						<p class="line_2">局部阵雨</p>
						<p>风：6级</p>
						<p>湿度：45%</p>
					</div>
			  </swiper-slide>
			  <swiper-slide class="flex">
					<div class="weather-body-left">
						<img src="../../static/img/weather/weather_01.png" alt="">
					</div>
					<div class="weather-body-right">
						<p class="line_1">22°</p>
						<p class="line_2">阳光明媚</p>
						<p>风：2级</p>
						<p>湿度：5%</p>
					</div>
			  </swiper-slide>
			  <div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
		<div class="weather-footer flex">
			<div class="weather-footer-item" @click="selectBg(1)">
				<p class="title">MON</p>
				<img src="../../static/img/weather/weather_02.png" alt="">
				<p>26°</p>
			</div>
			<div class="weather-footer-item" @click="selectBg(2)">
				<p class="title">MON</p>
				<img src="../../static/img/weather/weather_03.png" alt="">
				<p>18°</p>
			</div>
			<div class="weather-footer-item" @click="selectBg(3)">
				<p class="title">MON</p>
				<img src="../../static/img/weather/weather_02.png" alt="">
				<p>22°</p>
			</div>
		</div>
	</div>
</template>
<style>
	.weather-main{width: 100%;max-width:640px;height: 100%;border: 1px solid;z-index:9;position: absolute;top: 0;}
	.weather-header{width:80%;height:40px;line-height:40px;border-top:1px solid #999;border-bottom:1px solid #999;position:absolute;top:50px;left:10%;text-align: center;color:#fff;font-size:1.4rem;}
	.weather-body{width:80%;position:absolute;top:140px;left:10%;}
	.weather-body .weather-body-left{width:50%;}
	.weather-body .weather-body-left img{width:100%;}
	.weather-body .weather-body-right{width:50%;color:#fff;padding-left:15%;padding-top:5px;font-size:1.4rem;}
	.weather-body .weather-body-right .line_1{font-size:2.2rem;}
	.weather-body .weather-body-right .line_2{font-size:1.8rem;}
	.weather-footer{width:100%;max-width:640px;position:absolute;bottom:70px;}
	.weather-footer .weather-footer-item{width:100%;text-align:center;}
	.weather-footer .weather-footer-item p{color:#eee;font-size:1.6rem;font-weight:400;padding:15px 0;}
	.weather-footer .weather-footer-item img{width:40%;}
	.weather-main .weatherBg{width:100%;height:100%;}
	.swiper-container{padding-bottom:50px;}
	.swiper-pagination{bottom:0px;}
    .swiper-pagination-bullet-active{background:#eee !important; }
    .shadow{width:100%;max-width:640px;height:100%;position:fixed;top:0;background:rgba(0,0,0,0.5);}
    @media only screen and (max-width:320px){
    	.weather-body{width:80%;position:absolute;top:130px;left:10%;}
    }
</style>
<script>
	export default{
		data(){
			return {
				swiperOption: {
			     	// autoplay: 3000,
			        pagination : '.swiper-pagination',
			        onSlideChangeEnd: function(swiper){
				      selectBg(swiper.activeIndex+1);
				    }
				},
				bgImg:'../../static/img/weather/weatherBg_01.jpg'
			}
		},
		created(){
			var _this = this;
			this.swiperOption =  {
			        pagination :'.swiper-pagination',
			        onSlideChangeEnd: function(swiper){
				      _this.selectBg(swiper.activeIndex+1);
				}
			}
		},
		methods:{
			selectBg(flag){
				if(flag==1){
					this.bgImg = '../../static/img/weather/weatherBg_01.jpg'
				}else if(flag==2){
					this.bgImg = '../../static/img/weather/weatherBg_02.jpg'
				}else{
					this.bgImg = '../../static/img/weather/weatherBg_03.jpg'
				}
			},

		}
	}
</script>