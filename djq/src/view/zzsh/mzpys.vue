<template>
  <div class="content">
      <div class="text">
            <div class="title">
                评议内容
            </div>
            <div class="center">
                <p>在党支部专题组织生活会上，每一位党员要对照评议内容进行个人总结，查摆存在的问题，进行批评与自我批评，明确下一步的努力方向。在此基础上，党支部组织全体党员对每一位党员进行民主评议。评议主要内容如下：</p>
                <p>1、坚定理想信念、贯彻执行党的路线方针政策情况；</p>
                <p>2、参加“两学一做”学习教育情况；</p>
                <p>3、参加党的组织生活、按要求交纳党费；</p>
                <p>4、学习情况、业务能力提高情况；</p>
                <p>5、关心集体、团结同志，发挥先锋模范作用情况；</p>
                <p>6、联系群众、关心群众、服务群众情况；</p>
                <p>7、遵守党章党规、法律法规和学校规章制度情况。</p>
            </div>
      </div>
      <div class="down">
          <div class="left">
              <select v-model="dzb" name="dzb">
                  <option value="4">
                      请选择党支部
                  </option>
                  <option value="0">
                      信息工程学院教工第一党支部
                  </option>
                  <option value="1">
                      信息工程学院教工第二党支部
                  </option>
                  <option value="2">
                      信息工程学院学生第一党支部
                  </option>
                  <option value="3">
                      信息工程学院学生流动党支部（北京）
                  </option>
              </select>
          </div>
          <div class="right">
                  <button name="btn" @click="dzbChange">
                      下一步
                  </button>
              </div>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            dzb:"4"
        }
    },
    methods:{
        dzbChange(){
            // console.log(this.dzb)
            if(this.dzb == 4){
                return
            }else{
                this.$router.push({path:"/mzpy/mzpys/list",query:{dzb:this.dzb}})
            } 
        }
    },
}
</script>
<style scoped>
.text{
    margin-top:65px;
    width: 100%;   
}
.text .title{
    width: 100%;
    text-align: center;
    margin-top: 1.171875rem;
    margin-bottom: 1rem;
    font-size: 1rem;
}
.center{
    width: 94.72%;
    margin: 0 auto;
}
.center p{
    margin-bottom: 10px;
    line-height: 1.5;
}
.down{
   margin-top: 6rem;
   width: 100%;
}
.down .left{
    float: left;
    width: 11.725rem;
    height: 2.6055rem;
    margin-left: 2.279875rem;
    margin-right: 1.0422rem;
}
.down .left select{
    width: 100%;
    height: 100%;
    border:none;
    background: #c50206;
    color: #fff;
    border-radius: 5px;
    text-align: center;
    padding-left: 1.6285rem;
}
.down .right{
    width:5.8625rem;
    height: 2.6055rem;
    line-height: 2.6055rem;
    float: right;
    margin-right: 2.279875rem;
}
.down .right button{
    width:5.8625rem;
    height: 2.6055rem;
    border-radius: 5px;
    border: none;
    line-height: 2.6055rem;
    background: #c50206;
    color: #fff;
}
</style>
