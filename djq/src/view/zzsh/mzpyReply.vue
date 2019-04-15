<template>
  <div class="content">
      <div class="top">
          <div class="info">
                <span class="userName">
                    {{userName}}
                </span>
                <span class="title">的个人总结</span>
          </div>
          <img :src="pic" alt="">
      </div>
      <div class="down">
            <mt-radio
                v-model="num"
                :options="['优', '良', '中','差']">
            </mt-radio>
            <mt-button
            type="danger"
            size="large"
            @click="addReply">
                提交
            </mt-button>
      </div>
      
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { setTimeout } from 'timers';
export default {
  data(){
      return{
          pic:"",
          userName:'',
          num:"",  
          _id:"",
      }
  },
  methods:{
      getGrzj(){
          var userId = this.$route.query.userId
          this.$axios.get("getGrzj",{userId:userId,type:0}).then(res=>{
            //   console.log(userId)
            //   console.log(res)
              if(res.code==500){
                   Toast({
                        message: "服务器出错",
                        position: 'bottom',
                        duration: 1500
                    });
              }
              if(res.code ==200){
                 this.pic = res.data[0].pic
                 this.userName = res.data[0].userName
                 this._id = res.data[0]._id
              }
          })
      },
      addReply(){
          if(this.num == "优"){
              this.num = "3"
          }else if(this.num == "良"){
              this.num = "2"
          }else if(this.num == "中"){
             this. num = "1"
          }else if(this.num == "差"){
              this.num = "0"
          }
        //   console.log(this.num)
          if(this.num == ""){
               Toast({
                    message: "请先评价后再提交",
                    position: 'bottom',
                    duration: 1500
                });
                return
          }
          if(this.num == "4"){   //防止重复评价
               Toast({
                    message: "您已评价过啦",
                    position: 'bottom',
                    duration: 1500
                });
                return
          }
          this.$axios.post("addReply",{num:this.num,_id:this._id}).then(res=>{
             this.num = "4"
             Toast({
                    message: res.data,
                    position: 'bottom',
                    duration: 1500
                });
             setTimeout(()=>{
                this.$router.back()
             },1500)
                
               
          })
      }
  },
  created(){
      this.getGrzj()
  },
}
</script>

<style scoped>

.top{
    padding: 1rem 0;
    font-size: 1.2rem;
}
.top .info{
    margin-bottom: 1rem;
    text-align: center;
}
.top img{
    width: 100%;
}
.down{
    width: 100%;
    margin-top: 3rem;
}
.mint-radiolist{
    display: flex;
    justify-content: space-around;
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;
    margin-bottom: 1rem;
}
.mint-button{
    width: 80%;
    margin: 0 auto;
}


</style>
