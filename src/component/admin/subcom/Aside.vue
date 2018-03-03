<template>
    <el-aside width="200px" style="background-color:#267cb7">
        <img src="../../../assects/img/login_logo.png" alt="">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        text-color="#fff"
        background-color="#267cb7"
        active-text-color="#0f0"
        >
          <el-submenu  v-for="item in menu" :key="item.title" :index="item.title">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.title}}</span>
            </template>
              <el-menu-item class="el-icon-menu" v-for="subitem in item.chidren" :index="subitem.title" :key="subitem.title">
                <router-link :to="subitem.path"> {{subitem.title}}</router-link>
              </el-menu-item>
          </el-submenu>
      </el-menu>
    </el-aside>
</template>

<script>

  export default {
    data() {
        return {
            menu: [
                { title: '商品管理', chidren: [ 
                        { title: '内容管理', path: '/admin/goods' }, 
                        { title: '类别管理', path: '/admin/category' }, 
                        { title: '评论管理', path: '/admin/comment' } 
                    ]
                },
                { title: '订单管理', chidren: [ 
                        { title: '内容管理1', path: '/admin/a' }, 
                        { title: '类别管理2', path: '/admin/b' }, 
                        { title: '评论管理3', path: '/admin/c' } 
                    ]
                },
                { title: '前端基础知识', chidren: [ 
                        { title: 'javascript', path: '/admin/a' }, 
                        { title: 'css', path: '/admin/b' }, 
                        { title: 'html', path: '/admin/c' } 
                    ]
                },
                { title: '包管理器', chidren: [ 
                        { title: 'yarm', path: '/admin/a' }, 
                        { title: 'npm', path: '/admin/b' }, 
                        { title: 'bower', path: '/admin/c' } 
                    ]
                },
                { title: '购物商城', chidren: [ 
                        { title: '内容管理', path: '/admin/goods/list' }, 
                        { title: '类别管理', path: '/admin/b' }, 
                        { title: '评论管理', path: '/admin/c' } 
                    ]
                },
            ]
        }
    },
}
</script>

<style scoped lang="less">

 .el-submenu__title i{
   color:#0f0;
 }
    
    
</style>