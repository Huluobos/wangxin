import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/view/layout/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'admins',
      component:()=>import('@/view/admin/login'),
    },  
    {
      path: "/admin",
      name:"管理员",
      redirect:"/admin/list",
      component: layout,
      children:[
          {
            path: "/admin/list",
            name:"管理员列表页",
            component: ()=>import('@/view/admin/list')
          },
          {
            path: "/admin/add",
            name:"管理员添加页",
            component: ()=>import('@/view/admin/add')
          },            
      ]  
    },
    {
      path: '/news',
      name: 'NEWS',
      redirect:"/news/list",
      component: layout,
      children:[
          {
            path: "/news/list",
            name:"新闻列表页",
            component: ()=>import('@/view/news/list')
          },
          {
            path: "/news/add",
            name:"新闻添加页",
            component:()=>import('@/view/news/add')
          },
          {
            path: "/news/update",
            name:"新闻编辑",
            component:()=>import('@/view/news/add')
          },
      ]
    },
    {
      path: '/slider',
      name: '轮播图',
      redirect:"/slider/list",
      component: layout,
      children:[
          {
            path: "/slider/list",
            name:"轮播图列表页",
            component: ()=>import('@/view/slider/list')
          },
      ]
    },
    {
      path: '/users',
      name: 'users',
      redirect:"/users/list",
      component: layout,
      children:[
          {
            path: "/users/list",
            name:"用户列表页",
            component: ()=>import('@/view/users/list')
          },
      ]
    },
    {
      path: '/grzj',
      name: '个人总结',
      redirect:"/grzj/list",
      component: layout,
      children:[
          {
            path: "/grzj/list",
            name:"个人总结列表页",
            component: ()=>import('@/view/grzj/list')
          },
          {
            path: "/grzj/reply",
            name:"个人总结评价列表页",
            component: ()=>import('@/view/grzj/reply')
          }
      ]
    },
    {
      path: '/sxhb',
      name: '思想汇报',
      redirect:"/sxhb/list",
      component: layout,
      children:[
          {
            path: "/sxhb/list",
            name:"思想汇报列表页",
            component: ()=>import('@/view/sxhb/list')
          }
      ]
    },
    {
      path: '/xdzj',
      name: '心得总结',
      redirect:"/xdzj/list",
      component: layout,
      children:[
          {
            path: "/xdzj/list",
            name:"心得总结列表页",
            component: ()=>import('@/view/xdzj/list')
          }
      ]
    },

    {
      path: '/messages',
      name: '互动',
      redirect:"/messages/list",
      component: layout,
      children:[
          {
            path: "/messages/list",
            name:"互动列表页",
            component: ()=>import('@/view/messages/list')
          },
          {
            path: "/messages/reply",
            name:"互动评论页",
            component: ()=>import('@/view/messages/reply')
          }
      ]
    },
    {
      path: '/today',
      name: '今日党史',
      redirect:"/today/list",
      component: layout,
      children:[
        {
          path: "/today/list",
          name:"历史上的今天",
          component: ()=>import('@/view/today/list')
        },
      ]
    },
    {
      path: '/maps',
      name: '坐标',
      redirect:"/maps/list",
      component: layout,
      children:[
          {
            path: "/maps/list",
            name:"党支部坐标列表页",
            component: ()=>import('@/view/maps/list')
          },
          {
            path: "/maps/add",
            name:"党支部坐标添加页",
            component:()=>import('@/view/maps/add')
          },
          {
            path: "/maps/update",
            name:"党支部坐标编辑",
            component:()=>import('@/view/maps/add')
          },
      ]
    },
  ]
})
