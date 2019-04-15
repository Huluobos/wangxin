import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect: '/shouYe'
    },
    {
      path:"/login",
      name:"登录",
      component:()=>import('@/view/login')
    },
    {
      path:"/shouYe",
      name:"",
      component:()=>import('@/view/shouYe')
    },
        {
          path: '/eyes',
          name: '信工新闻眼',
          component:()=>import('@/view/news/newsEye'),
        },
        {
          path: '/eyes/detail',
          name: '信工新闻眼',
          component:()=>import('@/view/news/newsEyes'),
        },
        {
          path: '/ydt',
          name: '党建一点通',
          component:()=>import('@/view/news/djydt'),
        },
        {
          path: '/ydt/detail',
          name: '党建一点通',
          component:()=>import('@/view/news/djydts'),
        },
        {
          path: '/lsf',
          name: '党员亮身份',
          component:()=>import('@/view/news/dylsf'),
        },
        {
          path: '/lsf/detail',
          name: '党员亮身份',
          component:()=>import('@/view/news/dylsfs'),
        },
        {
          path: '/ssx',
          name: '随时随地学',
          component:()=>import('@/view/news/ssx'),
        },
        {
          path: '/ssx/detail',
          name: '随时随地学',
          component:()=>import('@/view/news/ssxs'),
        },
        {
          path: '/sdp',
          name: '随时随地拍',
          component:()=>import('@/view/news/sdp'),
        },
        {
          path: '/sdp/detail',
          name: '随时随地拍',
          component:()=>import('@/view/news/sdps'),
        },
        {
          path: '/zdjs',
          name: '制度建设',
          component:()=>import('@/view/news/zdjs'),
        },
        {
          path: '/zdjs/detail',
          name: '制度建设',
          component:()=>import('@/view/news/zdjss'),
        },
        {
          path: '/tshd',
          name: '特色活动',
          component:()=>import('@/view/news/tshd'),
        },
        {
          path: '/tshd/detail',
          name: '特色活动',
          component:()=>import('@/view/news/tshds'),
        },



        
        {
        path: '/zzsh',
        name: '掌上组织生活',
        component:()=>import('@/view/zzsh/zzsh'),
        },
          {
            path: '/zzxx',
            name: '政治学习',
            component:()=>import('@/view/zzsh/zzxx'),
          },
          {
            path: '/zzxx/detail',
            name: '政治学习',
            component:()=>import('@/view/zzsh/zzxxs'),
          },
          {
            path: '/sxhb',
            name: '思想汇报',
            component:()=>import('@/view/zzsh/sxhb'),
          },
          {
            path: '/xdzj',
            name: '心得总结',
            component:()=>import('@/view/zzsh/xdzj'),
          },
          {
            path: '/mzpy',
            name: '民主评议',
            component:()=>import('@/view/zzsh/mzpy'),
          },
          {
            path: '/mzpy/mzpys',
            name: '民主评议',
            component:()=>import('@/view/zzsh/mzpys'),
          },
          {
            path: '/mzpy/mzpys/list',
            name: '参评党员',
            component:()=>import('@/view/zzsh/mzpysList'),
          },
          {
            path: '/mzpy/mzpys/detail',
            name: '民主评议',
            component:()=>import('@/view/zzsh/mzpyReply'),
          },
          {
            path: '/mzpy/grzj',
            name: '个人总结',
            component:()=>import('@/view/zzsh/grzjs'),
          },
          {
            path: '/mzpy/grzj/grzjsCheck',
            name: '个人总结审核页',
            component:()=>import('@/view/zzsh/grzjsCheck'),
          },
          
          {
            path: '/map',
            name: '流动党员找组织',
            component:()=>import('@/view/zzsh/map'),
          },


    {
    path: '/yhd',
    name: '党员云互动',
    component:()=>import('@/view/yhd/yhd'),
    },
    {
    path: '/yhd/reply',
    name: '党员云互动',
    component:()=>import('@/view/yhd/reply'),
    },



    {
    path: '/today',
    name: '党史上的今天',
    component:()=>import('@/view/today/today'),
    },
    {
      path: '/tongZhi',
      name: '通知早知道',
      component:()=>import('@/view/tongZhi'),

    },
    {
      path: '/tongZhi/detail',
      name: '通知早知道',
      component:()=>import('@/view/tongZhis'),

    },


    {
      path: '/myDj',
      name: '我的党建',
      component:()=>import('@/view/myDj'),
    },
    {
      path: '/myDj/information',
      name: '个人信息',
      component:()=>import('@/view/user/information'),
    },
    {
      path: '/myDj/information/update',
      name: '修改个人信息',
      component:()=>import('@/view/user/informationUpdate'),
    },
    {
      path: '/myDj/jf',
      name: '个人量化积分',
      component:()=>import('@/view/user/jf'),
    },
    {
      path: '/myDj/jf/jfs',
      name: '积分明细',
      component:()=>import('@/view/user/jfs'),
    },
    {
      path: '/myDj/changePwd',
      name: '修改密码',
      component:()=>import('@/view/user/changePwd'),
    },
    {
      path: '/myDj/money',
      name: '党费缴纳',
      component:()=>import('@/view/user/money'),
    },

         
  ]
})
