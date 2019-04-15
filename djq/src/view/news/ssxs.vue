<template>
  <div class="content">
    <div class="box" v-html="formData.content">
    </div>
  </div>

</template>
<script>

export default {
  name: 'ssxs',
  data(){
    return{
      formData:{}
    }
  },
  methods:{
    getNews(){
      this.$axios.get("getNewsId",{_id:this.$route.query._id}).then((res)=>{
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
  padding:10px;
}
</style>

