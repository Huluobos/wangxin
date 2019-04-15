<template>
<div class="box" :style="'height:'+pulicWidth*0.1173+'px'">
    <div class="headerBar" :style="'height:'+pulicWidth*0.1173+'px'" >
        <mt-header :title='title'>
            <router-link to="" slot="left" v-if="$route.name != '' && $route.path != '/tongZhi' && $route.name != '我的党建'&& $route.name != '个人信息'">
                <mt-button icon="back" @click="$router.back()"></mt-button>            
            </router-link>
            <router-link to="/myDj" slot="left" v-if="$route.name =='个人信息'">
                <mt-button icon="back"></mt-button>                
            </router-link>
            <mt-button slot="right" v-if="$route.name =='个人信息'" @click="changeRoute">编辑</mt-button>
        </mt-header> 
    </div>
</div>
    
</template>

<script>
export default {
  name: 'headerBar',
  computed:{
      title(){
        return this.$route.name    
      },
  },
  data(){
      return{
          pulicWidth:""
      }
  },
  methods:{
      //跳转路由到修改页面
      changeRoute(){
          this.$router.push("/myDj/information/update")
      },
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

<style>

</style>
<style scoped>
.headerBar{
    
    z-index: 99999;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    /* background-color:rgb(197,2,6) */
}
.mint-header{
    height: 100%;
    padding:5px;
    background-color:rgb(197,2,6) 
}    
</style>
