
var mongoose = require('mongoose');
    var newsLists = new mongoose.Schema({
        title:{
            type:String
        },
        author:{
            type:String
        },
        pic:{
            type:String
        },
        upDateTime:{
            type:Date,
            default:Date.now()
        },
        createTime:{
            type:Date,
            default:Date.now()
        },
        content:{
            type:String
        },
        type:{
            type:String       //新闻分类
        },
        count:{
            type:Number,
            default:0
        },
        slider:{
            type:String,
            default:0   //是否加入轮播图  0 不加  1加
        }
    },{versionKey:false});    //设置取消上传数据库带有的版本号
module.exports = mongoose.model("newsLists",newsLists)