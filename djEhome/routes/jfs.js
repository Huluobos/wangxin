var express = require('express');
var router = express.Router();
var jfs = require("../database/model/jfs")
var timeTrans = require("../uitl/time")
//  涨积分
// 上传个人总结 + 1  思想汇报 +2 心得总结 +3 看新闻 +0.1  党员云互动发帖+0.5
//登录 +5 
router.post("/add",(req,res)=>{
  let{userId} = req.session.users
  let {jfNum,jfName} = req.body
  jfs.create({userId,jfNum,jfName},(err,data)=>{
    if (err) {
      res.json({
          data: err,
          code: 500,
          msg: "false",
          ret: false
      })
      return
    }
    res.json({
        data: data,
        code: 200,
        msg: "积分入库成功",
        ret: true
    })
  })
})

router.post("/find",(req,res)=>{
  let {userId} = req.session.users
  let {jfName} = req.body
  var time = timeTrans(Date.now())
  console.log(time)
  jfs.findOne({userId,jfName,timeToday:time},(err,data)=>{
    if(data==null){
      res.json({
        data: time,
        code: 200,
        msg: "积分可以入库",
        ret: true
      })
      return
    }
    if(data.timeToday == time){
      res.json({
        data: time,
        code: 400,
        msg: "积分不再重复入库",
        ret: false
      })
      return
    }else{
      res.json({
        data: time,
        code: 200,
        msg: "积分可以入库",
        ret: true
      })
      return
    }
  }) 
})

// 获取总积分
router.get("/getSum",(req,res)=>{ 
  let {userId} = req.session.users
  // console.log(userId)
  jfs.find({userId},(err,data)=>{
    if(err){
      res.json({
        data:err,
        code:500,
        ret:false,
        msg:"服务器查找用户id出错"
      })
      return
    }
    if(!data){
      res.json({
        data:"找不到该用户",
        code:400,
        ret:false,
        msg:"找不到该用户"
      })
      return
    }
    var sum = 0
    for(var m=0;m<data.length;m++){
      sum += data[m].jfNum
      var sum = parseInt(sum*10)/10
    }
    console.log(sum)   
    res.json({
        data:sum,
        code:200,
        ret:true,
        msg:"总积分获取成功"
    })
  })
})

//获取积分详情
router.get("/getJfS",(req,res)=>{ 
  let {userId} = req.session.users
  // console.log(userId)
  jfs.find({userId}).sort({_id:-1}).exec((err,data)=>{
    if(err){
      res.json({
        data:err,
        code:500,
        ret:false,
        msg:"服务器查找用户id出错"
      })
      return
    }
    if(!data){
      res.json({
        data:"找不到该用户",
        code:400,
        ret:false,
        msg:"找不到该用户"
      })
      return
    } 
    res.json({
        data:data,
        code:200,
        ret:true,
        msg:"积分详情获取成功"
    })
  })
})

module.exports = router;
