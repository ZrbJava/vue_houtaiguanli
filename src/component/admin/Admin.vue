<template>
    <div class="admin">
        <el-container>
                <!-- 侧边栏公用部分 -->
            <el-aside width="200px">
                <app-aside></app-aside>
            </el-aside>
        
            <el-container>
                <!-- 头部公用 -->
                <el-header>
                    <app-header></app-header>
                </el-header>
                <!-- admin页面内容 -->
                <el-main>
                    <el-breadcrumb separator="/">
                    <el-breadcrumb-item>知识内容</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>内容管理</el-breadcrumb-item>
                    </el-breadcrumb>
                    <!-- 按钮部分 -->
                     <div class="button_section">
                        <el-row>
                            <el-col :span="20">
                                    <el-button size="small" icon="el-icon-plus">新增</el-button>
                                    <el-button size="small" icon="el-icon-check">全选</el-button>
                                    <el-button size="small" icon="el-icon-delete">删除</el-button>
                            </el-col>
                            <el-col :span="4">
                                <el-input v-model="input" class="inp_search" placeholder="请输入搜索内容"></el-input>
                            </el-col>
                        </el-row>
                    </div>
                    <!-- 表格数据 -->
                    <div class="table_data">
                            <el-table
                            border
                            ref="multipleTable"
                            :data="tableData3"
                            tooltip-effect="dark"
                            style="width: 100%"
                           >
                            <el-table-column
                            type="selection"
                            width="50">
                            </el-table-column>
                            <el-table-column
                            label="标题"
                            width="400">
                            <template slot-scope="scope">{{ scope.row.date }}</template>
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="所属类别"
                            width="120">
                            </el-table-column>
                            <el-table-column
                            prop="address"
                            label="发布时间/人"
                            show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                            prop="address"
                            label="属性"
                            show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                            prop="address"
                            label="操作"
                            width="100"
                            show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <el-button size="mini" type="danger">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                             

                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from "./subcom/Header.vue";
import Aside from "./subcom/Aside.vue";

export default {
  // 注册子组件
  components: {
    appHeader: Header,
    appAside: Aside
  },
  data(){
       return{
        //   搜索商品的数据定义
        input: '',
        // 表格数据配置
        tableData3: [
            {
            date: 'jackie_zhao学院信息',
            name: '全栈工程师',
            address: '2018-02-30/admin',
        },
        {
            date: 'jackie_zhao学院信息',
            name: '全栈工程师',
            address: '2018-02-30/admin',
        },
        {
            date: 'jackie_zhao学院信息',
            name: '全栈工程师',
            address: '2018-02-30/admin',
        },
        {
            date: 'jackie_zhao学院信息',
            name: '全栈工程师',
            address: '2018-02-30/admin',
        },
        {
            date: 'jackie_zhao学院信息',
            name: '全栈工程师',
            address: '2018-02-30/admin',
        },
        
        ]
       }
  },


};
</script>

<style scoped lang="less">
.admin {
  height: 100%;
  color: #333;

  .el-header {
    line-height: 60px;
  }

  .el-container {
    height: 100%;
  }

  // &在less中是对上级选择器的引用, 书写方便
  &_content {
    background-color: skyblue;
  }

  .el-aside {
    background-color: #267cb7;
  }
//   按钮部分
  .button_section{
      height: 60px;
      line-height: 60px;
      border: 1px solid #ccc;
      border-radius: 15px;
      padding:0 15px 0 15px;
  }
  .el-header,.el-main{
      padding:0;
  }
  .el-breadcrumb{
      height: 40px;
      line-height: 40px;
      border-bottom:1px solid #ccc;
      margin-bottom:20px;
  }
  .el-main{
      padding:0 20px;
      
  }
  .el-submenu__title:hover {
    background-color: red;
}
}
</style>