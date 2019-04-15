
var express = require('express');
var router = express.Router();
var tieZis = require("../database/model/tieZis")

// 增
router.post('/add', function (req, res, next) {
    let { userId,userName } = req.session.users
    let { pic, type } = req.body
    if(type == 0){
        tieZis.findOne({userId,type},(err,data)=> {
            if (err) {
                res.json({
                    data: err,
                    code: 500,
                    msg: "false",
                    ret: false
                })
                return
            }
            if (data!=null) {
                res.json({
                    data: "该用户已发表过个人总结",
                    code: 400,
                    msg: "该用户已发表过个人总结",
                    ret: false
                })
                return
            }else{
                tieZis.create({ pic, userName, userId, type }, (err, data) => {
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
                        data: "添加成功",
                        code: 200,
                        msg: "添加成功",
                        ret: true
                    })
                })
            }
        })
        return
    }else{
        if(pic ==null || pic==""){
            res.json({
                data: "请先上传图片",
                code: 400,
                msg: "请先上传图片",
                ret: false
            })
            return
        }else{
            tieZis.create({ pic, userName, userId, type }, (err, data) => {
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
                    data: "添加成功",
                    code: 200,
                    msg: "添加成功",
                    ret: true
                })
            })
        }
        
    }
    

})

//查找该用户是否上传个人总结
router.get("/findGrzj",(req, res)=>{
    let {userId} = req.session.users
    tieZis.findOne({userId:userId,type:0},(err,data)=>{
        if (err) {
            res.json({
                data: err,
                code: 500,
                msg: "false",
                ret: false
            })
            return
        }
        if(data){
            res.json({
                data:data,
                code:400,
                msg: "该用户已发表过个人总结",
                ret: false
            })
            return
        }
        res.json({
            data: "",
            code: 200,
            msg: "该用户没有发表过个人总结",
            ret: false
        })
    })
})

// 获取列表 或者获取评价  
router.get('/get', (req, res) => {
    let { userId, type } = req.query
    let params = {}
    if (!userId) {
        if (!type) {
            params = {}
        } else {
            params.type = type
        }
    } else {
        if (!type) {
            params.userId = userId;
        } else {
            params.type = type,
            params.userId = userId;
        }
    }
    tieZis.find(params, (err, data) => {
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
            msg: "success",
            ret: true
        })
    })

})

//删除
router.post("/delete", (req, res) => {
    let { _id } = req.body
    if (!_id) {
        res.json({
            data: "_id为空",
            code: 400,
            msg: "false",
            ret: false
        })
        return
    } else {
        tieZis.remove({ _id }, (err, data) => {
            if (err) {
                res.json({
                    data: err,
                    code: 500,
                    msg: "false",
                    ret: false
                })
                return
            }
            if (data.n == 0) {
                res.json({
                    data: "没有找到删除的项目",  //_id 如果少位数会报 500 错
                    code: 400,
                    msg: "没有找到删除的项目",
                    ret: false
                })
                return
            }
            res.json({
                data: "删除成功",
                code: 200,
                msg: "删除成功",
                ret: true
            })
        })
    }

})

//改
router.post("/update", (req, res) => {
    let { _id, pic } = req.body
    if (!_id) {
        res.json({
            data: "_id为空",
            code: 400,
            msg: "false",
            ret: false
        })
        return
    } else {
        tieZis.update({ _id }, { $set: { pic } }, (err, data) => {
            if (err) {
                res.json({
                    data: err,
                    code: 500,
                    msg: "false",
                    ret: false
                })
                return
            }
            if (data.n == 0) {
                res.json({
                    data: "_id无效",
                    code: 400,
                    msg: "_id无效",
                    ret: false,
                })
                return
            }
            res.json({
                data: 'success',
                code: 200,
                msg: "更改成功",
                ret: true
            })
        })
    }


})

//审核通过
router.post("/checkt", (req, res) => {
    let { _id } = req.body
    if (!_id) {
        res.json({
            data: "_id为空",
            code: 400,
            msg: "false",
            ret: false
        })
        return
    } else {
        tieZis.update({ _id }, { $set: { check: true } }, (err, data) => {
            if (err) {
                res.json({
                    data: err,
                    code: 500,
                    msg: "false",
                    ret: false
                })
                return
            }
            if (data.n == 0) {
                res.json({
                    data: "_id无效",
                    code: 400,
                    msg: "_id无效",
                    ret: false,
                })
                return
            }
            res.json({
                data: 'success',
                code: 200,
                msg: "审核更改成功",
                ret: true
            })
        })
    }


})

//审核不通过  //其实就是上面的删除接口
router.post("/checkf", (req, res) => {
    let { _id } = req.body
    if (!_id) {
        res.json({
            data: "_id为空",
            code: 400,
            msg: "false",
            ret: false
        })
        return
    } else {
        tieZis.remove({ _id }, (err, data) => {
            if (err) {
                res.json({
                    data: err,
                    code: 500,
                    msg: "false",
                    ret: false
                })
                return
            }
            if (data.n == 0) {
                res.json({
                    data: "_id没找到",
                    code: 400,
                    msg: "_id没找到",
                    ret: false,
                })
                return
            }
            res.json({
                data: '审核未通过请重新上传',
                code: 200,
                msg: "审核未通过请重新上传",
                ret: true
            })
        })
    }
})

//个人总结添加评论
router.post("/reply",(req,res)=>{
    let{_id,num} = req.body
    var reply = { 
        people:req.session.users.userName,
        userId:req.session.users.userId,
        time: new Date(),
        text:num,
    }    
    tieZis.findOne({_id,type:"0"},(err,data)=>{
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"false",
                ret:false
            })
            return
        }
        if(data== null){
            res.json({
                data:"_id无效或者该_id的type不为0",
                code:400,
                msg:"_id无效",
                ret:false,
            })
            return
        }
        data.reply.unshift(reply)
        tieZis.update({_id:_id},{$set:{reply:data.reply}},(err,dt)=>{
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
                data:"评论成功",
                code:200,
                msg:"评论成功",
                ret:true
            })
        })
    })
})


module.exports = router;
