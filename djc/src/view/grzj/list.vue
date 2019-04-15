<template>
  <div style="list">
    <el-table
      :data="fromData"
      border
      style="width: 100%;">
       <el-table-column
        prop="userName"
        label="用户"
         width="100">
      </el-table-column>
      <el-table-column
        prop="userId"
        label="用户id"
         width="100">
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
        width="200">
      </el-table-column>
      <el-table-column
        prop="check"
        label="审核"
        width="100">
      </el-table-column>
      <el-table-column
        label="操作">
         <template slot-scope="scope">
        <el-button
          type= "primary"
          size="mini"
          @click="handleEdit(scope.row._id)">通过审核</el-button>
        <el-button
          type= "danger"
          size="mini"
          @click="handleDelete(scope.row._id)">删除帖子</el-button>
           <el-button
          type= "primary"
          size="mini"
          @click="handleReply(scope.row.userId)">查看评价</el-button>
          <el-button
          type= "primary"
          size="mini"
          @click="showDetails(scope.row.userId)">查看详情</el-button>
      </template>
      </el-table-column>
    </el-table> 

    <div class="show" v-if="show">
      <div class="box">
        <div class="title">
            <span>用户名：</span>
            {{detailData.userName}}
        </div>
        <div class="title">
            创建时间：
            <span>{{detailData.createTime}}</span>
        </div>
        <el-button 
          type= "danger"
          size="medium "
          @click="closeDetails">
            关闭
        </el-button>
        <div class="pic">
          <img :src="detailData.pic" alt="">
        </div>

      </div>
    </div>
</div>
</template>

<script>
export default {
  name:"list",
  data(){
      return{
          fromData:[],
          show:false,
          detailData:{},
      }
  },
  methods:{
      getData(){
          this.$axios.get("getTieZis",{type:0}).then((res)=>{
              this.fromData = res.data
              console.log(res)
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
        this.$confirm('此操作将永久删除这条各人总结, 是否继续?', '提示', {
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
      handleReply(userId){
         this.$router.push({path:"/grzj/reply",query:{userId,type:"0"}})
      },
      showDetails(userId){
        this.show = true
        this.$axios.get("getTieZis",{userId:userId,type:0}).then((res)=>{
              console.log(res)
              this.detailData = res.data[0]
              console.log(this.detailData)   
          })

      },
      closeDetails(){
        this.show = false
      },

  },
  created(){
      this.getData()
      // this.showDetails()
    }
}
</script>

<style scoped>
.show{
  position: fixed;
  top: 90px;
  left: 260px;
  right: 0;
  /* bottom: 0; */
  width: 75%;
  background-color: rgba(0, 0, 0, .8);
  box-sizing: border-box;
  border-radius: 10px;
  height: 85%;
}
.el-table--border{
  border: none;
}
.top-header{
  border: none;
}
.box{
  padding: 30px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
}
.box .title{
  line-height: 40px;
  height: 40px;
  margin: 10px auto;
  color: #fff;
  font-size: 23px;
  font-weight: 500;
}
.box button{
  position: absolute;
  top: 30px;
  right: 30px;
  
}
.el-button--medium {
    padding: 30px 40px;
    font-size: 18px;
    border-radius: 4px;
}
.box .pic{
  width: 100%;
  height: 85%;
  box-sizing: border-box;
}
.box .pic img{
  height: 100%; 
  display: block;
  width: 100%;
  border-radius: 10px;
}
</style>

