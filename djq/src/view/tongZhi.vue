<template>
  <div class="content" >
    <div class="box"  v-for="item in formData" :key="item.index">
      <router-link :to="'/tongZhi/detail?_id='+item._id">
        <div class="pic">
          <img src="../../static/tongzhi.png" alt="">
        </div>
        <div class="news">
          <div class="title">{{item.title}}</div>
          <div class="time"  style="font-size:12px;color: #666;font-family:normal;">
               {{item.createTime}}
          </div> 
        </div>
      </router-link>
      
    </div>
    <div class="box-footer">
      没有数据了
    </div>
    <Tabbar></Tabbar>
  </div>

</template>

<script>
import Tabbar from "./coms/Tabbar";
import timeTrans from "../util/time"
export default {
  name: 'tongZhi',
  components:{
    Tabbar,
  },
  data(){
    return{
      formData:[]
    }
  },
  methods:{
    getNews(){
      this.$axios.get("getNews",{type:8}).then((res)=>{
      for(var i=0;i<res.data.length;i++){
        res.data[i].createTime = timeTrans(res.data[i].createTime)
      }
       this.formData = res.data
      })
    }
  },
  created(){
    this.getNews()
  }
}
</script>


<style scoped>

.box{
  width: 100%;
}
.box a{
  display: block;
  padding: 10px;
  border-bottom: 1px solid rgba(0,0,0,.1);
  height: 4.75rem;
}
.box a .pic{
  text-align: center;
  width: 19%;
  height: 4rem;
  padding-top: 11px;
  float: left;
}
.box a .pic img{
  width: 2.1625rem;
  height: 2.325rem;
}
.box a .news{
 float: right;
 width: 72.77777%;
 padding: 5px;
}
.box a .news .title{
  height: 40px;
  width: 100%;
  color: #333;
  font-size: 15px;
}
.box a .news .time{
  margin: 3px 0;
  line-height: 20px;
}
.box-footer{
  margin-bottom: 47px;
  color: #666;
  font-size: 14px;
  text-align: center;
  padding: 10px 0;
}
</style>
