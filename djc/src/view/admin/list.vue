<template>
  <div style="list">
    <el-table
      :data="fromData"
      border
      style="width: 100%;">
       <el-table-column
        prop="_id"
        label="用户">
      </el-table-column>
      <el-table-column
        prop="adminName"
        label="用户id">
      </el-table-column>
      <el-table-column
        prop="adminPwd"
        label="密码"
        width="">
      </el-table-column>
      <el-table-column
        label="操作"
        width="">
         <template slot-scope="scope">

        <el-button
          type= "danger"
          size="mini"
          @click="handleDelete(scope.row._id)">删除</el-button>
      </template>
      </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
  name:"list",
  data(){
      return{
          fromData:[]
      }
  },
  methods:{
      getData(){
          this.$axios.get("getAdmin").then((res)=>{
              this.fromData = res.data
              //  console.log(res.data)
          })
      },

      handleDelete(_id){
        this.$confirm('此操作将永久删除这个管理员, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.$axios.post("adminDel",{_id:_id}).then((res)=>{
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

<style scoped>

</style>
