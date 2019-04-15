<template>
    <div class="content">
        <div class="top">
            <img src="../../../static/jfbg.png" alt="">
            <div class="num">{{jfSum}}</div>
        </div>
        <div class="center" @click="getJfs">
            <img src="../../../static/lhjficon.png" alt="" class="aa">
            <span>积分明细</span>
            <img src="../../../static/jiao.png" alt="" class="bb">
        </div>
        <div class="jfs" style="background: rgb(238, 238, 238);">
            <span class="left" style="font-size: 14px; color: #555;">积分规则</span> 
            <span class="right">
                <img src="../../../static/wenhao.png">
            </span>
        </div>
        <div class="jfs">
            <span class="left">每日登录APP</span>
            <span class="right">5</span>
        </div>
        
        <div class="jfs">
            <span class="left">提交思想汇报</span>
            <span class="right">3</span>
        </div>
        <div class="jfs">
            <span class="left">提交心得总结</span>
            <span class="right">2</span>
        </div>
        <div class="jfs">
            <span class="left">提交个人总结</span>
            <span class="right">3</span>
        </div>
        <div class="jfs">
            <span class="left">学习政治知识</span>
            <span class="right">0.1</span>
        </div>
        <div class="jfs">
            <span class="left">查看通知</span>
            <span class="right">0.1</span>
        </div>
        <div class="jfs">
            <span class="left">查看新闻眼</span>
            <span class="right">0.1</span>
        </div>
        
    </div>
</template>
<script>
export default {
  data(){
      return{
          jfSum:"",
      }
  },
  methods:{
      getJfSum(){
          this.$axios.get("getJf").then(res=>{
            this.jfSum = res.data
            // console.log(res)
          })
      },
      getJfs(){
          this.$router.push("/myDj/jf/jfs")
      }
  },
  created(){
      this.getJfSum()
  },
}
</script>
<style scoped>

.top{
    margin-top: -1px;
    width: 100%;
    position: relative;
}
.top img{
    width: 100%;
}
.num{
    display: block;
    position: absolute;
    top: 40%;
    text-align: center;
    color: #fff;
    width: 100%;
}
.center{
    width: 100%;
    border-top:1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 1rem 3.375rem;
    font-size: 16px;
    height: 52px;
    text-decoration: none;
    box-sizing: border-box;
    position: relative;
}
.center .aa{
    position: absolute;
    top:.7rem;
    left: 1rem;
}
.center span{
    display: block;
}
.center .bb{
    position: absolute;
    top:1.2rem;
    right: 1rem;
}
.jfs{
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    padding:0 1rem;
    border-bottom: 1px solid #ddd;
    position: relative;
    box-sizing: border-box;
}
.jfs .left{
    color: rgb(153, 153, 153);
}
.jfs .right{
    position: absolute;
    top: 0.27rem;
    right: 1rem;
    color: rgb(153, 153, 153);
}
</style>
