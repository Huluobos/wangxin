<template>
  <div class="content">
      <div v-html="formData">
         
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          formData:""
      }
  },
  methods:{
      getToday(){
          this.$axios.get("getData",).then(res=>{
              this.formData=res.data
            //   console.log(res)
          })
      }
  },
  created(){
      this.getToday()
  }
}
</script>

<style scoped>

</style>
