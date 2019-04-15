<template>
    <div class="content">
        <ul>
            <li v-for="item in fromData" :key="item.index">
                <div class="left">
                    <div class="left-top">{{item.jfName}}</div>
                    <div class="left-down">{{item.createTime}}</div>
                </div>
                <div class="right">
                    <span class="jia">+</span>
                    <span class="jfs">{{item.jfNum}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import timeTrans from "../../util/time"
export default {
    data(){
        return{
            fromData:[],
        }
    },
    methods:{
        getJfs(){
            this.$axios.get("getJfS").then(res=>{
                for(var i=0;i<res.data.length;i++){
                    res.data[i].createTime = timeTrans(res.data[i].createTime)
                }
                this.fromData = res.data
                // console.log(res)
            })
        }
    },
    created(){
        this.getJfs()
    }
}
</script>

<style scoped>

ul li{
    border-bottom: 1px solid #ddd;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
    height: 4.8125rem;
}
ul li .left{
    float: left;
}
ul li .left .left-top{
    font-size: 18px;
    margin-bottom: .5rem;
}
ul li .left .left-down{
    font-size: .8rem;
    font-weight: 300;
}
ul li .right{
    float: right;
    color: red;
}
</style>
