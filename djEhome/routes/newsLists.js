
var express = require('express');
var router = express.Router();
var newsLists = require("../database/model/newsLists")

//新闻列表

//增加新闻
router.post('/add', function (req, res, next) {
    let { title, author, pic, content, type, slider } = req.body
    newsLists.create({ title, author, pic, content, type, slider }, (err, data) => {
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
});

// 获取列表 type 
router.get('/getType', (req, res) => {
    var { type } = req.query
    var params = {}
    if (!type) {
        params = {}
    } else {
        params.type = type
    }
    newsLists.find(params, (err, data) => {
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


//获取单个新闻  _id 必传
router.get('/getId', (req, res) => {
    var { _id } = req.query
    newsLists.findOne({ _id },(err, data) => {
        if (err) {
            res.json({
                data: err,
                code: 500,
                msg: "false",
                ret: false
            })
            return
        }
        if(data==null){
            res.json({
                data: "新闻_id未找到",
                code: 400,
                msg: "新闻_id未找到",
                ret: false
            })
            return
        }
        var count = data.count
        var count = count + 1
        newsLists.update({ _id: _id }, { $set: {count: count } },(error, dt) => {
            if (error) {
                res.json({
                    data: error,
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
            console.log("加一成功")
        })
       
    })
})

//改新闻
router.post("/update", (req, res) => {
    let { _id, title, author, pic, content, type, updateTime } = req.body
    // console.log(req.body)
    newsLists.update({ _id }, { $set: { title, author, pic, content, type, upDateTime: new Date() } }, (err, data) => {
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
                data: "id无效",
                code: 400,
                msg: "id无效",
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

})


//删除
router.post("/delete", (req, res) => {
    let { _id } = req.body
    newsLists.remove({ _id }, (err, data) => {
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
                data: "没有找到删除的项目",
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
})


//获取轮播图 slider 必传
router.get('/getSlider', (req, res) => {
    // var {slider} = req.query
    newsLists.find({slider:"1"}, (err, data) => {
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

// 添加轮播图
router.post("/addSlider", (req, res) => {
    let { _id} = req.body
    // console.log(req.body)
    newsLists.update({ _id }, { $set: { slider:1} }, (err, data) => {
        // console.log(data)
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
                data: "id无效",
                code: 400,
                msg: "id无效",
                ret: false,
            })
            return
        }
        res.json({
            data: 'success',
            code: 200,
            msg: "添加成功",
            ret: true
        })
    })
})


//删除轮播图
router.post("/updateSlider", (req, res) => {
    let { _id} = req.body
    // console.log(req.body)
    newsLists.update({ _id }, { $set: { slider:0} }, (err, data) => {
        // console.log(data)
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
                data: "id无效",
                code: 400,
                msg: "id无效",
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
})



module.exports = router;
