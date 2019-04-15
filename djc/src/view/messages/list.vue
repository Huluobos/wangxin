<template>
  <div style="list">
    <el-table
      :data="fromData"
      border
      style="width: 100%;">
      <el-table-column
        prop="headPic"
        label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.headPic" alt="" style="max-height:70px;width:70px;display=block">
        </template>
      </el-table-column>   
       <el-table-column
        prop="userName"
        label="用户名">
      </el-table-column>
       <el-table-column
        prop="type"
        label="公开类型">
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容"
        width="">
      </el-table-column>
       <el-table-column
        prop="createTime"
        label="创建时间"
        width="">
      </el-table-column>
      <el-table-column
        prop="upDateTime"
        label="更改时间"
        width="">
      </el-table-column>
      <el-table-column
        label="操作"
        width="">
         <template slot-scope="scope">
        <el-button
          type= "primary"
          size="mini"
          @click="handleEdit(scope.row._id)">查看评论</el-button>
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
          this.$axios.get("getMes").then((res)=>{
              for(var k=0; k<res.data.length; k++){
                if(res.data[k].type==0){
                  res.data[k].type = "私密"
                }
                if(res.data[k].type==1){
                  res.data[k].type = "公开"
                }
              }
              this.fromData = res.data
              
          })
      },
      handleEdit(_id){
          this.$router.push({path:"/messages/reply",query:{_id}})
      },
      handleDelete(_id){
        this.$confirm('此操作将永久删除这条互动消息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.$axios.post("deleteMes",{_id:_id}).then((res)=>{
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

