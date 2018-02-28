import Vue from "vue";
import App from "./component/App.vue";
import vueRouter from "./router/router.js";
import ElementUi from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import "normalize.css";
import axios from "axios";
import api, { domain } from "./js/api.js";
import "less";
import less from "./less/index.less"
Vue.use(ElementUi);

// 配置默认域名, 这样请求的时候就不用在url里每次手动加域名了
axios.defaults.baseURL = domain;
// 因为我们调用的接口跨域了, 默认情况下接口给我们设置cookie无效, 为了让它有效, 我们必须添加此配置
axios.defaults.withCredentials = true;
//将所有需要用的模块添加到Vue原型上，让Vue实例化的每个对象都可以共享
Vue.prototype.$api = api;

Vue.prototype.$http = axios;
new Vue({
    el: '#app',
    router:vueRouter,
    // 这个render函数是用来挂载组件，h是工具辅助函数，它可以叫名字
      render: a=> a(App),
  })