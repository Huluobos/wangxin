<template>
  <div class="content">
    <el-upload
      class="avatar-uploader"
      action="https://upload-z1.qiniup.com"
      :show-file-list="false"
      :on-success="upload"
      :data="{token:token}"
      :before-upload="beforeAvatarUpload"
      :on-progress="text">
      <img v-if="formData.pic" :src="formData.pic" class="avatar" style="z-index:10"> 
      <i v-else class="el-icon-plus avatar-uploader-icon" style="z-index:-10"></i>
    </el-upload>
    <el-progress :percentage="percentage" v-if="percentage" ></el-progress>
    <div class="btn">
      <mt-button type="danger" size="large" @click="uploadImg">上传心得总结</mt-button>      
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
      return{
        formData:{
            pic:"", 
            type:2
        },
        token:"",
        percentage:0
      }
    },
   
    methods:{
      getToken() {   //阿贾克斯获取token 
          this.$axios.qiniuGet().then(res => {
              this.token = res.data;  
              // console.log(this.token)   
          })
      },

      //上传成功时的钩子
      upload(res){
        //上传的图片向添加处反馈
        this.formData.pic = "http://image.yaojunrong.com/"+res.key
      },
        //上传的限制函数
      beforeAvatarUpload(file) {
        const isType = file.type === 'image/jpeg' || 'image/png';
        const isLt2M = file.size / 1024 / 1024 / 1024 < 2;
        if (!isType) {
          Toast('上传图片只能是 JPG或者PNG 格式!');
        }
        if (!isLt2M) {
          Toast('上传图片大小不能超过 20MB!');
        }
        return isType && isLt2M;
      },

      //上传到mongo数据库的函数，通过button调用
      uploadImg(){
        this.$axios.post("addTieZi",this.formData).then(res=>{
          if(res.code == 500 ||res.code == 400){
            Toast({
              message: res.msg,
              position: 'bottom',
              duration: 5000
            });
            return
          }
          if(res.code == 200){
             Toast({
              message: res.msg,
              position: 'bottom',
              duration: 5000
            });
             // 开始增加积分
                    this.$axios.post("addJf",{jfNum:2,jfName:"上传心得总结"}).then(resolve=>{
                        // console.log(resolve)
                    })
            // 增加积分结束
            return
          }
        })
      },
      
      text(ProgressEvent, file, fileList){
        // console.log(ProgressEvent)
        this.percentage = ProgressEvent.percent
      }



    },
    created(){
       this.getToken();  
    },
} 
</script>
<style scoped>

   .avatar-uploader .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
   
  }
  .avatar-uploader{
   margin-bottom: 2rem;   
   margin-top: 2rem; 
   display: flex;
   justify-content: space-around;    
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 2px dashed #d9d9d9;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .btn{
    position: fixed;
    bottom: 10%;
    left: 0;
    right: 0;
    width: 100%;
  }
  .mint-button{
    width: 80%;
    margin: 0 auto;
  }
  .el-progress-bar{
    text-align: center;
  }
  .el-progress__text{
    display: block;
    margin: 0 auto;
  }

</style>
