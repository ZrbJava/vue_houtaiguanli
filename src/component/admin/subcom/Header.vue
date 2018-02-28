<template>
    <div class="header">
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                <span>你好, {{ uname }}</span>
                <i class="el-icon-caret-bottom">功能</i>
            </span>

            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">修改密码</el-dropdown-item>
                <el-dropdown-item command="b">退出登陆</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                uname: localStorage.getItem('uname')
            }
        },

        methods: {
            logout() {
                this.$http.get(this.$api.logout).then((res) => {
                    if(res.data.status == 0) {
                        this.$router.push({name: 'login'});
                    }
                });
            },

            // 通过command参数判断点击的是那个菜单
            handleCommand(command) {
                if(command == 'b') {
                    this.logout();
                }
            }
        },
    }
</script>

<style scoped lang="less">
    .el-container .el-main{
        padding:0;
    }
    .header {
       
        height:40px;
        line-height: 40px;
        background: #fafafa;
        text-align: right;
        span{
            border-right: 1px solid #ccc;
        }
        .el-dropdown{
            font-size:16px;
        }
    }
</style>