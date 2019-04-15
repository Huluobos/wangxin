<template>
  <div class="content">
    <div class="up">
      <div class="pic">
        <img :src="headPic" alt="" v-if="headPic">
        <img :src="headPic" alt="" v-else>
      </div>
      <div class="username">
        <span v-if="userName" style="color:#fff">{{userName}}</span>
        <router-link to="/login" v-else>
          你还没有登录，请登录
        </router-link>
        
      </div>
    </div>
    <div class="center">
      <div class="box" @click="isLoginA">
        <router-link to="">
            <img src="../../static/111.png" alt="">
            <span>个人信息</span>
            <img src="../../static/jiao.png" alt="">
        </router-link>
      </div>
      <div class="box" @click="isLoginB">
        <router-link to="">
            <img src="../../static/lhjficon.png" alt="">
            <span>个人量化积分</span>
            <img src="../../static/jiao.png" alt="">
        </router-link>
      </div>
      <div class="box" @click="isLoginC">
        <router-link to="">
            <img src="../../static/pwdicon.png" alt="">
            <span>修改密码</span>
            <img src="../../static/jiao.png" alt="">
        </router-link>
      </div>
      <div class="box" @click="isLoginD">
        <router-link to="">
            <img src="../../static/111.png" alt="">
            <span>党费缴纳</span>
            <img src="../../static/jiao.png" alt="">
        </router-link>
      </div>
    </div>
    <div class="down">
      <mt-button type="danger" @click="isLoginE">退出登录</mt-button>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "./coms/Tabbar"
import { Toast } from 'mint-ui';


export default {
  name: 'myDj',
  components:{
    Tabbar:Tabbar
  },
  data(){
    return{   
         userName:"",
         headPic:"http://oowantxlb.bkt.clouddn.com/notDel/icon_default.png",
    }
  },
  methods:{
    userGet(){
          this.$axios.get("userGet").then(res=>{
              this.userName =res.data.userName
              this.headPic =res.data.headPic
          })
    },
    isLogin(){
       this.$axios.get("panDuan").then(res=>{
        // console.log(res)
        if(res.code==200){
          this.userGet()
        }
      })
    },
    isLoginA(){
       this.$axios.get("panDuan").then(res=>{
        // console.log(res)
        if(res.code==200){
          this.$router.push("/myDj/information")
        }else{
           Toast({
              message: res.msg,
              position: 'bottom',
              duration: 5000
            });
            setTimeout(()=>{
              this.$router.push("/login")
            },2000)
        }
      })
    },
    isLoginB(){
       this.$axios.get("panDuan").then(res=>{
        // console.log(res)
        if(res.code==200){
          this.$router.push("/myDj/jf")
        }else{
           Toast({
              message: res.msg,
              position: 'bottom',
              duration: 5000
            });
            setTimeout(()=>{
              this.$router.push("/login")
            },2000)
        }
      })
    },
    isLoginC(){
       this.$axios.get("panDuan").then(res=>{
        // console.log(res)
        if(res.code==200){
          this.$router.push("/myDj/changePwd")
        }else{
           Toast({
              message: res.msg,
              position: 'bottom',
              duration: 5000
            });
            setTimeout(()=>{
              this.$router.push("/login")
            },2000)
        }
      })
    },
    isLoginD(){
       this.$axios.get("panDuan").then(res=>{
        // console.log(res)
        if(res.code==200){
          this.$router.push("/myDj/money")
        }else{
           Toast({
              message: res.msg,
              position: 'bottom',
              duration: 5000
            });
            setTimeout(()=>{
              this.$router.push("/login")
            },2000)
        }
      })
    },
    isLoginE(){
       this.$axios.get("panDuan").then(res=>{
       
        if(res.code==200){
         this.outLogin()
        }else{
           Toast({
              message: res.msg,
              position: 'bottom',
              duration: 5000
            });
            setTimeout(()=>{
              this.$router.push("/login")
            },2000)
        }
      })
    },
    outLogin(){
      this.$axios.get("outLogin").then(res=>{
         if(res.code ==200){
           Toast({
              message: res.msg,
              position: 'bottom',
              duration: 5000
            });
            setTimeout(()=>{
              this.$router.push("/login")
            },1500)
            
         }else{
           Toast({
              message: res.msg,
              position: 'bottom',
              duration: 5000
            });
         }
         
      })
    },

  },
  created(){
    this.isLogin()
  }
}
</script>

<style scoped>

.up{
  height: 8.79375rem;
  background-color: #c50206!important;
}
.up .pic{
  width: 100%;
  height: 6.5375rem;
  text-align: center;
}
.up .pic img{
    margin-top: 2.279875rem;
    width: 3.9078125rem;
    height: 3.9078125rem;
    border-radius: 50%;
}
.up .username{
  line-height: 1.5;
  text-align: center;
}
.up .username a{
  color: #fff;
  font-size: 12px;
  text-decoration: none;
  font-weight: 500;
  font-family: normal;
}
.center{
  padding: 1px 0;
  margin-bottom: 20px;
  height: 13.1875rem;
}
.center .box a{
  display: block;
  border-bottom: 1px solid #ddd;
  padding: 1rem 3.375rem;
  font-size: 16px;
  height: 20px;
  position: relative;
  text-decoration: none;
}
.center .box a img:nth-child(1){
  display: block;
  position: absolute;
  top: 10px;
  left: 11px;
}
.center .box a img:nth-child(3){
  display: block;
 
 position: absolute;
  top: 20px;
  right: 11px;
}
.down {
  padding:20px 10px;
}
.down button{
  width: 100%;
  height: 2.935rem;
  font-size: 1rem;
  background-color: #ef473a;
}
</style>
