

var mongoose = require('mongoose');
var messages = new mongoose.Schema({
    upDateTime:{
        type:Date,
        default:Date.now()
    },
    createTime:{
        type:Date,
        default:Date.now()
    },
    headPic:{
        type:String
    },
    content:{
        type:String
    },
    type:{
        type:String,
        default:1 // 0 和1 表示私密还是公开
    },
    userName:{
        type:String
    },
    reply:{
        type:Array,
        default:[]
    }
},{versionKey:false});    //设置取消上传数据库带有的版本号
module.exports = mongoose.model("messages",messages)