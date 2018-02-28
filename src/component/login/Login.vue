<template>
    <div class="login">
        <section>
            <div class="login_logo">
                <img src="../../assects/img/login_logo.png" alt="">
            </div>
            <!-- model用来设置表单所有字段, rules用来设置表单校验规则的(可省略, 但是如果需要表单校验功能, 必须写)  -->
            <div class="login-form">
                <el-form :model="ruleForm2" :rules="rules2" label-position="top" status-icon ref="login_form" label-width="200px" class="demo-ruleForm">

                <!-- label用来设置表单提示文字, prop用来指定当前表单代表的字段名(可省略, 但是如果需要表单校验与重置功能, 必须写) -->
                <el-form-item  label="账号" prop="uname">
                    <!-- v-model双向数据绑定, 需要绑定data里的数据, 将来要把这些数据提交给后端 -->
                    <el-input  type="text" v-model="ruleForm2.uname" auto-complete="off" autofocus></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="upwd">
                    <el-input type="password" v-model="ruleForm2.upwd" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item icon="el-icon-edit">
                    <el-button size="medium" round type="primary" @click="submitForm('login_form')">登陆</el-button>
                    <el-button size="medium" round  type="info"  @click="resetForm('login_form')">重置</el-button>
                </el-form-item>

            </el-form>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {

                // 这里的字段要按照接口文档进行修改
                ruleForm2: {
                    uname: "",
                    upwd: ""
                },

                // 这里添加的校验规则, 每个字段可以加多个, 所以是个数组
                rules2: {
                    uname: [{ required:true, message: "请输入用户名", trigger: "blur" }],
                    upwd: [{ required:true, message: "请输入密码", trigger: "blur" }]
                }
            };
        },

        methods: {

            login() {
                // post请求的第二个参数是发送的数据, 这里直接把data里的表单对象传过去
                this.$http.post(this.$api.login, this.ruleForm2).then((res) => {
                    if(res.data.status == 0) {
                        // 第一个参数是文本内部, 第二个标题, 第三个是个配置对象
                        this.$alert('登陆成功', '提示', {
                            callback: () => {
                                // 保存用户姓名
                                localStorage.setItem('uname', res.data.message.uname);

                                // 使用了路由插件之后, 组件实例就拥有了该对象, 对象有一个push方法, 可以进行路由跳转
                                this.$router.push({ name: 'Admin' });
                            }
                        });
                    }else {
                        this.$alert(res.data.message);
                    }
                });
            },

            // 登陆按钮方法
            // this.$refs用来获取页面中的元素或组件, 这里通过它拿到form表单组件, 调用validate方法, 给所有表单进行校验
            submitForm(formName) {
                // validate传入一个回调, 如果valid为true, 证明通过校验, 否则不通过
                this.$refs[formName].validate(valid => {
                    if (valid) {
                    this.login();
                    } else {
                    this.$alert("账号或密码不合格!");
                    }
                });
            },

            // 重置按钮方法
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    };
</script>
<style lang="less">


.login {
    .el-form-item__content{
        text-align:center;
    }
    .el-form-item__label{
        color:#fff;
        font-size:18px;
    }
    font-size:18px;
    color:#fff;
    height: 100%;
    background: #267cb7;
    position: relative;
  section {
    background: #267cb7;
    width: 400px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
     .login_logo img{
        margin: 0 auto; 
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .login-form{
        padding:0 10px 0 10px;
        border: 1px solid #c9deed;
        border-radius:15px;
    }
  }
}
</style>

