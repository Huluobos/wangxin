<template>
    <div class="content">
        <div class="list">
            <ul 
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10"
                >
                <li v-for="item in fromData" :key="item.index">
                    <div class="top clearfix">
                        <div class="touxiang fleft">
                            <img :src="item.headPic">
                        </div> 
                        <div  class="top-center fleft">
                            <div class="nickname">
                                {{item.userName}}
                            </div> 
                            <div class="time">
                                <i class="iconfont icon-shijian"></i>
                                <span>{{item.createTime}}</span>
                                <i class="iconfont icon-volume"></i>
                                <span>公开</span>
                            </div>
                        </div> 
                        <div class="lxyz  fright">党员互动</div></div>
                    <div class="cont">{{item.content}}</div>
                    <div class="clearfix">
                        <div @click="addReply(item._id)">
                             <span class="response fright">
                                <i class="iconfont icon-xiaoxi"></i>
                                <span>回复</span>
                            </span>
                        </div>
                    </div>

                </li>
            </ul>
            <div v-if="txt" style="text-align: center;margin-bottom: 1rem;">{{txt}}</div>
            <!-- <div v-if="show" style="text-align: center;margin-bottom: 1rem;">

            </div> -->
            
        </div>



        <mt-button class="fabu iconfont icon-jiahao" @click="showAdd"></mt-button>
        <div class="MessageBox" v-if="plies">
            <div class="text"> 
                <textarea name="myMessage" v-model="content"></textarea>
                <span class="left">
                    <mt-button size="small" type="default" @click="addMessageHidden">取消</mt-button>
                </span>
                <span class="right">
                <mt-button size="small" type="danger" @click="addMessage">发布</mt-button>                    
                </span>
            </div>
        </div>
    </div>
</template>

<script>
  import timeTrans from "../../util/time"
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
import { clearTimeout } from 'timers';
  
export default {
    name:"yhd",
    data(){
        return{
            plies:false,
            fromData:[],
            content:"",
            loading:false,
            txt:"",
            page:0,
            // show:""
        }
    },
    methods:{
        //点击十字按钮显示输入页面
        showAdd(){
            this.$axios.get("panDuan").then(res=>{
                if(res.code == 400){
                    Toast({
                        message: res.msg,
                        position: 'bottom',
                        duration: 5000
                    });
                    this.$router.push("/login")
                }else{
                    this.plies = true
                }
            })
        },
        //点击取消按钮隐藏输入页面      
        addMessageHidden(){
            this.plies = false
        },
        //代码更改
        loadMore() {
            this.loading = true;
            Indicator.open({
                text: '正在加载...',
                spinnerType: 'fading-circle'
            })
            setTimeout(() => {
                this.$axios.get("getMessagesPublic",{page:this.page+1}).then(res=>{
                    this.page += 1
                    if(res.data.length==0){
                        Indicator.close();
                        clearTimeout()
                        this.txt = "没有更多数据了"
                    }else{
                         for(var i=0;i<res.data.length;i++){
                            res.data[i].createTime = timeTrans(res.data[i].createTime)
                            this.fromData.push(res.data[i])
                        }

                        Indicator.close();

                        // console.log( this.fromData)
                    }
                    this.loading = false;
                })
               
            }, 1500);
            
        },
        //
        //获取列表
        // getMessages(){
        //     // this.loading= true
        //     this.$axios.get("getMessagesPublic").then(res=>{
        //         console.log(res.data)
        //         for(var i=0;i<res.data.length;i++){
        //             res.data[i].createTime = timeTrans(res.data[i].createTime)
        //         }
        //         this.fromData=res.data
        //     })
        //     // this.loading= false
        // },
        //跳转   to="/yhd/reply"
        addReply(_id){
            this.$axios.get("panDuan").then(res=>{
                if(res.code == 400){
                    Toast({
                        message: res.msg,
                        position: 'bottom',
                        duration: 5000
                    });
                    this.$router.push("/login")
                }else{
                    this.$router.push("/yhd/reply?_id="+_id)
                }
            })
        },

        //添加互动 // 点击确认发送消息
        addMessage(){
            this.$axios.post("addMessage",{content:this.content,type:1}).then(res=>{
                Toast({
                        message: res.msg,
                        position: 'center',
                        duration: 5000
                    });
                this.$router.go(0)
            })
        }

    },
    created(){
        // this.getMessages()
    }
 
}
</script>

<style scoped>

.content .list{
    width: 100%; 
   
}
.content .list ul li{
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
.content .list ul li .touxiang{
    width: 2.084375rem;
    height: 2.084375rem;
    border-radius: 50%;
    overflow: hidden;
}
.fleft {
    float: left;
}
.content .list ul li .touxiang img{
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
.lxyz{
    font-size: 12px;
    padding: 2px 8px;
    color: red;
    border: 1px solid red;
    border-radius: 15%/50%;
}
.fright {
    float: right;
}
.cont{
    white-space: normal;
    padding: 10px 0;
}
.cont {
    position: relative;
}
.icon-xiaoxi{
    margin-right: 5px;
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
}
.response span{
    font-size: 14px;
    vertical-align: text-bottom;
}
.fabu{
    border: none;
    width: 3.5rem;
    height: 3.5rem;
    position: fixed;
    right: 10px;
    bottom: 70px;
    z-index: 999;
    background-color: red;
    border-radius: 50%;
    font-size: 3.1rem;
    color: white;
}
.mint-button--normal {
    display: inline-block;
    padding: 0 5px;
}

.MessageBox{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 999999;
    height:42rem; 
    
}
.MessageBox .text{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: .5rem;
    height: 8.7875rem;
    background-color: #f1f1f1;
    width: 100%;
}
.MessageBox .text textarea{
    width: 21.9375rem;
    background-color: #fff;
    line-height: 20px;
    display: block;
    margin: 4px;
    height:5.75rem;
}
.MessageBox .text span{
    display: inline-block;
    width: 20%;
   
}
.MessageBox .text .left{
    float: left;
     text-align: center;
}
.MessageBox .text .right{
    float: right;
    text-align: left;    
}




</style>
