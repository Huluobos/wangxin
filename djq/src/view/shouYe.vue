<template>
  <div class="content">
    <div class="login" v-show="show" @click="goLogin" :style="'font-size:'+pulicWidth*0.037+'px'+';'+'height:'+pulicWidth*0.1173+'px'">
      登录
    </div>
    <div class="slider" :style="'height:'+pulicWidth*0.4966+'px'">
        <mt-swipe :auto="2000" @change="handleChange" :defaultIndex=1 >
            <mt-swipe-item v-for="item in silders" :key="item.index">
             <router-link :to="item.type">
                <img :src="item.pic" alt="">
                <span class="title" :style="'height:'+pulicWidth*0.063+'px'+';'+'font-size:'+pulicWidth*0.032+'px'+';'+'line-height:'+pulicWidth*0.063+'px'">{{item.title}}</span>
             </router-link>  
            </mt-swipe-item>
        </mt-swipe>
    </div>
    <div class="nav" :style="'height:'+pulicWidth*0.52267+'px'">
      <div class="row">
          <router-link class="items" to="/eyes">
              <div class="item">
                <img src="../../static/shouye/icon_01.png" alt="">
              </div>
              <div class="text" :style="'font-size:'+pulicWidth*0.037+'px'">
                  信工新闻眼
              </div>
          </router-link>
          <router-link class="items" to="/zzsh">
              <div class="item">
                <img src="../../static/shouye/icon_02.png" alt="">
              </div>
              <div class="text" :style="'font-size:'+pulicWidth*0.037+'px'">
                  掌上组织生活
              </div>
          </router-link>
          <router-link class="items" to="/yhd">
              <div class="item">
                <img src="../../static/shouye/icon_03.png" alt="">
              </div>
              <div class="text" :style="'font-size:'+pulicWidth*0.037+'px'">
                  党员云互动
              </div>
          </router-link>
      </div>
      <div class="row">
          <router-link class="items" to="/ydt">
              <div class="item">
                <img src="../../static/shouye/icon_04.png" alt="">
              </div>
              <div class="text" :style="'font-size:'+pulicWidth*0.037+'px'">
                  党建一点通
              </div>
          </router-link>
          <router-link class="items" to="/lsf">
              <div class="item">
                <img src="../../static/shouye/icon_05.png" alt="">
              </div>
              <div class="text" :style="'font-size:'+pulicWidth*0.037+'px'">
                  党员亮身份
              </div>
          </router-link>
          <router-link class="items" to="/today">
              <div class="item">
                <img src="../../static/shouye/icon_06.png" alt="">
              </div>
              <div class="text" :style="'font-size:'+pulicWidth*0.037+'px'">
                  党史上的今天
              </div>
          </router-link>
      </div>
    </div>
    <div class="pic">
      <img src="../../static/shouye/banner01.png" alt="">
    </div>
    <div class="table" :style="'height:'+pulicWidth*0.437+'px'+';'+'margin-bottom:'+pulicWidth*0.12+'px'">
        <div class="table-cell"></div>
        <div class="table-cell">
            <router-link to="/ssx"></router-link>
            <router-link to="/zdjs"></router-link>
        </div>
        <div class="table-cell">
            <router-link to="/sdp"></router-link>
            <router-link to="/tshd"></router-link>
        </div>
    </div>
    <div class="logo" :style="'height:'+pulicWidth*0.1173+'px'">
      <img src="../../static/shouye/logo.png" alt="">
    </div>
    <Tabbar></Tabbar>
  </div>

</template>

<script>
import Tabbar from "./coms/Tabbar";

 export default {
  name: 'shouYe',
  components:{
    Tabbar:Tabbar
  },
  data(){
    return{
      silders:[],
      show:true,
      pulicWidth:""
    }
  },
  methods: {
    getWidth(){
      var boxWidth = document.body.clientWidth
      this.pulicWidth = boxWidth
    },



    handleChange(index) {},
    getSlider(){
      this.$axios.get("getSlider").then((res)=>{
      //  console.log(res.data)
       for(var i=0;i<res.data.length;i++){
         if(res.data[i].type==0){
           res.data[i].type = "/eyes/detail?_id="+res.data[i]._id
         }
         if(res.data[i].type==1){
           res.data[i].type = "/ydt/detail?_id="+res.data[i]._id
         }
         if(res.data[i].type==2){
           res.data[i].type = "/lsf/detail?_id="+res.data[i]._id
         }
         if(res.data[i].type==3){
           res.data[i].type = "/ssx/detail?_id="+res.data[i]._id
         }
         if(res.data[i].type==4){
           res.data[i].type = "/sdp/detail?_id="+res.data[i]._id
         }
         if(res.data[i].type==5){
           res.data[i].type = "/zdjs/detail?_id="+res.data[i]._id
         }
         if(res.data[i].type==6){
           res.data[i].type = "/tshd/detail?_id="+res.data[i]._id
         }
         if(res.data[i].type==7){
           res.data[i].type = "/zzxx/detail?_id="+res.data[i]._id
         }
         if(res.data[i].type==8){
           res.data[i].type = "/tongZhi/detail?_id="+res.data[i]._id
         }
       }
      this.silders = res.data
      // console.log(this.silders)
      })
    },
    
    isLogin(){
       this.$axios.get("panDuan").then(res=>{
        if(res.code==200){
          this.show = false
        }
      })
    },

    goLogin(){
      this.$router.push("/login")
    }
  },
  created(){
    this.getWidth()
    this.getSlider()
    this.isLogin()
  }
}
</script>

<style scoped>
.login{
  position: fixed;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999999;
  color: #fff;
  padding-right: .5rem;
}
.logo{
  width: 40%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999999;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.logo img{
  height: 80%;
  display: block;
}
.content{
  height: 100%
}
.slider{
  /* height: 11.639375rem; */
  position: relative;
}
.slider img{
  height: 100%;
  width: 100%;
}
.slider .title{
  z-index: 9999;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  /* height: 1.5rem; */
  
  width: 100%;
  background-color:rgba(0, 0, 0, .5);
  color: #f1f1f1;
  padding-left: 1rem;
  font-weight: 300;
  /* font-size: 12px; */
}
.nav{
  background-image: url('../../static/shouye/bt_bg.png'); 
  background-size: contain;
  /* 设置大小 */
}
.nav .row{
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
}
.nav .row a{
  text-decoration: none;  
  display: block;
  height: 100%;
} 
.nav .row .items{
  width: 33.33%;
  
} 
.nav .row .items .item{
  /* text-align: center; */
  height: 75%;
  display: flex;
  justify-content: space-around;
  align-items: center;
} 
.nav .row .items .item img{
  width: 50%;
} 
.nav .row .items .text{
  width: 100%;
  height: 25%;
  color: #666;
  
  text-align: center;
  line-height: 1;
} 
.pic{
  width: 100%;
}
.pic img{
  display: block;
  width: 100%;
}
.table{
  width: 100%;
  /* height: 10.3rem; */
  background-image: url('../../static/shouye/table01.png'); 
  background-size: 100% 100%;
  
}
.table-cell{
  width: 33.33%;
  height: 100%;
  float: left;
}
.table-cell a{
  display: block;
  height: 50%;
  width: 100%;
}
</style>
