
var qiniu =require ("qiniu")
//详情地址  https://github.com/qiniu/nodejs-sdk/blob/master/docs/nodejs-sdk-v7.md#simple-uptoken
 

module.exports = function(){
    var accessKey = 'hiaSMM1QqBT-0Q0KywiDrpp_tXbgBz8p1mFXkoil';   //定义许可
    var secretKey = 'A4to1dxJHlKuQ_HuoKWhdf34-J3B_dYzt4eIT5tl';  //定义秘钥
    var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);  //定义签名// 七牛的构造器函数

    var options = {
        scope: "public", // 这里填写对应七牛的存储的空间名 
        returnBody:  '{"key": $(key), "hash": $(etag), "url": "http://pbl.yaojunrong.com/$(key)"}',
        // expires: 3600,// 设置token的时间，   否则 报错 401 post
        // deadline: Math.round(new Date().getTime()/1000)+3600,
        deadline: 1830268800,

    };
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken=putPolicy.uploadToken(mac);   //这是我们的上传凭证
    return uploadToken
}