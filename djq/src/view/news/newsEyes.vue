<template>
  <div class="content">
    <div class="box" v-html="formData.content">
    </div>
  </div>

</template>
<script>

export default {
  name: 'newsEyes',
  data(){
    return{
      formData:{}
    }
  },
  methods:{
    isLoginA(){
       this.$axios.get("panDuan").then(res=>{
        if(res.code==200){
           this.$axios.post("addJf",{jfNum:0.1,jfName:"查看新闻眼"}).then(resolve=>{
                // console.log("积分添加成功")
            })
        }
      })
    },
    getNews(){
      this.$axios.get("getNewsId",{_id:this.$route.query._id}).then((res)=>{
        this.formData = res.data
      })
    }
  },
  created(){
    this.getNews(),
    this.isLoginA()
  }
}
</script>


<style scoped>

.box{
  padding:10px;
}
</style>
