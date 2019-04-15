
var mongoose = require('mongoose');
    var users = new mongoose.Schema({
        userName:{
            type:String
        },
        headPic:{
            type:String,
            default:"http://oowantxlb.bkt.clouddn.com/notDel/icon_default.png"
        },
        userId:{
            type:String
        },
        pwd:{
            type:String
        },
        homePlace:{
            type:String,
            default:""
        },
        workPlace:{
            type:String,
            default:""
        },
        minZu:{
            type:String,
            default:""
        },
        wx:{
            type:String,
            default:""
        },
        qq:{
            type:String,
            default:""
        },
        sex:{
            type:String,
            default:1
        },
        edu:{
            type:String,
            default:""
        },
        zhicheng:{
            type:String,
            default:""
        },
        gongZi:{
            type:String,
            default:""
        },
        ruDangTime:{
            type:String,
            default:""
        },
        lastTime:{
            type:String,
            default:""
        },
        shenFen:{
            type:String,
            default:2   //1 积极分子 0 党员  2 预备
        },
        
        dzb:{
            type:String,
            default:0  //0 北京党支部， 1第一党支部  2第二党支部 3第三党支部
        },
        jfs:{
            type:String,
            default:0
        },
        jfDetail:{
            type:Array,
            default:[]
        },
    },{versionKey:false});    //设置取消上传数据库带有的版本号
module.exports = mongoose.model("users",users)