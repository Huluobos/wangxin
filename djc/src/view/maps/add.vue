<template>
<div class="add">
  <el-form ref="form" :model="formData" label-width="80px">
    <el-form-item label="党支部">
      <el-input v-model="formData.text"></el-input>
    </el-form-item>
    <el-form-item label="经度">
      <el-input v-model="formData.jd"></el-input>
    </el-form-item>
    <el-form-item label="纬度">
      <el-input v-model="formData.wd"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="danger" @click="submit"  v-if="$route.name == '党支部坐标添加页'">
          保存
      </el-button>
      <el-button type="danger" @click="saveEdit" v-if="$route.name =='党支部坐标编辑'">
          保存更改
      </el-button>
    </el-form-item> 
  </el-form>
</div>
  
</template>


<script>

export default {
  name: 'add',
  data(){
    return{
      formData:{
        text:"",
        jd:"",
        wd:"",
      },
     
    } 
  }, 
  //方法集合
  methods:{
    submit(){
      this.$axios.post("addMaps",this.formData).then((res)=>{
        if(res.code ==200){
          this.$message({
              type: 'success',
              message: '坐标添加成功'
          });
        }else{
          this.$message({
              type: 'success',
              message: '添加失败'
          });
        }
        setTimeout(()=>{
          this.$router.push("/maps/list")
        },1500)
      })
    },
    getDate(){
      this.$axios.get("getMaps",{_id:this.$route.query._id}).then((res)=>{
        this.formData = res.data[0]
      })
    },
    saveEdit(){
      var object = this.formData
      var id = {}
      object.id = this.$route.query.id
      this.$axios.post("updataMaps",object).then((res)=>{
          if(res.code ==200){
            this.$message({
              type: 'success',
              message: '修改成功'
          });
        }else{
          this.$message({
              type: 'success',
              message: '修改失败'
          });
        }
        setTimeout(()=>{
          this.$router.push("/maps")
        },1500)
      })
      var params = this.formData
      id = this.$route.query.id
    } , 
  
  },
  //生命周期 自动调用函数方法
  created() {
    if(this.$route.name == "党支部坐标编辑"){
      this.getDate();
    }
  },
  watch:{
    $route(to,from,next){
      if(to.name == '党支部坐标添加页'){
        this.formData.text =""
        this.formData.jd =""
        this.formData.wd =""
      }
    }
  }      
}
</script>





<style scoped>
.el-input{
      width: 30%;
}
</style>
