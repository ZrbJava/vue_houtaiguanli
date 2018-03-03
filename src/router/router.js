import Vue from "vue";
import VueRouter from "vue-router";
// 导入组件
import Login from "../component/login/Login.vue"
import Admin from "../component/admin/Admin.vue"

// 商品管理模块相关组件
import GoodsList from '../component/admin/goods/list/List.vue'
import GoodsDetail from '../component/admin/goods/detail/Detail.vue'
import GoodsComment from '../component/admin/goods/comment/Comment.vue'

// admin的子路由 => 商品管理模块相关页面
const goods = [
    { name: 'goodsList', path: 'goods/list', component: GoodsList }, // 子路由path不加/自动拼接父路由path
    { name: 'goodsDetail', path: 'goods/detail/:id', component: GoodsDetail }, // 子路由path不加/自动拼接父路由path
    { name: 'goodsComment', path: 'goods/comment', component: GoodsComment } // 子路由path不加/自动拼接父路由path
];
Vue.use(VueRouter);
var vueRouter = new VueRouter({
    routes: [
        {name:"login",path:"/login",component:Login},
        { name: "Admin", path: "/admin", component: Admin, children:[...goods] }
    ]
});
export default vueRouter