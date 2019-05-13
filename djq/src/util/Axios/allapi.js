export default {
  qiniu :'/upload/',//七牛图片上传接口
  getSlider: '/newsLists/getSlider',//获取轮播图
  getNews: '/newsLists/getType',//获取新闻和通知
  getNewsId:"/newsLists/getId",//获取单个新闻或者通知
  addTieZi:"/tieZis/add",//增加帖子
  findGrzj:"/tieZis/findGrzj",//查找个人总结
  getGrzj:"/tieZis/get",//获取帖子列表
  addReply:"/tieZis/reply",//添加评论
  userLogin:"/users/denglu",//用户登录
  panDuan:"/users/panDuan",//用户登录判断
  outLogin:"/users/tuichu",//用户退出
  usersGet:"/users/usersGet",//获取党支部用户列表
  updatePwd:"/users/updatePwd",//更改密码
  updateUser:"/users/update",//更改用户信息
  userGet:"/users/userGet",//用户编辑反馈
  addJf:"/jfs/add",//用户添加积分
  getJf:"/jfs/getSum",  //查看积分总和
  getJfS:"/jfs/getJfS",//查看积分明细
  findJfS:"/jfs/find",//查找积分
  getMessagesPublic:"/messages/getPublic", //获取云互动列表 公开的  type ="1"
  getMessage:"/messages/get", //获取云互动列表 查询字符串传值_id
  addMessage:"/messages/add",  //增加
  addMessageReply:"/messages/reply",  //增加
  getData:"/getData",//获取相关时间
  getMap:"/maps/get",//获取地图坐标
}
