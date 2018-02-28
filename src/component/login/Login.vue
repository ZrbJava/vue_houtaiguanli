<template>
  <div class="box">
      <h1>{{msg}}</h1>
      <img src="../../assects/img/2.jpg" alt="">

  </div>
</template>

<script>

export default{
    data(){
        return{
            msg:"登录页面"
        }
    },
    // 生命周期函数, vue会自动调用
    created() {
        this.$http.get(this.$api.logout).then(() => console.log('退出登陆'))
    }
}
 

</script>
<style>
    .box{
        background: #333222;
        color:#fff;
        font-size:20px;
    }
</style>

