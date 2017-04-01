<template>
	<div>
		<div class="my-header">
			<div class="my-header-headerImg">
				<img src="../../static/img/headerImg.jpg" alt="" />
			</div>
			<p class="info-name">小蚁</p>
			<p class="info-motto">要么不做，要么做到最好</p>
			<a href="javascript:;" class="editBtn">
				<img src="../../static/img/icons/edit.png" alt="">
				<span>编辑</span>
			</a>
		</div>
		<div class="wraps marginTop">
			<div class="wrap">
				<img src="../../static/img/icons/sleep.png" alt="" class="wrap-img">
				<span>我的睡眠</span>
				<img src="../../static/img/icon/next.png" alt="" class="next">
			</div>
			<div class="wrap">
				<img src="../../static/img/icons/count.png" alt="" class="wrap-img">
				<span>我的步数</span>
				<img src="../../static/img/icon/next.png" alt="" class="next">
			</div>
			<div class="wrap">
				<img src="../../static/img/icons/money.png" alt="" class="wrap-img">
				<span>我的理财</span>
				<img src="../../static/img/icon/next.png" alt="" class="next">
			</div>
			<div class="wrap">
				<img src="../../static/img/icons/weight.png" alt="" class="wrap-img">
				<span>我的身材</span>
				<img src="../../static/img/icon/next.png" alt="" class="next">
			</div>
			<div class="wrap">
				<img src="../../static/img/icons/address.png" alt="" class="wrap-img">
				<span>我的旅行</span>
				<img src="../../static/img/icon/next.png" alt="" class="next">
			</div>
			<div class="wrap">
				<img src="../../static/img/icons/sport.png" alt="" class="wrap-img">
				<span>我的运动</span>
				<img src="../../static/img/icon/next.png" alt="" class="next">
			</div>
		</div>
		<div class="wraps marginTop">
			<div class="wrap">
				<img src="../../static/img/icon/life.png" alt="" class="wrap-img">
				<span>反馈中心</span>
				<img src="../../static/img/icon/next.png" alt="" class="next">
			</div>
			<div class="wrap">
				<img src="../../static/img/icons/setting.png" alt="" class="wrap-img">
				<span>设置</span>
				<img src="../../static/img/icon/next.png" alt="" class="next">
			</div>
		</div>
	</div>
</template>
<style>
	.marginTop{margin-top:10px;}
	.my-header{width:100%;padding:10px;background-color:#1cbc79;text-align:center;position:relative;}
	.my-header .my-header-headerImg{text-align:center;}
	.my-header .my-header-headerImg img{width:80px;height:80px;border-radius:50%;}
	.my-header .info-name{padding:5px 0;font-size:1.6rem;color:#eee;}
	.my-header .info-motto{color:#eee;font-size:1.2rem;}
	.my-header .editBtn{position:absolute;top:10px;right:10px;color:#fff;font-size:1.2rem;padding:5px 10px;background-color:#1e7958;border-radius:30px;}
	.my-header .editBtn img{width:15px;height:15px;color:}

	.wraps{width: 100%;background-color: #fff;padding:0 10px;position:relative;}
	.wraps .wrap{width:100%;position:relative;border-bottom:1px solid #eee;padding:10px 10px 10px 10px;}
	.wraps .wrap:last-child{border:none;}
	.wraps .wrap  .info-name{font-size:1.6rem;color:#555;}
	.wraps .wrap .wrap .my-header-info .info-other{font-size:1.2rem;color:#999;}
	.wraps .wrap .next{width:25px;height:25px;position:absolute;right:10px;top:10px;}
	.wraps .wrap .wrap-img{width:25px;position:relative;top:-2px;}
	.wraps .wrap span{font-size:1.4rem;color:#999;margin-left:15px;}
</style>
<script></script>