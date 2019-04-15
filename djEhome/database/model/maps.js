

var mongoose = require('mongoose');
var maps = new mongoose.Schema({
    jd:{
        type:String
    },
    wd:{
        type:String
    },
    text:{
        type:String
    }

},{versionKey:false});    //设置取消上传数据库带有的版本号
module.exports = mongoose.model("maps",maps)