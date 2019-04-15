<template>
  <div class="content">
      <div class="nav">
            <mt-button @click="goGrzj" size="large">
                个人总结
            </mt-button>
            
            <mt-button @click="goMzpy" size="large">
                民主评议
            </mt-button>
      </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data(){
      return{

      }
  },
  methods:{
     
      goMzpy(){
          this.$router.push("/mzpy/mzpys")
      },
      goGrzj(){
          this.$axios.get("findGrzj").then(res=>{
            //  console.log(res)
              if(res.code ==200){
                  this.$router.push("/mzpy/grzj")
              }else{
                
                if(res.data.check == "false"){
                    this.$router.push("/mzpy/grzj/grzjsCheck")
                }
                if(res.data.check == "true"){
                    Toast({
                        message: res.msg,
                        position: 'bottom',
                        duration: 5000
                    });
                }
              }
          })
      },
  },

}
</script>
<style scoped>

.nav{
    position: absolute;
    top: 40%;
    width: 100%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.mint-button{
    width: 70%;
    margin: 1rem auto;
    background-color: #ef473a;
    color: #fff;
    border: none;
    outline-style: none;
}


</style>
