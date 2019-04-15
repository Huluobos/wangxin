var express = require('express');
var router = express.Router();
var messages = require("../database/model/messages")

//  党员云互动

// 增
router.post('/add', function(req, res, next) {
    let{content,type}= req.body
    let{userName,headPic}= req.session.users
    messages.create({userName,headPic,content,type},(err,data)=>{
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"false",
                ret:false
            })
            return
        }
        res.json({
            data:"添加成功",
            code:200,
            msg:"添加成功",
            ret:true
        })
    })
})

// 获取列表 带回复
router.get('/get',(req,res)=>{
    let {_id}= req.query
    let params = {}
    if(!_id){
        
        params = {}
    }else{
        params._id = _id;
    }
    messages.find((params),(err,data)=>{
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"false",
                ret:false
            })
            return
        }
        res.json({
            data:data,
            code:200,
            msg:"success",
            ret:true
        })
    })

})

//前台获取列表  //公开的  type ="1"
router.get('/getPublic',(req,res)=>{
    messages.find({type:"1"}).sort({_id:-1}).exec((err,data)=>{
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"false",
                ret:false
            })
            return
        }
        res.json({
            data:data,
            code:200,
            msg:"success",
            ret:true
        })
    })

})

//删除
router.post("/delete",(req,res)=>{
    let{_id} = req.body
    if(!_id){
        res.json({
            data:"_id为空",
            code:400,
            msg:"false",
            ret:false
        })
        return
    }else{
        messages.remove({_id},(err,data)=>{
            if (err){
                res.json({
                    data:err,
                    code:500,
                    msg:"false",
                    ret:false
                })
                return
            }
            if(data.n ==0 ){
                res.json({
                    data:"没有找到删除的项目",  //_id 如果少位数会报 500 错
                    code:400,
                    msg:"没有找到删除的项目",
                    ret:false
                })
                return
            }
            res.json({
                data:"删除成功",
                code:200,
                msg:"删除成功",
                ret:true
            })
        })
    }

})

//改
router.post("/update",(req,res)=>{
    let {_id,content,type} = req.body
    if(!_id){
        res.json({
            data:"_id为空",
            code:400,
            msg:"false",
            ret:false
        })
        return
    }else{
        messages.update({_id},{$set:{content,type,upDateTime:new Date()}},(err,data)=>{
            if(err){
                res.json({
                    data:err,
                    code:500,
                    msg:"false",
                    ret:false
                })
                return
            }
            if(data.n == 0){
                res.json({
                    data:"_id无效",
                    code:400,
                    msg:"_id无效",
                    ret:false,
                })
                return
            }
            res.json({
                data:'success',
                code:200,
                msg:"更改成功",
                ret:true
            })
        })
    }
})

//回复添加接口
router.post("/reply",(req,res)=>{
    let {_id} = req.body
    var reply = {
        image:req.session.users.headPic,
        people:req.session.users.userName,
        time: new Date(),
        text:req.body.text,
    }
    messages.findOne({_id},(err,data)=>{
        data.reply.unshift(reply)
        messages.update({_id},{$set:{reply:data.reply}},(err,back)=>{
            if(err){
                res.json({
                    data:err,
                    code:500,
                    msg:"false",
                    ret:false
                })
                return
            }
            if(back.n == 0){
                res.json({
                    data:"_id无效",
                    code:400,
                    msg:"_id无效",
                    ret:false,
                })
                return
            }
            res.json({
                data:'success',
                code:200,
                msg:"回复添加成功",
                ret:true
            })
        })
    })


})


module.exports = router;