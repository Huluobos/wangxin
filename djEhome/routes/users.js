var express = require('express');
var router = express.Router();
var users = require("../database/model/users")



//注册  密码未加密
router.post("/zhuce",(req,res)=>{
  let{userName,userId,pwd,headPic,homePlace,minZu,workPlace,wx,qq,edu,zhicheng,gongZi,ruDangTime,lastTime,shenFen,dzb}= req.body
  users.findOne({userId},(err,data)=>{
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
      users.create({userName,userId,pwd,headPic,homePlace,minZu,workPlace,wx,qq,edu,zhicheng,gongZi,ruDangTime,lastTime,shenFen,dzb},(err,data)=>{
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

//登录
router.post("/denglu",(req,res)=>{
  let {userId,pwd} = req.body
  users.findOne({userId},(err,data)=>{
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
        data:"该用户不存在，请先注册",
        code:400,
        msg:"该用户不存在，请先注册",
        ret:false
      })
      return
    }else{
      if(data.pwd != pwd){
        res.json({
          data:"密码错误",
          code:400,
          msg:"密码错误",
          ret:false
        })
        return
      }else{
        req.session.users = data
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
  if(req.session.users){
    req.session.users = null
    res.json({
      data:"退出成功",
      code:200,
      msg:"退出成功",
      ret:true
    })
    return
  }else{
    res.json({
      data:"用户未登录，请重新登录",
      code:400,
      msg:"用户未登录，请重新登录",
      ret:false,
    })
    return
  }
})

//更改用户信息
router.post("/update",(req,res)=>{
    let{userName,headPic,homePlace,minZu,workPlace,wx,qq,edu,zhicheng,gongZi,ruDangTime,lastTime,shenFen,dzb}= req.body
    let {userId} = req.session.users
    if(!userName){
      res.json({
        data:"userName为空",
        code:400,
        msg:"false",
        ret:false
      })
      return
    }
    if(!headPic){
      res.json({
        data:"headPic为空",
        code:400,
        msg:"false",
        ret:false
      })
      return
    }
    users.update({userId},{userName,headPic,homePlace,minZu,workPlace,wx,qq,edu,zhicheng,gongZi,ruDangTime,lastTime,shenFen,dzb},(err,data)=>{
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
})

//更改用户密码
router.post("/updatePwd",(req,res)=>{
  var {userId,pwd} = req.session.users
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
    if(pwd!=pwdOld){
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
      users.update({userId:userId},{$set:{pwd:pwdNew}},(err,data)=>{
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

//前台接口用于登陆后的用户信息获取  这个接口应用于编辑个人信息处
router.get("/userGet",(function (req,res) {
  let params = {}
  if(!req.session.users) {
    params = {}
    return
  }else {
    let {userId}= req.session.users
    params.userId = userId;
    users.findOne(params,(err,data)=>{
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
  }
  
}))

//后台接口用于用户信息列表获取  也用于党员党支部的分组  //字段 dzb  非必传
router.get("/usersGet",(req,res)=>{
    var {dzb}= req.query
    var params = {}
    if(!dzb){
      params = {}
    }else{
      params.dzb = dzb
    }
    users.find(params,(err,data)=>{
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

//删除用户
router.post('/userDel',(function(req,res){
  let{userId} = req.body
  users.remove({userId},(err,data)=>{
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
  if(req.session.users){
    res.json({
      data:req.session,
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
