<template>
    <div class="content">
        <div class="box">
          <span>旧密码：</span><input type="password" v-model="pwdOld">
          <span>新密码：</span><input type="password" v-model="pwdNew">
          <span>确认密码：</span><input type="password" v-model="pwd2">
          <mt-button size="large" type="danger" @click="changePwd">确定</mt-button>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
// import { setTimeout } from 'timers';
export default {
  data(){
      return{
          pwdOld:"",
          pwdNew:"",
          pwd2:"",
      }
  },
  methods:{
      changePwd(){0
          if(this.pwdNew!=this.pwd2){
            Toast({
                message: '密码确认失败',
                position: 'bottom',
                duration: 3000
            });
          }else{
              this.$axios.post("updatePwd",{pwdOld:this.pwdOld,pwdNew:this.pwdNew}).then(res=>{
                Toast({
                    message: res.msg,
                    position: 'bottom',
                    duration: 3000
                });
                setTimeout(()=>{   
                    if(res.code ==200){
                        this.$axios.get("outLogin").then(ress=>{
                            // console.log(ress)
                            if(ress.code ==200){
                                this.$router.push("/login")
                            }
                        })   
                    }
                },2000)
                
              })
          }
      },

  }
}
</script>
<style scoped>

.box{
    position: fixed;
    top: 20%;
    left: 0;
    right: 0;
    width: 100%;
    padding: 2rem;
    text-align: center;
    box-sizing: border-box;
}
.box span{
    display: block;
    font-size: 1.2rem;
    line-height: 2rem;
    height: 2rem;
    color: #666;
    text-align: left;
}
.box input{
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 1rem;
}

</style>
