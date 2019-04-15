<template>

  <div class="Tabbar"  :style="'height:'+pulicWidth*0.12+'px'">
        <router-link to="/shouYe" :class="{active:$route.name===''}">
            <div class="box">
              <i class="iconfont icon-dangwugongkai" :style="'font-size:'+pulicWidth*0.0533+'px'"></i>
              <h2 :style="'font-size:'+pulicWidth*0.032+'px'"> 首页 </h2>
            </div>
        </router-link>
        <router-link to="/tongZhi" :class="{active:$route.name==='通知早知道'}">
          <div class="box">
            <i class="iconfont icon-dangwugongkai" :style="'font-size:'+pulicWidth*0.0533+'px'"></i>
            <h2 :style="'font-size:'+pulicWidth*0.032+'px'">通知早知道</h2>
          </div>
        </router-link>
        <router-link  to="/myDj"  :class="{active:$route.name==='我的党建'}">
          <div class="box">
            <i class="iconfont icon-dangwugongkai" :style="'font-size:'+pulicWidth*0.0533+'px'"></i>
            <h2 :style="'font-size:'+pulicWidth*0.032+'px'">我的党建</h2>
          </div>
        </router-link>
    </div>

    
</template>

<script>


export default {
  name: 'Tabbar',
   data(){
      return{
          pulicWidth:""
      }
  },
  methods:{
      getWidth(){
      var boxWidth = document.body.clientWidth
      this.pulicWidth = boxWidth
    },
      
      
  },
  created(){
      this.getWidth()
  }
}
</script>

<style scoped>

.Tabbar{
    background-color: #fff;
    height:100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: rgb(153, 153, 153);
    z-index: 9999;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0; 
  }
.Tabbar h2{
    margin: 0;
    /* font-size: 12px; */
}
.Tabbar .box{
  text-align: center;
  width: 100%;
}
a{
  text-decoration: none;
  width: 33.33%;
}
.active{
  color:rgb(239, 71, 58);
  margin-top: -2px;
  color: #ef473a;
  border: 0 solid #ef473a;
  border-top-width: 2px;
}
</style>
