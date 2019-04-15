
var express = require('express');
var router = express.Router();
var maps = require("../database/model/maps")

//个人总结

// 增
router.post('/add', function(req, res, next) {
    let{jd,wd,text}= req.body
    maps.create({jd,wd,text},(err,data)=>{
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

// 获取列表
router.get('/get',(req,res)=>{
    let {_id}= req.query
    let params = {}
    if(!_id){
        params = {}
    }else{
        params._id = _id;
    }
    maps.find(params,(err,data)=>{
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
        maps.remove({_id},(err,data)=>{
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
    let {_id,jd,wd,text} = req.body
    if(!_id){
        res.json({
            data:"_id为空",
            code:400,
            msg:"false",
            ret:false
        })
        return
    }else{
        maps.update({_id},{$set:{jd,wd,text}},(err,data)=>{
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

module.exports = router;
