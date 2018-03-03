<template>
    <div class="list">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 按钮组, 带搜索框 -->
        <!-- 按钮部分 -->
        <div class="button_section">
            <el-row>
                <el-col :span="20">
                        <el-button size="small" icon="el-icon-plus">新增</el-button>
                        <el-button size="small" icon="el-icon-check">全选</el-button>
                        <el-button size="small" icon="el-icon-delete">删除</el-button>
                </el-col>
                <el-col :span="4">
                    <el-input v-model="apiQuery.searchvalue" @blur="search" class="inp_search" placeholder="请输入搜索内容"></el-input>
                </el-col>
            </el-row>
        </div>
        <!-- 大表格 -->
        <!-- data属性用来配置表格数据  -->
        <el-table border height="350"  ref="multipleTable" :data="tableData3" style="width: 100%">
            
            <!-- type为selection, 即多选框 -->
            <el-table-column type="selection" width="55"></el-table-column>

            <!-- label用来设置当前列的表头 -->
            <!-- 里面的template用来自定义表格中的内容与数据, 相比较prop属性的方式, 更加灵活, 可以对数据进行标签包裹 -->
            <el-table-column label="标题">
                <template slot-scope="scope">
                    <router-link style="color: #666;" :to="{ name: 'goodsDetail' }">{{ scope.row.title }}</router-link>
                </template>
            </el-table-column>

            <!-- 当前列要展示对象中的那个字段的值, 就配置prop属性为那个字段名 -->
            <el-table-column prop="categoryname" label="所属类别" width="120"></el-table-column>
            
            <!-- 当前列要展示对象中的那个字段的值, 就配置prop属性为那个字段名 -->
            <el-table-column prop="stock_quantity" label="库存" width="120" show-overflow-tooltip></el-table-column>

            <el-table-column prop="market_price" label="市场价" width="120" show-overflow-tooltip></el-table-column>

            <el-table-column prop="sell_price" label="销售价" width="120" show-overflow-tooltip></el-table-column>

            <el-table-column label="属性" width="120" show-overflow-tooltip>
                <!-- 注意template要加slot-scope属性 -->
                <template slot-scope="scope">里面是三个图标</template>
            </el-table-column>

            <el-table-column label="操作" width="120" show-overflow-tooltip>
                <template slot-scope="scope">
                    <router-link style="color: #666;" :to="{ name: 'goodsDetail' }"> <el-button size="mini" type="danger">删除</el-button></router-link>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页 -->
          <el-pagination
          style="margin-top:20px;"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                 // 搜索
                apiQuery: {
                    pageIndex: 1,
                    pageSize: 10,
                    searchvalue: ''
                },
                tableData3: [
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                ],
                multipleSelection: [],
            }
        },
        methods: {
            // 搜索
            search() {
                this.getGoodsData();
            },
            // 获取商品列表数据
            getGoodsData() {
                // 这个接口需要pageIndex指定页, pageSize指定每页数量, searchvalue用于商品搜索
                let api = `${this.$api.gsList}?pageIndex=${this.apiQuery.pageIndex}&pageSize=${this.apiQuery.pageSize}&searchvalue=${this.apiQuery.searchvalue}`;
                this.$http.get(api).then((res) => {
                    if(res.data.status == 0) {
                      console.log(res);                                        
                        this.tableData3 = res.data.message;  // 把请求回来的数据覆盖原data数量, 表格就会自动刷新
                    }
                });
            },
            
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },

            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        },

        // 页面一上来就自动调用接口获取表格数据进行展示
        created() {
            this.getGoodsData();
        }
    }
</script>

<style scoped lang="less">
    //   按钮部分

  .button_section {
    height: 60px;
    line-height: 60px;
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 0 15px 0 15px;
    margin:10px 0;
  }
  
</style>
