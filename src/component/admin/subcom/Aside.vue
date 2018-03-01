<template>
     <el-aside width="200px" style="background-color:#267cb7">
       <img src="../../../assects/img/login_logo.png" alt="">
    <el-menu 
      default-active="2"
      text-color="#fff"
      background-color="#267cb7"
      active-text-color="#20a0ff"
    >
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>学员问题汇总</template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><i class="el-icon-document"></i>内容管理</el-menu-item>
          <el-menu-item index="1-2"><i class="el-icon-document"></i>类别管理</el-menu-item>
          <el-menu-item index="1-3"><i class="el-icon-document"></i>评论管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>前端常用功能</template>
        <el-menu-item-group>
          <el-menu-item index="2-1"><i class="el-icon-document"></i>内容管理</el-menu-item>
          <el-menu-item index="2-2"><i class="el-icon-document"></i>类别管理</el-menu-item>
          <el-menu-item index="2-3"><i class="el-icon-document"></i>评论管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>重难点转区</template>
        <el-menu-item-group>
          <el-menu-item index="3-1"><i class="el-icon-document"></i>内容管理</el-menu-item>
          <el-menu-item index="3-2"><i class="el-icon-document"></i>类别管理</el-menu-item>
          <el-menu-item index="3-3"><i class="el-icon-document"></i>评论管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-message"></i>资源下载</template>
        <el-menu-item-group>
          <el-menu-item index="4-1"><i class="el-icon-document"></i>内容管理</el-menu-item>
          <el-menu-item index="4-2"><i class="el-icon-document"></i>类别管理</el-menu-item>
          <el-menu-item index="4-3"><i class="el-icon-document"></i>评论管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-message"></i>购物商城</template>
        <el-menu-item-group>
          <el-menu-item index="5-1"><i class="el-icon-document"></i>内容管理</el-menu-item>
          <el-menu-item index="5-2"><i class="el-icon-document"></i>类别管理</el-menu-item>
          <el-menu-item index="5-3"><i class="el-icon-document"></i>评论管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-message"></i>订单管理</template>
        <el-menu-item-group>
          <el-menu-item index="6-1"><i class="el-icon-document"></i>内容管理</el-menu-item>
          <el-menu-item index="6-2"><i class="el-icon-document"></i>类别管理</el-menu-item>
          <el-menu-item index="6-3"><i class="el-icon-document"></i>评论管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </el-aside>
</template>

<script>

    export default {

    }
</script>

<style scoped lang="less">
 .el-aside {
   color:#fff;
 }
 .el-submenu__title i{
   color:#fff;
 }
 .el-menu-item-group>ul {
    overflow:hidden;
    padding:0;
}
 
    
    
</style>