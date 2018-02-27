import Vue from "vue";
import App from "./component/App.vue";
import vueRouter from "./router/router.js"

new Vue({
    el: '#app',
    router:vueRouter,
    // 这个render函数是用来挂载组件，h是工具辅助函数，它可以叫名字
      render: a=> a(App),
  })