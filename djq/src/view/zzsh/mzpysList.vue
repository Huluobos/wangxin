<template>
  <div class="content">
        <div class="box"  v-for="item in formData" :key="item.index" @click="isGrzj(item.userId)">
            <mt-cell :title="item.userName" style="border-bottom:1px solid #ddd;">
                <span v-if="item.dzb==0">信息工程学院教工第一党支部</span>
                <span v-if="item.dzb==1">信息工程学院教工第二党支部</span>
                <span v-if="item.dzb==2">信息工程学院学生第一党支部</span>
                <span v-if="item.dzb==3">信息工程学院学生流动党支部（北京）</span>
                <img slot="icon" :src="item.headPic" width="24" height="24">
            </mt-cell>
        </div>
        <div class="txt" @click="backRouter">
            {{text}}
        </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
export default {
  data(){
      return{
          formData:[],
          text:""
      }
  },
  methods:{
      getUsers(){
          this.$axios.get("usersGet",{dzb:this.$route.query.dzb}).then(res=>{
            //   console.log(res.data)
              if(res.data.length == 0){
                 this.text = "本党支部暂无用户，请返回上一页查看其它党支部"
              }else{
                this.formData = res.data
              }
          })
      },
      isGrzj(userId){
          this.$axios.get("getGrzj",{userId:userId,type:0}).then(res=>{
            // console.log(userId)
            //   console.log(res)
              if(res.code==500){
                   Toast({
                        message: "服务器出错",
                        position: 'bottom',
                        duration: 5000
                    });
                    return
              }
              if(res.data.length ==0){
                  Toast({
                        message: "该用户尚未上传个人总结",
                        position: 'bottom',
                        duration: 5000
                    });
                    return
              }
              if(res.data.length==1){
                  if(res.data[0].check=="false"){
                       Toast({
                        message: "该用户尚未上传个人总结",
                        position: 'bottom',
                        duration: 5000
                    });
                    return
                  }else{
                       //    判断的有无个人总结的最后 开始判断是否评价过 
                        if(res.data[0].reply.length==0){
                            this.$router.push("/mzpy/mzpys/detail?type=0&userId="+userId)
                        }else{
                            for(var j=0;j<res.data[0].reply.length;j++){
                                if(res.data[0].reply[j].userId==userId){
                                    Toast({
                                        message: "该党员已被您评论过！",
                                        position: 'bottom',
                                        duration: 1500
                                    });
                                    return
                                }else{
                                    this.$router.push("/mzpy/mzpys/detail?type=0&userId="+userId)
                                }
                            }
                        }
                       
                  } 
              }
          })
      },
      backRouter(){
          this.$router.back()
      }
  },
  created(){
      this.getUsers()
  }

}
</script>
<style scoped>

a{
    text-decoration: none;
}
.txt{
   position: fixed;
   top: 40%;
    left: 0;
    right: 0;
    text-align: center;
}
</style>
