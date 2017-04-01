<template>
	<div class="detail">
		<div class="detail-header">
			<img src="../../static/img/icon/back.png" alt="" @click="goBack" class="goBack" />
			<span class="detail-title">{{content.author}}</span>
		</div>
		<div class="detail-cover">
			<img :src="content.coverImg" alt="">
		</div>
		<div class="detail-main">
			<div class="detail-title">{{content.title}}</div>
			<div class="detail-authorInfo">
				<img :src="content.headerImg" alt="">
				<span>{{content.author}}</span>
				<span>2017-3-19</span>
				<span>{{content.zanNum}} 赞 </span>
			</div>
			<div class="detail-content">
				<div>{{content.content}}</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	body{background-color:#fff;}
	.detail{width:100%;}
	.detail-header{width:100%;height:40px;line-height:40px;border-bottom:1px solid #999;position:relative;text-align:center;background-color: #fff;}
	.detail-header .detail-title{font-size:1.4rem;}
	.detail-cover img{width:100%;}
	.goBack{position:absolute;left:0;top:5px;}
	.goBack{width:30px;}
	.detail-main{padding:10px;background-color:#fff;}
	.detail-main .detail-title{font-size:1.6rem;color:#555;}
	.detail-main .detail-authorInfo{width:100%;height:40px;line-height:40px;}
	.detail-main .detail-authorInfo img{width:30px;height:30px;border-radius:50%;}
	.detail-main .detail-authorInfo span{font-size:1.2rem;color:#999;margin-left:10px;position:relative;top:2px;}
	.detail-content{margin-top:10px;font-size:1.4rem;}
</style>
<script>
	export default{
		data(){
			return{
				content:{},
              	// isShowBg:true
			}
		},
		created(){
			this.fetchData();
		},
		methods:{
			goBack(){
				window.history.back();
			},
			fetchData(){
				this.$http.get("../../static/json/json.json").then((response)=>{
					// console.log(response.data.data,this.$route.params.id);
					var _index = this.$route.params.id;
					var datas = response.data.petData;
					var _this = this;
					datas.forEach(function(data){
						if(data.id == _index){
							_this.content = data;
						}
					});
					// console.log(this.content);
				})
			},
		}
	}
</script>