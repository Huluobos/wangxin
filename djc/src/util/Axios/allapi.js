export default {

    qiniu :'/upload',
  

//管理员
    dengluAdmin: '/admins/denglu', 
    tuichu: '/admins/tuichu', 
    getAdmin: '/admins/adminsGet', 
    zhuceAdmin: '/admins/zhuce', 
    panDuanAdmin: '/admins/panDuan', 
    updatePwdAdmin: '/admins/updatePwd', 
    adminDel: '/admins/adminDel', 
   


  //news
  getNews: '/newsLists/getType',
  addNews: '/newsLists/add',
  delNews: '/newsLists/delete',
  updataNews:'/newsLists/update',
  getIdNews:'/newsLists/getId',
  
  //轮播图
  getSlider:'/newsLists/getSlider',
  delSlider:'/newsLists/updateSlider', //删除
  addSlider:'/newsLists/addSlider',  
  
//用户
  getUsers:"/users/usersGet",
  delUsers:"/users/userDel",


  //帖子 个人总结 啥的
  getTieZis:"/tieZis/get",
  shenHet:"/tieZis/checkt",
  shenHef:"/tieZis/checkf",
  // getReply:"/tieZis/reply",

  //党员互动
  getMes:"/messages/get",
  deleteMes:"/messages/delete",

  //历史的今天
  getToday:"/getData",
  

  //党支部坐标
  getMaps: '/maps/get',
  addMaps: '/maps/add',
  delMaps: '/maps/delete',
  updataMaps:'/maps/update',
}
