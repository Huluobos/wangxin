<template>
  <div style="list">
    <div class="news">
      <div class="kind">
        <span>请选择新闻类型:</span>
            <el-select v-model="newsType" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.type"
                :label="item.label"
                :value="item.type">
              </el-option>
            </el-select>
         <el-button
            type= "danger"
            size="mini"
            @click="getType()">确认</el-button>
      </div>

      <el-table
        :data="fromData"
        border
        style="width: 100%;">
        <el-table-column
          prop="type"
          label="新闻类型">
        </el-table-column>
        <el-table-column
          prop="pic"
          label="头图"
          width="220">
          <template slot-scope="scope">
            <img :src="scope.row.pic" alt="" style="max-height:150px;width:150px;display=block">
          </template>
        </el-table-column>     
        <el-table-column
          prop="author"
          label="作者"
          width="">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
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
          prop="count"
          label="点击量"
          width="80">
        </el-table-column>
        <el-table-column
          prop="slider"
          label="是否是轮播图"
          width="">
        </el-table-column>
        <el-table-column
          label="操作"
          width="400">
          <template slot-scope="scope">
          <el-button
            type= "primary"
            size="mini"
            @click="handleEdit(scope.row._id)">编辑</el-button>
          <el-button
            type= "danger"
            size="mini"
            @click="handleDelete(scope.row._id)">删除</el-button>
            <el-button
            type= "primary"
            size="mini"
            @click="handleSlider(scope.row._id)">设置轮播图</el-button>
        </template>
        </el-table-column>
      </el-table>
    </div>
    
</div>
</template>

<script>
export default {
  name:"list",
  data(){
      return{
        options:[
            {type: '0',label: '信工新闻眼'},
            {type: '1',label: '政治学习'},
            {type: '2',label: '党建一点通'},
            {type: '3',label: '党员亮身份'},
            {type: '4',label: '随时随地学'},
            {type: '5',label: '随时随地拍'},
            {type: '6',label: '制度建设'},
            {type: '7',label: '特色活动'},
            {type: '8',label: '通知早知道'}
          ],
        newsType:"",
        fromData:[],     
      }
  },
  methods:{
      getType(){
        let newsType = this.newsType; 
        this.getData()
      },
      getData(){
          this.$axios.get("getNews",{type:this.newsType}).then((res)=>{
              if(res.data==null){
                return
              }else{
                for(var j=0; j<res.data.length; j++){
                  if(res.data[j].type==0){
                    res.data[j].type = "信工新闻眼"
                  }
                  if(res.data[j].type==1){
                    res.data[j].type = "政治学习"
                  }
                  if(res.data[j].type==2){
                    res.data[j].type = "党建一点通"
                  }
                  if(res.data[j].type==3){
                    res.data[j].type = "党员亮身份"
                  }
                  if(res.data[j].type==4){
                    res.data[j].type = "随时随地学"
                  }
                  if(res.data[j].type==5){
                    res.data[j].type = "随时随地拍"
                  }
                  if(res.data[j].type==6){
                    res.data[j].type = "制度建设"
                  }
                  if(res.data[j].type==7){
                    res.data[j].type = "特色活动"
                  }
                  if(res.data[j].type==8){
                    res.data[j].type = "通知早知道"
                  }                
                }
               for(var k=0; k<res.data.length; k++){
                  if(res.data[k].slider==0){
                    res.data[k].slider = "非轮播图"
                  }
                  if(res.data[k].slider==1){
                    res.data[k].slider = "已设置为轮播图"
                  }
               }
              }
              
              this.fromData = res.data
          })
      },
      handleEdit(_id){
          this.$router.push({path:"/news/update",query:{_id}})
      },
      handleDelete(_id){
        this.$confirm('此操作将永久删除这条新闻, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.$axios.post("delNews",{_id:_id}).then((res)=>{
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
      handleSlider(_id){
        this.$axios.post("addSlider",{_id:_id}).then(res=>{
          if(res.code ==200){
              this.$message({
                type: 'success',
                message: '添加轮播图成功'
              });
              setTimeout(()=>{
                this.$router.go(0) //前进一页写1，后退一页写-1 ，刷新当前页面写0
              },1500)
            }
        })
      }

  },
  created(){
      this.getData()    
    }
}
</script>

<style scoped>
.kind{
  padding: 15px 15px;
  height: 50px;
  line-height: 50px;
  margin-bottom: 13px;
}
.kind span{
  font-size: 25px;
}
</style>

