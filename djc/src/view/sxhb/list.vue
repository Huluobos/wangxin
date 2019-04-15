<template>
  <div style="list">
    <el-table
      :data="fromData"
      border
      style="width: 100%;">
       <el-table-column
        prop="userName"
        label="用户">
      </el-table-column>
      <el-table-column
        prop="userId"
        label="用户id">
      </el-table-column>
      <el-table-column
        prop="pic"
        label="图片"
        width="220">
        <template slot-scope="scope"> 
          <img :src="scope.row.pic" alt="" style="max-height:150px;width:150px;display=block">
        </template>
      </el-table-column>     
       <el-table-column
        prop="createTime"
        label="创建时间"
        width="">
      </el-table-column>
      <el-table-column
        prop="check"
        label="审核"
        width="">
      </el-table-column>
      <el-table-column
        label="操作"
        width="">
         <template slot-scope="scope">
        <el-button
          type= "primary"
          size="mini"
          @click="handleEdit(scope.row._id)">通过审核</el-button>
        <el-button
          type= "danger"
          size="mini"
          @click="handleDelete(scope.row._id)">删除帖子</el-button>
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
          this.$axios.get("getTieZis",{type:1}).then((res)=>{
              this.fromData = res.data
          })
      },
      handleEdit(_id){
        this.$axios.post("shenHet",{_id:_id}).then((res)=>{
            
            if(res.code ==200){
              this.$message({
                type: 'success',
                message: '审核通过'
              });
              setTimeout(()=>{
                this.$router.go(0) //前进一页写1，后退一页写-1 ，刷新当前页面写0
              },1500)
            }
          })
      },

      handleDelete(_id){
        this.$confirm('此操作将永久删除这条思想汇报, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.$axios.post("shenHef",{_id:_id}).then((res)=>{
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

