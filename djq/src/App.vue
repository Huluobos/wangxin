<template>
  <div id="app">  
        <headerBar></headerBar>     
        <router-view/> 
  </div>
</template>

<script>
  import headerBar from "@/view/coms/headerBar";
export default {
  name: 'App',
  components:{
     headerBar,
  }
}
</script>

<style>
@import "./style/init.css";


</style>
