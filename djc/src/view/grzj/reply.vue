<template>
    <div style="list">
       <div v-for="(item,index) in fromData" :key="item._id" class="main">
            <div class="xh"><span>序号：</span>{{index+1}}</div>
            <div class="box">
                <div class="name">{{item.userName}}</div>
                <div class="time">{{item.createTime}}</div>
                <div class="sh">
                    <span v-if="item.check=='false'">未审核</span>
                    <span v-if="item.check=='true'">已审核</span>  
                </div> 
                <div class="pic">
                    <img :src="item.pic" alt="">
                </div>
            </div>         
            <div class="pl">评论列表</div>
            <div class="hf">
                <el-table
                    :data="item.reply"
                    border
                    style="width: 100%;">
                    <el-table-column
                        prop="people"
                        label="用户名"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="时间"
                        width="300">
                    </el-table-column> 
                    <el-table-column
                        prop="text"
                        label="内容"
                        width="">
                    </el-table-column>
                    
                </el-table>
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
      }
  },
  methods:{
      getData(){
        var parmas = this.$route.query 
        parmas.type = 0
          this.$axios.get("getTieZis",parmas).then((res)=>{
              this.fromData = res.data
              console.log(this.fromData)   
          })
      },

  },
  created(){
      this.getData()
    }
}
</script>

<style scoped>
.pl{
  padding: 10px 20px;
  width: 95%;
  font-size: 20px;
}
.hf{
    width: 95%;
    padding-left: 20px;
}
.xh{
    padding: 10px 0;
    font-size: 25px;
}
.xh span{
    line-height: 40px;
    height: 40px;
}
.main{
    padding-bottom: 20px;
} 
.box{
    padding: 20px;
    width: 700px;
    height: 150px;
    background-color: rgba(0,0,0,.2);
    border-radius: 8px;
    position: relative;
    margin-bottom: 10px;
}
.box .pic{
    position: absolute;
    top:10px;
    right: 50px; 
}
.box .pic img{
    height: 150px;
    display: block; 
}
 .box .name{
    font-size: 25px;
    line-height: 100%;
    padding: 15px 10px 15px; 
}
.box .time{
    font-size: 16px;
    padding: 15px 10px 15px; 
}
.box .sh{
    padding: 15px 10px 15px; 
}

</style>
