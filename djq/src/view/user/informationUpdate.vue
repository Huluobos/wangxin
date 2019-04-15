<template>
    <div class="content">
        <ul>
            <li>
                <span class="left">头像:</span>
                <label for="file">
                    <input type="file" @change="upload" name="file" class="file" id="file">
                    <img :src="formData.headPic" alt="" class="pic">
                </label>
            </li>
            <li>
                <span class="left">用户昵称:</span>
                <span class="right"><input type="text" v-model="formData.userName"></span>
            </li>
            <li>
                <span class="left" >身份证:</span>
                <span class="right"><input type="text" v-model="formData.userId" disabled="disabled"></span>
            </li>
             <li>
                <span class="left">家庭住址:</span>
                <span class="right"><input type="text" v-model="formData.homePlace"></span>
            </li>
            <li>
                <span class="left">工作地点:</span>
                <span class="right"><input type="text" v-model="formData.workPlace"></span>
            </li>
            <li>
                <span class="left">民族:</span>
                <span class="right"><input type="text" v-model="formData.minZu"></span>
            </li>
            <li>
                <span class="left">微信号:</span>
                <span class="right"><input type="text" v-model="formData.wx"></span>
            </li>
            <li>
                <span class="left">QQ号:</span>
                <span class="right"><input type="text" v-model="formData.qq"></span>
            </li>
            <li>
                <span class="left">性别:</span>
                <span class="right"><input type="text" v-model="formData.sex"></span>
            </li>
            <li>
                <span class="left">最高学历:</span>
                <span class="right"><input type="text" v-model="formData.edu"></span>
            </li>
            <li>
                <span class="left">职称:</span>
                <span class="right"><input type="text" v-model="formData.zhicheng"></span>
            </li>
            <li>
                <span class="left">薪资水平:</span>
                <span class="right"><input type="text" v-model="formData.gongZi"></span>
            </li>
            <li>
                <span class="left">入党时间:</span>
                <span class="right"><input type="text" v-model="formData.ruDangTime"></span>
            </li>
            <li>
                <span class="left dd">党费最后缴纳时间:</span>
                <span class="right bb"><input type="text" v-model="formData.lastTime"></span>
            </li>
            <li>
                <span class="left">当前身份:</span>
                <span class="right"><input type="text" v-model="formData.shenFen"></span>
            </li>
            <li>
                <span class="left dd">所属党支部:</span>
                <span class="right bb"><input type="text" v-model="formData.dzb"></span>
            </li>

        </ul>
        <div class="btn" @click="saveChange"> 
            保存
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import axios from "axios";
export default {
    data(){
        return{
            formData:{
                userName:"",
                headPic:"",
                homePlace:"",
                minZu:"",
                workPlace:"",
                wx:"",
                qq:"",
                edu:"",
                zhicheng:"",
                gongZi:"",
                ruDangTime:"",
                lastTime:"",
                shenFen:"",
                dzb:"",
            } ,
             token:"" ,
        }
    },
    methods:{
        //图片
        upload($event){
            var file = $event.target.files[0];
            var form = new FormData();
            form.append("file",file)
            form.append("token",this.token)
            axios.post("https://upload-z1.qiniup.com",form,{headers:{"Content-Type":"multipart/form-daya"}}).then(res=>{
                 this.formData.headPic = "http://image.yaojunrong.com/"+res.data.key
            })
        },
      //用户信息反馈
        userGet(){
          this.$axios.get("userGet").then(res=>{
              this.formData =res.data
            //   console.log(this.formData)
              
          })
        },
        //保存修改信息
      saveChange(){
          this.$axios.post("updateUser",this.formData).then(res=>{
              if(res.code ==500 ||res.code ==400){
                  Toast({
                    message: res.msg,
                    position: 'bottom',
                    duration: 5000
                    });
              }
              if(res.code==200){
                   Toast({
                    message: res.msg,
                    position: 'bottom',
                    duration: 5000
                    });
                     setTimeout(()=>{
                        this.$router.push("/myDj/information")
                    },2000)
              }
          })
       
      },
       getToken() {   //阿贾克斯获取token 
          this.$axios.qiniuGet().then(res => {
              this.token = res.data;  
              console.log(this.token)   
          })
      },
        
    },
    created(){
        this.userGet()
        this.getToken()
    }
    
}
</script>
<style scoped>

a{
    text-decoration: none;
}
span{
    color: black;
}
li{
    border-bottom: 1px solid #ddd;
    height: 3rem;
    line-height: 3rem;
    width: 100%;
}
li label{
    float: right;
    text-align: right;
    width: 75%;
    height: 3rem;
}
li label input{
    display: none;
}
li .left{
    font-size: 14px;
    display: inline-block;
    height: 3rem;
    line-height: 3rem;
    text-align: left;
    width: 20%;
    padding-left: 1rem;
}
li .dd{
    width: 35%;
}
li .right{
    width: 75%;
    float: right;
}
li .bb{
    width: 60%;
}
li .right input{
    width: 100%;
    font-size: 12px;
    display: inline-block;
    line-height: 2rem;
    text-align: right;
    border: none;
    padding-right: 2rem;
    box-sizing: border-box;
    background-color: #fff;
}
li img{
    display: block;
    height:2.9rem;
    width: 2.9rem;
    margin-right: 1rem;
    float: right;
}
.mint-cell{
    margin: -1px;
    border: 1px solid #ddd;
    height: 1rem;
    line-height: 1rem;  
}
.btn{
    position: fixed;
    top:0;
    right: 0;
    border: none;
    color: #fff;
    z-index: 999999999999;
    height: 44px;
    width: 44px;
    line-height: 44px;
    text-align: center;
}

</style>
