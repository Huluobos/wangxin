<template>
  <div class="list">
    <el-table
      :data="fromData"
      border
      style="width: 100%;">
       <el-table-column
        prop="text"
        label="党支部">
      </el-table-column>
       <el-table-column
        prop="jd"
        label="经度">
      </el-table-column>
      <el-table-column
        prop="wd"
        label="纬度"
        width="">
      </el-table-column>     
      <el-table-column
        label="操作"
        width="">
         <template slot-scope="scope">
        <el-button
          type= "primary"
          size="mini"
          @click="handleEdit(scope.row._id)">编辑</el-button>
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
          this.$axios.get("getMaps").then((res)=>{
              this.fromData = res.data
              // console.log(res.data)
          })
      },
      handleEdit(_id){
          this.$router.push({path:"/maps/update",query:{_id}})
      },
      handleDelete(_id){
        this.$confirm('此操作将永久删除这条新闻, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.$axios.post("delMaps",{_id:_id}).then((res)=>{
          //  console.log(res)
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

