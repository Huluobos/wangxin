
var express = require('express');
var router = express.Router();

var qiniuConfig  = require("../uitl/qiniuConfig")
var token = qiniuConfig()

router.get('/upload', function(req, res, next) {
    res.json({
        data:token,  //获取到 token   //访问  http://localhost:3000/api/upload
        code:200,
        msg:"success",
        ret:"true"
    })
});

module.exports = router;
