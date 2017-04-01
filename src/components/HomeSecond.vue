<template>
	<div class="pet">
		<div class="pet-wrap" v-for="data in datas">
			<router-link :to="{name:'petDetail',params:{id:data.id}}">
				<div class="pet-wrap-img">
					<img :src="data.coverImg" alt="">
					<p class="pet-wrap-title">{{data.title}}</p>
				</div>
				<div class="pet-wrap-content">
					<span class="topic">话题</span>
					<span class="topic-content">| {{data.topic}}</span>
				</div>
				<div class="pet-wrap-bottom">
					<span>浏览 {{data.viewNum}}</span>
					<span>点赞 {{data.zanNum}}</span>
				</div>
			</router-link>
		</div>
	</div>
</template>
<style>
	.pet{margin-bottom:65px;}
	.pet-wrap{width:100%;background-color:#fff;margin-top:10px;padding:15px 0;}
	.pet-wrap .pet-wrap-img{width:90%;margin:auto;position:relative;border-radius:5px;overflow: hidden;}
	.pet-wrap .pet-wrap-img img{width:100%;}
	.pet-wrap .pet-wrap-title{width:100%;position:absolute;bottom:0;background:rgba(0,0,0,0.4);color:#fff;padding:3px 8px;}
	.pet-wrap .pet-wrap-content{width:90%;margin:5px auto;font-size:1.2rem;}
	.pet-wrap .pet-wrap-content .topic{color:#ed1c25;}
	.pet-wrap .pet-wrap-content .topic-content{color:#555;}
	.pet-wrap-bottom{width:85%;margin:0 auto;position:relative;text-align:right}
	.pet-wrap-bottom span{padding:3px 8px;border:1px solid #eee;border-radius:30px;color:#999;}
</style>
<script>
	export default{
		data(){
			return {
				datas:[]
			}
		},
		created(){
			this.fetchData();
		},
		methods:{
			fetchData(){
				this.$http.get('../../static/json/json.json').then((response)=>{
					this.datas = response.data.petData;;
				})
			}
		}
	}
</script>