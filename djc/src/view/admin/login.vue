
<!-- 管理员登录   -->
<template>
<div class="all">
    <div class="box">
        <div class="header">党建e家后台管理系统</div>
        <el-form ref="form" :model="formData" label-width="90px">
        <el-form-item label="管理员:">
        <el-input v-model="formData.adminName"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
        <el-input v-model="formData.adminPwd" type="password"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="danger" @click="submit" class="aaa">
            登录
        </el-button>
        </el-form-item> 
        </el-form>
    </div>
    <div class="right">
        <div>
            <span>微博：</span>
            <a href="https://weibo.com/u/5332676018?nick=Huluobos%E4%B8%B6&is_all=1">Huluobos</a>
        </div>
        <div>
            <span>微信：</span>
            <a href="#">zby18332725321</a>
        </div>   
    </div>
    
</div>

  
</template>
<script>
  export default {
    name: 'admin',
    data(){
      return{
         formData: {
             adminName:"",
             adminPwd:"",
         }
      }
    },
    methods:{
      submit(){
            this.$axios.post("dengluAdmin",this.formData).then((res)=>{
               if(res.code ==200){
                    this.$message({
                        type: 'success',
                        message: '登录成功'
                    });
                }else{
                    this.$message({
                        type: 'false',
                        message: '登录失败'
                    });
                }
                setTimeout(()=>{
                    this.$router.push("/news")
                },1500)

            })
        },
        
    }
}
</script>

<style scoped>
.all{
     width: 100%; 
     height: 100%; 
}
.box{
    width: 500px;
    margin: 13% auto;
    border:2px solid rgb(156, 153, 153);
    padding:30px 55px 20px 20px
}
.header{
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    margin-bottom: 15px;
}
.aaa{
    margin-left: 120px
}
.right{
    position: fixed;
    right: 20px;
    top:10px;
    font-size: 11px;
}
a{
    color:#549
}
.el-input__inner {
    width: 420px;
}
</style>