<template>
  <div class="box">
      <ul class="clearfix">
          <li>
              <router-link to="/login">登录页面</router-link>
          </li>
          <li>
              <router-link to="/register">注册页面</router-link>
          </li>
          <li>
              <router-link to="/userManager">用户管理系统</router-link>
          </li>
          <li>
              <router-link to="/dataManager">数据管理系统</router-link>
          </li>
      </ul>
      <div class="component">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default{
    data(){
        return{
            msg:"这是首页"
        }
    }
}
</script>
<style>
    *{
        margin:0;
        padding:0;
    }
    body,html{
        height:100%;
    }
    a{
        text-decoration: none;
        color:#fff;
        width:100%;
        display:block;
        background: yellowgreen;
    }
    .box{
        background: #333222;
        color:#fff;
        font-size:20px;
        width: 1200px;
        height:100%;
        margin:0 auto;
        height:100%;
    }
    img{
        width:100%;
    }
    ul{
        list-style:none;
    }
    li{
        float:left;
        padding-right: 5px;
        width:25%;
        height:40px;
        line-height: 40px;
        text-align:center;
        
        box-sizing: border-box;
    }
    li:last-child{
        padding-right: 0px;
    }
    .clearfix::after{
        content: "";
        display:block;
        height:0;
        line-height: 0;
        visibility: hidden;
        clear: both;
    }

</style>

