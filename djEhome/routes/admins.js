var express = require('express');
var router = express.Router();
var admins = require("../database/model/admins")

//添加后台用户  密码未加密
router.post("/zhuce",(req,res)=>{
  let{adminName,adminPwd}= req.body
  admins.findOne({adminName},(err,data)=>{
    if(err){
      res.json({
        data:err,
        code:500,
        msg:"false",
        ret:false
      })
      return
    }else if(data){
      res.json({
        data:"该用户已存在",
        code:400,
        msg:"该用户已存在",
        ret:false
      })
      return
    }else {
      admins.create({adminName,adminPwd},(err,data)=>{
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
    }
  })
})

router.get("/adminsGet",(req,res)=>{
  var {_id}= req.query
  var params = {}
  if(!_id){
    params = {}
  }else{
    params._id = _id
  }
  admins.find(params,(err,data)=>{
      if(err){
        res.json({
          data:err,
          code:500,
          msg:"false",
          ret:false,
        })
        return
      }
      res.json({
        data:data,
        code:200,
        msg:"success",
        ret:true,
      })
  })
})

//登录
router.post("/denglu",(req,res)=>{
  let {adminName,adminPwd} = req.body
  admins.findOne({adminName},(err,data)=>{
    if(err){
      res.json({
        data:err,
        code:500,
        msg:"false",
        ret:false
      })
      return
    }else if(!data){
      res.json({
        data:"该用户不存在，请先添加管理员",
        code:400,
        msg:"该用户不存在，请先添加管理员",
        ret:false
      })
      return
    }else{
      if(data.adminPwd != adminPwd){
        res.json({
          data:"密码错误",
          code:400,
          msg:"密码错误",
          ret:false
        })
        return
      }else{
        req.session.admins = data
        res.json({
          data:"登录成功",
          code:200,
          msg:"登录成功",
          ret:true
        })
       return
      }
    }
  })
})

//退出登录
router.get('/tuichu',(req,res)=>{
  if(req.session.admins){
    req.session.admins = null
    res.json({
      data:"退出成功",
      code:200,
      msg:"退出成功",
      ret:true
    })
    return
  }else{
    res.json({
      data:"管理员未登录，请重新登录",
      code:400,
      msg:"管理员未登录，请重新登录",
      ret:false,
    })
    return
  }
})

//更改用户密码=-
router.post("/updatePwd",(req,res)=>{
  var {adminName,adminPwd} = req.session.admins
    var {pwdNew}= req.body   //  pwdNew 新密码
    var {pwdOld} = req.body    //  pwdOld 旧密码  ||validator.isEmpty(pwdNew.trim())
    if(!pwdNew){
      res.json({
        data:"新密码格式不合法",
        code:400,
        msg:"新密码格式不合法",
        ret:false,
      })
      return
    }
    if(adminPwd!=pwdOld){
      res.json({
        data:"原密码错误",
        code:400,
        msg:"原密码错误",
        ret:false
      })
      return
    }else if(pwdOld == pwdNew) {
      res.json({
        data:"新旧密码一样，不用更改",
        code:400,
        msg:"新旧密码一样，不用更改",
        ret:false
      })
      return
    }else{
      admins.update({adminName:adminName},{$set:{adminPwd:pwdNew}},(err,data)=>{
        if(err){
          res.json({
            data:err,
            code:500,
            msg:"服务端错误",
            ret:false
          })
          return
        }else{
          res.json({
            data:"修改密码成功",
            code:200,
            msg:"修改密码成功",
            ret:true,
          })
          console.log(data)
        }

      })
    }
})

//删除用户
router.post('/adminDel',(function(req,res){
  let{_id} = req.body
  admins.remove({_id:_id},(err,data)=>{
    if (err){
      res.json({
        data:err,
        code:500,
        msg:"false",
        ret:false,
      })
      return
    }
    if(data.n == 0){
      res.json({
        data:"没有找到删除的用户",
        code:400,
        msg:"没有找到删除的用户",
        ret:false,
      })
      return
    }
    res.json({
      data:"删除成功",
      code:200,
      msg:"success",
      ret:true,
    })
  })
}))


//判断的登录中间件
router.get('/panDuan',(req,res,next)=>{
  let admin = req.session.admins 
  if(admin != null){
    res.json({
      data:admin,
      code:200,
      msg:"已登录",
      ret:true
    })
  }else{
    res.json({
      data:"未登录",
      code:400,
      msg:"未登录",
      ret:false
    })
  }
})

module.exports = router;
