var express = require('express');
var router = express.Router();
var getData = require("../uitl/getData")

router.get("/",(req,res,next)=>{
  getData().then(data => {
    res.json({
      data:data,
      code:200,
      msg:"success"
    })
  })
})
module.exports = router;
