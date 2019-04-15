
<!-- 用户  列表  -->
<template>
<div>
    <el-table
      :data="tableData"
      border
      style="width: 100%;margin-top:20px">    
      <el-table-column
        prop="userName"
        label="用户名"
        width="80">
      </el-table-column>

      <el-table-column
        prop="headPic"
        label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.headPic" alt="" style="max-height:70px;width:70px;display=block">
        </template>
      </el-table-column>

       <el-table-column
        prop="sex"
        label="性别"
        width="40">
      </el-table-column>

      <el-table-column
        prop="userId"
        label="身份证">
      </el-table-column>

      <el-table-column
        prop="homePlace"
        label="家庭住址">
      </el-table-column>

      <el-table-column
        prop="workPlace"
        label="工作地址">
      </el-table-column>

      <el-table-column
        prop="minZu"
        label="民族">
      </el-table-column>

      <el-table-column
        prop="wx"
        label="微信号">
      </el-table-column>

      <el-table-column
        prop="qq"
        label="QQ号">
      </el-table-column>

      <el-table-column
        prop="edu"
        label="最高学历">
      </el-table-column>

      <el-table-column
        prop="zhicheng"
        label="职称">
      </el-table-column>

      <el-table-column
        prop="gongZi"
        label="薪资水平">
      </el-table-column>

      <el-table-column
        prop="ruDangTime"
        label="入党时间">
      </el-table-column>

      <el-table-column
        prop="lastTime"
        label="党费最后缴费时间">
      </el-table-column>

      <el-table-column
        prop="shenFen"
        label="当前身份"
        width="50">
      </el-table-column>

      <el-table-column
        prop="grzj"
        label="是否上传个人总结">
      </el-table-column>

      <el-table-column
        prop="dzb"
        label="党支部"
          width="50">
      </el-table-column>
      
      <el-table-column
        prop="pwd"
        label="密码"
        width="">
      </el-table-column>

      <el-table-column
        label="操作"
        width="200">
        <template slot-scope="scope">
        <el-button
          type= "danger"
          size="mini"
          @click="handleDelete(scope.row.userId)">删除</el-button>
      </template>
      </el-table-column>
    </el-table>
</div>
  
</template>
<script>
  export default {
    name: 'list',
    data(){
      return{
        tableData:[]
        
      }
    },
    methods:{
      //获取用户
      getData(){
        this.$axios.get("getUsers").then((res)=>{
          //  console.log(res)
          this.tableData = res.data
        })
      }, 
      //删除用户
     handleDelete(userId){
        this.$confirm('此操作将永久删除这个用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.$axios.post("delUsers",{userId:userId}).then((res)=>{
           if(res.code ==200){
              this.$message({
                type: 'success',
                message: '删除成功'
              });
              setTimeout(()=>{
                this.$router.go(0) //前进一页写1，后退一页写-1 ，刷新当前页面写0
              },1500)
            }
           
          }) 
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          },);          
        });
         
      },

    },
    created(){
      this.getData()
    }
  }
</script>

<style>
.cell{
  font-size:15px
}
</style>
