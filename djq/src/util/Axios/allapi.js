export default {
  qiniu :'/upload/',

  getSlider: '/newsLists/getSlider',
  getNews: '/newsLists/getType',
  getNewsId:"/newsLists/getId",

  addTieZi:"/tieZis/add",
  findGrzj:"/tieZis/findGrzj",
  getGrzj:"/tieZis/get",
  addReply:"/tieZis/reply",
  
  userLogin:"/users/denglu",
  panDuan:"/users/panDuan",
  outLogin:"/users/tuichu",
  usersGet:"/users/usersGet",//获取党支部用户列表
  updatePwd:"/users/updatePwd",//更改密码
  updateUser:"/users/update",//更改用户信息
  userGet:"/users/userGet",//用户编辑反馈

  //积分
  addJf:"/jfs/add",
  getJf:"/jfs/getSum",  //查看积分总和
  getJfS:"/jfs/getJfS",//查看积分明细
  findJfS:"/jfs/find",//查找积分

  getMessagesPublic:"/messages/getPublic", //获取云互动列表 公开的  type ="1"
  getMessage:"/messages/get", //获取云互动列表 查询字符串传值_id
  addMessage:"/messages/add",  //增加
  addMessageReply:"/messages/reply",  //增加

  getData:"/getData",

  getMap:"/maps/get",
}
