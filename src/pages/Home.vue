<template>
      <div>
            <!-- <div class="bg" v-if="isShowBg">
                  <img src="../../static/img/bg.png" alt="">
            </div> -->
            <div class="header flex">
                  <input type="text" placeholder="搜索"> 
                  <a href="javascript:;"><img src="../../static/img/icon/search.png" alt=""></a>  
            </div>
       	    <router-view></router-view>
            <div class="footer flex">
                  <div @click="selectMenu(1)">
                        <router-link to="/home/life">
                              <div v-if="menu1">
                                  <img src="../../static/img/icon/life.png" />
                                  <p class="menuNoSelect">生活圈</p>  
                              </div>
                              <div v-else>
                                  <img src="../../static/img/icon/life_select.png" />
                                  <p class="menuSelect">生活圈</p>  
                              </div>
                        </router-link>
                  </div>
                  <div @click="selectMenu(2)">
                        <router-link to="/home/pet">
                              <div v-if="menu2">
                                  <img src="../../static/img/icon/diamond.png" />
                                  <p class="menuNoSelect">宠物圈</p>  
                              </div>
                              <div v-else>
                                  <img src="../../static/img/icon/diamond_select.png" />
                                  <p class="menuSelect">宠物圈</p>  
                              </div>
                        </router-link>
                  </div>
                  <div @click="selectMenu(3)">
                        <router-link to="/home/weather">
                              <div v-if="menu3">
                                  <img src="../../static/img/icon/weather.png" />
                                  <p class="menuNoSelect">天气预报</p>  
                              </div>
                              <div v-else>
                                  <img src="../../static/img/icon/weather_select.png" />
                                  <p class="menuSelect">天气预报</p>  
                              </div>
                        </router-link>
                  </div>
                  <div @click="selectMenu(4)">
                        <router-link to="/home/mine">
                              <div v-if="menu4">
                                  <img src="../../static/img/icon/mine.png" />
                                  <p class="menuNoSelect">我的</p>  
                              </div>
                              <div v-else>
                                  <img src="../../static/img/icon/mine_select.png" />
                                  <p class="menuSelect">我的</p>  
                              </div>
                        </router-link>
                  </div>
            </div>
	</div>
</template>
<style>
      .menuNoSelect{color:#555;}
      .menuSelect{color:#1cbc79;}
</style>
<script>
export default{
      data(){
            return {
                  // isShowBg:true
                  menu1:false,
                  menu2:true,
                  menu3:true,
                  menu4:true
            }
      },
      // created(){
      //       var _this = this;
      //       setTimeout(function(){
      //             _this.isShowBg = false;
      //       },2000)
      // },
      methods:{
            selectMenu(flag){
                  if(flag==1){
                        this.menu1 = false;
                        this.menu2 = true;
                        this.menu3 = true;
                        this.menu4 = true;
                  }else if(flag==2){
                        this.menu1 = true;
                        this.menu2 = false;
                        this.menu3 = true;
                        this.menu4 = true;
                  }else if(flag==3){
                        this.menu1 = true;
                        this.menu2 = true;
                        this.menu3 = false;
                        this.menu4 = true;
                  }else{
                        this.menu1 = true;
                        this.menu2 = true;
                        this.menu3 = true;
                        this.menu4 = false;
                  }
            }
      }
}
</script>