<template>
  <div class="foot-btn" >
    <ul>
      <router-link
        class="home"
        exact-active-class="home_active"
        to="/home"
        tag="li"
      >
        <a href="javascript:;">首页</a>
      </router-link>
      <router-link
        class="write"
        exact-active-class="write_active"
        to="/follow"
        tag="li"
      >
        <a href="javascript:;"></a>
      </router-link>
      <router-link
        class="my"
        exact-active-class="my_active"
        to="/user"
        tag="li"
      >
        <a href="javascript:;">我的</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'Footer',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .foot-btn{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;z-index: 99;}
  .foot-btn ul{width:4.08rem; margin:0 auto;}
  .foot-btn ul li{ float:left;width: 1.2rem;}
  .foot-btn ul li a{ display:block; width:100%;height:100%;margin-top: 0.4rem;font-size: 0.2rem;}
  
  .foot-btn ul .home{width:0.44rem;height:0.59rem; background:url(../assets/img/black1.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;}
  .foot-btn ul .write{width:0.82rem;height:0.81rem; background:url(../assets/img/musicb.png) no-repeat 0 0; background-size:100%; margin-left:1.18rem;}
  .foot-btn ul .my{width:0.44rem;height:0.59rem; background:url(../assets/img/myb.png) no-repeat 0 0;background-size:100%; margin-left:1.18rem; margin-top:0.07rem;}
  
  .foot-btn ul .home_active{width:0.44rem;height:0.59rem; background:url(../assets/img/red.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;}
  .foot-btn ul .write_active{width:0.82rem;height:0.81rem; background:url(../assets/img/musicr.png) no-repeat 0 0; background-size:100%; margin-left:1.18rem;}
  .foot-btn ul .my_active{width:0.44rem;height:0.59rem; background:url(../assets/img/myr.png) no-repeat 0 0;background-size:100%; margin-left:1.18rem; margin-top:0.07rem;}
  
</style>
