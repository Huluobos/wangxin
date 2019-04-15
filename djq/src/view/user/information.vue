<template>
    <div class="content">
        <div class="box">
            <mt-cell title="头像">
                <img :src="formData.headPic" style="width:1.75rem;height:1.75rem">
            </mt-cell>
            <mt-cell title="姓名" value="">{{formData.userName}}</mt-cell>
            <mt-cell title="身份证" value="">{{formData.userId}}</mt-cell>
            <mt-cell title="家庭住址" value="">{{formData.homePlace}}</mt-cell>
            <mt-cell title="工作地址" value="">{{formData.workPlace}}</mt-cell>
            <mt-cell title="民族" value="">{{formData.minZu}}</mt-cell>
            <mt-cell title="微信号" value="">{{formData.wx}}</mt-cell>
            <mt-cell title="QQ号" value="">{{formData.qq}}</mt-cell>
            <mt-cell title="性别" value="">{{formData.sex}}</mt-cell>
            <mt-cell title="最高学历" value="">{{formData.edu}}</mt-cell>
            <mt-cell title="职称" value="">{{formData.zhicheng}}</mt-cell>
            <mt-cell title="薪资水平" value="">{{formData.gongZi}}</mt-cell>
            <mt-cell title="入党时间" value="">{{formData.ruDangTime}}</mt-cell>
            <mt-cell title="党费最后缴纳时间" value="">{{formData.lastTime}}</mt-cell>
            <mt-cell title="当前身份" value="">{{formData.shenFen}}</mt-cell>
            <mt-cell title="所属党支部" value="">{{formData.dzb}}</mt-cell>
        </div>

        
    </div>
</template>
<script>
export default {
  data(){
      return{
          formData:{}
      }
  },
  methods:{
      userGet(){
          this.$axios.get("userGet").then(res=>{
              if(res.data.dzb == 0){
                  res.data.dzb ="信息工程学院教工第一党支部"
              }
              if(res.data.dzb == 1){
                  res.data.dzb ="信息工程学院教工第二党支部"
              }
              if(res.data.dzb == 2){
                  res.data.dzb ="信息工程学院学生第一党支部"
              }
              if(res.data.dzb == 3){
                  res.data.dzb ="信息工程学院学生流动党支部（北京）"
              }
              if(res.data.shenFen ==0){
                  res.data.shenFen="积极分子"
              }
              if(res.data.shenFen ==1){
                  res.data.shenFen="预备党员"
              }
              if(res.data.shenFen ==2){
                  res.data.shenFen="正式党员"
              }
              this.formData =res.data
            //   console.log(this.formData)
              
          })
      },
  },
  created(){
      this.userGet()
  }
}
</script>
<style scoped>

a{
    text-decoration: none;
}
.mint-cell{
    margin: -1px;
    border: 1px solid #ddd;
    height: 1rem;
    line-height: 1rem;  
}
</style>
