<template>
  <div class="content">
    <div class="box" v-for="item in formData" :key="item.index">
      <router-link :to="'/sdp/detail?_id='+item._id">
      <div class="pic">
        <img v-lazy="item.pic" >
      </div>     
        <div class="news">
          <div class="title">{{item.title}}</div>
          <div class="foo"  style="font-size:12px;color: #666;font-family:normal;">
                <span class="time">{{item.createTime}}</span>    
                <span class="star">{{item.count}}</span>      
          </div> 
        </div>
      </router-link>
    </div>
    <div class="box-footer">
      没有数据了
    </div>
  </div>

</template>
<script>
import timeTrans from "../../util/time"
export default {
  name: 'sdp',
  data(){
    return{
      formData:[]
    }
  },
  methods:{
    getNews(){
      this.$axios.get("getNews",{type:5}).then((res)=>{
      //  console.log(res.data) 
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
@import "../../style/news.css";

</style>
