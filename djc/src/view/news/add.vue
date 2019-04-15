<template>
<div class="add">
  <el-form ref="form" :model="formData" label-width="80px">
    <el-form-item label="标题">
      <el-input v-model="formData.title"></el-input>
    </el-form-item>
    <el-form-item label="作者">
      <el-input v-model="formData.author"></el-input>
    </el-form-item>


   <el-form-item label="上传头图">
      <el-upload class="avatar-uploader" action="https://upload-z1.qiniup.com" 
        :show-file-list="false" :on-success="upload" :data="{token:token}">
        <img v-if="formData.pic" :src="formData.pic" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon" style="line-height: 178px"></i>
      </el-upload>
    </el-form-item>

   
    <el-form-item label="上传头图 URL">
      <el-input v-model="formData.pic"></el-input>
    </el-form-item> 

    <el-form-item label="富文本">
      <editor v-model="formData.content" @getText="gettext"></editor>
     
    </el-form-item>

    <el-form-item label="轮播图">

        <div>
          <el-radio v-model="formData.slider" label="1" border>作为轮播图</el-radio>
          <el-radio v-model="formData.slider" label="0" border>备选项不作为轮播图</el-radio>
        </div>
    </el-form-item>


    <el-form-item label="类型">
      <div>
          <el-radio v-model="formData.type" label="0" border>信工新闻眼</el-radio>
          <el-radio v-model="formData.type" label="1" border>政治学习</el-radio>
          <el-radio v-model="formData.type" label="2" border>党建一点通</el-radio>          
          <el-radio v-model="formData.type" label="3" border>党员亮身份</el-radio>
          <el-radio v-model="formData.type" label="4" border>随时随地学</el-radio>  
          <el-radio v-model="formData.type" label="5" border>随时随地拍</el-radio>    
          <el-radio v-model="formData.type" label="6" border>制度建设</el-radio> 
          <el-radio v-model="formData.type" label="7" border>特色活动</el-radio> 
          <el-radio v-model="formData.type" label="8" border>通知早知道</el-radio>             
                      
      </div>
    </el-form-item>

    <el-form-item>
      <el-button type="danger" @click="submit"  v-if="$route.name == '新闻添加页'">
          保存
      </el-button>
      <el-button type="danger" @click="saveEdit" v-if="$route.name =='新闻编辑'">
          保存更改
      </el-button>
    </el-form-item> 
  </el-form>
</div>
  
</template>


<script>
import editor from "@/components/wangEditor"

export default {
  name: 'add',
  components:{
    editor,
  },
  data(){
    return{
      formData:{
        
        title:"",
        author:"",
        pic:"",
        content:"",
        slider:"",
        type:"",
      },
      token:""   
    } 
  }, 
  //方法集合
  methods:{

    upload(res){
      //上传的图片向添加处反馈
        this.formData.pic = "http://image.yaojunrong.com/"+res.key
    },
    gettext(val){
      this.formData.content = val;
    },
     getToken() {   //阿贾克斯获取token 
          this.$axios.qiniuGet().then(res => {
              this.token = res.data;     
          })
    },   
    submit(){
      this.$axios.post("addNews",this.formData).then((res)=>{
        if(res.code ==200){
          this.$message({
              type: 'success',
              message: '新闻添加成功'
          });
        }else{
          this.$message({
              type: 'success',
              message: '新闻添加失败'
          });
        }
        setTimeout(()=>{
          this.$router.push("/news/list")
        },1500)
      })
    },
    getDate(){
      this.$axios.get("getIdNews",{_id:this.$route.query._id}).then((res)=>{
        this.formData = res.data
       
      })
    },
    saveEdit(){
      var object = this.formData
      var _id = {}
      object._id = this.$route.query._id
      this.$axios.post("updataNews",object).then((res)=>{
          // console.log(res)
          if(res.code ==200){
            this.$message({
              type: 'success',
              message: '新闻修改成功'
          });
        }else{
          this.$message({
              type: 'success',
              message: '新闻修改失败'
          });
        }
        setTimeout(()=>{
          this.$router.push("/news")
        },1500)
      })
      var params = this.formData
      _id = this.$route.query._id
    } , 
  
  },
  //生命周期 自动调用函数方法
  created() {
     this.getToken();  
    if(this.$route.name == "新闻编辑"){
      this.getDate();
    }
  },
  watch:{
    $route(to,from,next){
      if(to.name == '新闻添加页'){
        this.formData.title =""
        this.formData.author =""
        this.formData.pic =""
        this.formData.content =""
        this.formData.contentText =""
      }
    }
  }      
}
</script>

<style>
.el-input__inner{
  width: 500px;
}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
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
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
<style scoped>
  .add{
   padding:30px 0px;
  }
  .el-input{
    width: 30%;
  }
</style>


