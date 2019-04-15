
var mongoose = require('mongoose');
var tieZis = new mongoose.Schema({
    userId:{
        type:String
    },
    pic:{
        type:String
    },
    createTime:{
        type:Date,
        default:Date.now()
    },
    userName:{
        type:String
    },
    check:{
        type:String,
        default:false //默认待审核
    },
    type:{
        type:String,
        default:0 //0 个人总结， 1思想汇报  2心得总结 
    },
    reply:{
        type:Array,
        default:[],
    }
    
},{versionKey:false});    //设置取消上传数据库带有的版本号
module.exports = mongoose.model("tieZis",tieZis)