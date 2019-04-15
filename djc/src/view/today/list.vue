<template>
  <div style="list">
      <div v-html="fromData">
        
      </div>
</div>
</template>

<script>
export default {
  name:"list",
  data(){
      return{
          fromData:""
      }
  },
  methods:{
      getData(){
          this.$axios.get("getToday").then((res)=>{
              this.fromData = res.data
          })
      },
  },
  created(){
      this.getData()
    }
}
</script>

<style>
    h2{
        font-size: 2rem;

    }
</style>

