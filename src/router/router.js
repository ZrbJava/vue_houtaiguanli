import Vue from "vue";
import VueRouter from "vue-router";
// 导入组件
import Login from "../component/login/Login.vue"
import Register from "../component/register/Register.vue"
import UserManager from "../component/userManager/UserManager.vue"
import DataManager from "../component/dataManager/DataManager.vue"

Vue.use(VueRouter);
var vueRouter = new VueRouter({
    routes: [
        {name:"login",path:"/login",component:Login},
        {name:"register",path:"/register",component:Register},
        {name:"UserManager",path:"/userManager",component:UserManager},
        {name:"DataManager",path:"/dataManager",component:DataManager},
    ]
});
export default vueRouter