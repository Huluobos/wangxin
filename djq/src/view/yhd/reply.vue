<template>
    <div class="content">
        <div class="list">
            <div class="top clearfix">
                <div class="touxiang fleft">
                    <img :src="fromData.headPic">
                </div> 
                <div  class="top-center fleft">
                    <div class="nickname">
                        {{fromData.userName}}
                    </div> 
                    <div class="time">
                        <i class="iconfont icon-shijian"></i>
                        <span >{{fromData.createTime}}</span>
                        <i class="iconfont icon-volume"></i>
                        <span >公开</span>
                    </div>
                </div> 
            </div>
            <div class="cont">{{fromData.content}}</div>
        </div>
        <div class="reply">
            <ul>
               <li class="item" v-for="item in fromData.reply" :key="item.index">
                   <div class="top clearfix">
                       <div class="touxiang fleft">
                           <img :src="item.image">
                        </div> 
                        <div class="top-center fleft">
                            <div class="nickname">
                                {{item.people}}
                            </div> 
                            <div class="time">
                                <i class="iconfont icon-shijian"></i>
                                <span>{{item.time}}</span>
                            </div>
                        </div>
                    </div> 
                    <div class="cont">{{item.text}}</div>
                </li>
            </ul>
        </div>
        <div class="box-footer">
            没有数据了
        </div>
        <div class="load">
            <input type="text" name="myReply" v-model="myReply">
            <mt-button size="small" type="danger" @click="saveReply">评论</mt-button>
        </div>
       
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import timeTrans from "../../util/time"
export default {
    name:"reply",
    data(){
        return{
           myReply:"",
           fromData:{},
        }
    },
    methods:{
        //获取input输入值   天假回复
        saveReply(){
            this.$axios.post("addMessageReply",{_id:this.$route.query._id,text:this.myReply}).then(res=>{
                // console.log(res)
                Toast({
                        message: res.msg,
                        position: 'bottom',
                        duration: 2000
                    });
                if(res.code ==200){
                    this.$router.go(0)
                }
            })
        },
        //数据回填
        getMessage(){
            var _id = this.$route.query._id
            this.$axios.get("getMessage",{_id:_id}).then(res=>{
               for(var i=0;i<res.data.length;i++){
                    res.data[i].createTime = timeTrans(res.data[i].createTime)
                    for(var j=0;j<res.data[i].reply.length;j++){
                        res.data[i].reply[j].time = timeTrans(res.data[i].reply[j].time)
                    }
                }
                this.fromData = res.data[0]
                // console.log(this.fromData)
            })
        }


    },
    created(){
        this.getMessage()
    }
 
}
</script>

<style scoped>

.content .list{
    width: 100%;
   
    width: 100%;
    padding: 1rem;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    color: #444;
    position: relative;
    box-sizing: border-box;
    margin: -1px 0px 10px 0px ;
    padding: 16px;
    font-size: 16px;
}

.touxiang{
    width: 2.084375rem;
    height: 2.084375rem;
    border-radius: 50%;
    overflow: hidden;
}
.fleft {
    float: left;
}
.touxiang img{
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
}
.top-center{
    margin-left: 10px;
    margin-top: 0;
    margin-bottom: 5px;
}
.nickname{
    text-align: left;
    font-size: 16px;
    color: #333;
}
.time{
        font-size: 12px;
}
.icon-shijian{
    margin-right: 2px;
    font-size: 11px;
}
.cont{
    white-space: normal;
    padding: 10px 0;
    text-align: left;
}
.cont {
    position: relative;
}
.reply{
    width: 100%;
    margin-top:10px;
}
.reply ul{
    text-align: center; 
    padding: 1rem;   
}
.item {
    border: 1px solid #ddd;
    background-color: #fff;
    color: #444;
    z-index: 2;
    display: block;
    margin: .5rem;
    padding: 16px;
    font-size: 16px;
    background-color: #ddd;
    border-radius: 4px;
    
}
.box-footer{
    margin-bottom: 47px;
    color: #666;
    font-size: 14px;
    text-align: center;
    padding: 10px 0;
}
.load{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 10px;
    background-color: #f1f1f1;
    border-top:1px solid #ddd
}
.load input{
    width: 80%;
    height: 2rem;
    line-height:2rem;
}
</style>
