<template>
    <div style="list">
       <div v-for="(item,index) in fromData" :key="item._id" class="main">
            <div class="xh"><span>序号：</span>{{index+1}}</div>
            <div class="box">
                <div class="pic">
                    <img :src="item.headPic" alt="">
                </div>
                <div class="name">{{item.userName}}</div>
                <div class="time">{{item.createTime}}</div>
                <div class="type">
                    <span v-if="item.type=='0'">私密</span>
                    <span v-if="item.type=='1'">公开</span>  
                </div> 
                <div class="content">{{item.content}}</div>     
            </div>
            
            <div class="pl">评论列表</div>
            <div class="hf">
                <el-table
                    :data="item.reply"
                    border
                    style="width: 100%;">
                    <el-table-column
                        prop="image"
                        label="头像"
                        width="150">
                        <template slot-scope="scope">
                            <img :src="scope.row.image" alt="" style="max-height:90px;width:90px;display=block">
                        </template>
                    </el-table-column> 
                    <el-table-column
                        prop="people"
                        label="用户名"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="时间"
                        width="250">
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
          fromData:[]
      }
  },
  methods:{
      getData(){
          this.$axios.get("getMes",{_id:this.$route.query._id}).then((res)=>{
            //   console.log(res.data)
              this.fromData = res.data
          })
      },

  },
  created(){
      this.getData()
    }
}
</script>

<style scoped>
.box{
    height: 180px;
    width: 95%;
    background-color: rgba(0,0,0,.2);
    /* border: 1px solid #353434; */
    border-radius: 8px;
    position: relative;
    margin-bottom: 10px;
}
.box .pic{
    float: left;
    padding: 15px;
}
.box .pic img{
    width: 70px;
    height: 70px;
    display: block;
}
.box .name{
    font-size: 25px;
    padding-top: 15px;
}
.box .time{
    font-size: 16px;

}
.box .type{
  position: absolute;
  top: 23px;
  left: 250px;
}
.box .content{
  margin-top: 30px;
  padding: 0;
}
.pl{
  /* margin-top: 30px; */
  padding: 10px 20px;
  width: 95%;
  font-size: 16px;
  /* border-top: 1px solid rgba(0,0,0,.2) */
}
.hf{
    width: 95%;
    padding-left: 20px;
}
.xh{
    padding: 10px 0;
    font-size: 20px;
}
.xh span{
    line-height: 40px;
    height: 40px;
}
.main{
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0,0,0,.4)
}

</style>

