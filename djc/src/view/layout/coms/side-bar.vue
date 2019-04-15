<template>
  <div class="side-bar">
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router = "true"
      >

        <el-submenu index="1">
          <template slot="title">
           <i class="el-icon-document"></i>            
            <span>新闻管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/news">新闻列表</el-menu-item>
            <el-menu-item index="/news/add">添加新闻</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
           <i class="el-icon-document"></i>            
            <span>轮播图管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/slider">轮播图列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
           <i class="el-icon-menu"></i>            
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/users">用户列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

         

        

        <el-submenu index="4">
          <template slot="title">
           <i class="el-icon-menu"></i>            
            <span>党员互动</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/messages">互动列表</el-menu-item>
            <el-menu-item index="/messages/reply">互动评论</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
           <i class="el-icon-menu"></i>            
            <span>历史上的今天</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/today">历史上的今天列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu> 

        <el-submenu index="6">
          <template slot="title">
           <i class="el-icon-document"></i>            
            <span>党支部坐标管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/maps">党支部坐标列表</el-menu-item>
            <el-menu-item index="/maps/add">添加党支部坐标</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="7">
          <template slot="title">
           <i class="el-icon-menu"></i>            
            <span>个人总结</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/grzj">个人总结列表</el-menu-item>
            <el-menu-item index="/grzj/reply">个人总结评价列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="8">
          <template slot="title">
           <i class="el-icon-menu"></i>            
            <span>思想汇报</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/sxhb">思想汇报列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="9">
          <template slot="title">
           <i class="el-icon-menu"></i>            
            <span>心得总结</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/xdzj">心得总结列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>      
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'side-bar'
    
  }
</script>
<style>
  .el-menu{
    border-right: none;
  }
</style>
<style scoped>
.side-bar{
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  width: 230px;
  background-color: #545c64;
}

</style>
