<template>
<div class="content">
    <div class="pic" :style="'height:'+boxWidth*0.5+'px'">
      <img src="../../../static/timg.jpg" alt="">
    </div>
    <div class="nav">
        <div class="row">
            <button class="items" @click="toZzxx">
                <div class="item">
                    <img src="../../../static/icon1.png" alt="">
                </div>
                <div class="text">
                    政治学习
                </div>
            </button>
            <button @click="isLoginA" class="items">
                <div class="item">
                    <img src="../../../static/icon2.png" alt="">
                </div>
                <div class="text">
                    思想汇报
                </div>
            </button>
             <button class="items" to="/xdzj" @click="isLoginB">
              <div class="item">
                <img src="../../../static/icon3.png" alt="">
              </div>
              <div class="text">
                  心得总结
              </div>
            </button>
        </div>
        <div class="row">
            <button class="items" @click="isLoginC">
                <div class="item">
                    <img src="../../../static/icon4.png" alt="">
                </div>
                <div class="text">
                    民主评议
                </div>
            </button>
             <button class="items" @click="toMap">
              <div class="item">
                <img src="../../../static/icon5.png" alt="">
              </div>
              <div class="text cc">
                  流动党员找组织
              </div>
            </button>
             <button class="items" >
              <div class="item">     
              </div>
              <div class="text">  
              </div>
            </button>
        </div>
        
    </div>
   
</div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            boxWidth:""
        }
    },
  methods:{
      getWidth(){
          this.boxWidth = document.body.clientWidth
        //   console.log(this.boxWidth)
      },
      toMap(){
        this.$router.push("/map")
      },
      toZzxx(){
        this.$router.push("/zzxx")
      },
       isLoginA(){
        this.$axios.get("panDuan").then(res=>{
          if(res.code == 400){
           Toast({
              message: res.msg,
              position: 'bottom',
              duration: 5000
            });
            this.$router.push("/login")
          }else{
              this.$router.push("/sxhb")
          }
        })
      },
       isLoginB(){
        this.$axios.get("panDuan").then(res=>{
          if(res.code == 400){
           Toast({
              message: res.msg,
              position: 'bottom',
              duration: 5000
            });
            this.$router.push("/login")
          }else{
              this.$router.push("/xdzj")
          }
        })
      },
       isLoginC(){
        this.$axios.get("panDuan").then(res=>{
          if(res.code == 400){
           Toast({
              message: res.msg,
              position: 'bottom',
              duration: 5000
            });
            this.$router.push("/login")
          }else{
              this.$router.push("/mzpy")
          }
        })
      },

  },
  created(){
      this.getWidth()
  }

}
</script>

<style scoped>

.content .pic{
    width: 100%;
}
.content .pic img{
    display: block;
    width: 100%;
}
.nav .row{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav .row a{
  text-decoration: none;  
} 
.nav .row .items{
  width:33.33%;
  padding: 15px 20px;
  font-size: 14px;
  color: #666;
  border: none;
  background-color: #fff;
} 
.nav .row .items .item{
  display: flex;
  justify-content: space-around;
  
} 
.nav .row .items .item img{
  display: block;
  width: 5.3164375rem;
  height:5.3164375rem;
  margin-bottom: 9px;
} 

.nav .row .items .text{
  width: 100%;
  color: #666;
  text-align: center;
  line-height: 20px;
  height: 20px;
} 
button{
    outline-style: none;
}

</style>
