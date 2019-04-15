
var mongoose = require('mongoose');
var admins = new mongoose.Schema({
    adminName:{
        type:String
    },
    adminPwd:{
        type:String
    },
    
},{versionKey:false});    //设置取消上传数据库带有的版本号
module.exports = mongoose.model("admins",admins)