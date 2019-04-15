var mongoose = require('mongoose');
var timeTrans = require("../../uitl/time")
var time =Date.now()
var jfs = new mongoose.Schema({
    userId:{
        type:String
    },
    jfNum:{
        type:Number,
        default:0
    },
    jfName:{
        type:String
    },
    createTime:{
        type:Date,
        default:Date.now()
    },
    timeToday:{
        type:String,
        default:timeTrans(time)

    },  
},{versionKey:false});    //设置取消上传数据库带有的版本号
module.exports = mongoose.model("jfs",jfs)