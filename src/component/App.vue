<template>
  <div class="box">
      {{msg}}
  </div>
</template>
<script>
export default{
    data(){
        return{
            msg:" hello root components!"
        }
    }
}
</script>
<style>
    .box{
        background: #333222;
    }
</style>
