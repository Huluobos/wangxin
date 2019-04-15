<template>
  <div class="top-header">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in routeList" :to="item.path" :key="item.id">  {{ item.name  }}</el-breadcrumb-item>
      <div class="admin">
        <span class="adminName"><router-link to="/admin">{{adminName}}</router-link></span>
        <el-button
          type= "danger"
          size="mini"
          @click="handleDown">退出管理员</el-button>  
          <el-button
           type= "danger"
          size="mini"
          @click="handleAdd">添加管理员</el-button> 
      </div>
    </el-breadcrumb>
    
  </div>
</template>
<script>
  export default {
    name: 'topHeader',
    data(){
      return{
        routeList:[],
        adminName:""
      }
    },
    methods:{
      getList(){
        this.routeList = this.$route.matched.filter(item => item.name )
      },
     
      handleDown(){
        this.$axios.get("tuichu").then((res)=>{       
            if(res.code ==200){
                    this.$message({
                        type: 'success',
                        message: '退出成功'
                    });
                    setTimeout(()=>{
                      this.$router.push("/")
                    },1500)
                }else{
                    this.$message({
                        type: 'false',
                        message: '退出失败'
                    });
                }
                

        })
      },
      handleAdd(){
        this.$router.push('/admin/add')
      },
      isLogin(){
             this.$axios.get('panDuanAdmin').then(res=>{
                  if(!res.ret){
                      this.$router.push('/')
                  }
                  this.adminName = res.data.adminName
              })
      },
    },
    watch:{
      $route(){
          this.getList();
      }
    },
    created(){
      this.isLogin(),
      this.getList();
    },
    
  }
</script>

<style scoped>
.admin{
  float: right;
}
.adminName{
  display: inline-block;
  padding-right: 15px;
}
  .top-header{
    position: fixed;
    top: 0;
    left: 230px;
    right: 0;
    box-sizing: border-box;
    padding: 20px 30px;
    z-index: 10; 
    background: darkgray
  }
</style>
