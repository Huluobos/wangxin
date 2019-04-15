<template>
<div class="add">
  <el-form ref="form" :model="formData" label-width="80px">
    <el-form-item label="管理员账户">
      <el-input v-model="formData.adminName"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formData.adminPwd"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="danger" @click="submit" >
          保存
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
        adminName:"",
        adminPwd:"",
      },
     
    } 
  }, 
  //方法集合
  methods:{
    submit(){
      this.$axios.post("zhuceAdmin",this.formData).then((res)=>{
        if(res.code ==200){
          this.$message({
              type: 'success',
              message: '管理员添加成功'
          });
        }else{
          this.$message({
              type: 'success',
              message: '添加失败'
          });
        }
        setTimeout(()=>{
          this.$router.push("/admin/list")
        },1500)
      })
    }, 
  },
  //生命周期 自动调用函数方法
  created() {
    
  },     
}
</script>
<style scoped>
.el-input{
    width: 30%;
}
</style>


