<template>
    <div class="header">
        <i class="el-icon-menu"></i>
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                <span class="uname">你好, {{ uname }}</span>
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
    @border_color:#eee;
    .el-container .el-main{
        padding:0;
    }
    .header {
        position: relative;
        height:40px;
        padding-right:20px;
        line-height: 40px;
        background: #fafafa;
        text-align: right;
        border-bottom:1px solid @border_color;
        .el-icon-menu{
            display:inline-block;
            width: 40px;
            height:40px;
            text-align:center;
            line-height: 40px;
            border-right:1px solid @border_color;
            float:left;
            font-size:20px;
            color:#686f7f;
        }

        span{
            border-right: 1px solid @border_color;
        }
        .el-dropdown{
            font-size:16px;
        }
        & .uname{
            height: 100%;
            display: inline-block;
            padding: 0 10px;
        }
    }
</style>