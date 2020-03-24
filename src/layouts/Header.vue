<template>
  <div class="nav">
    <ul>
      <router-link
        to="/home"
        exact-active-class="active"
        tag="li"
      >
        <a href="javascript:;" >发现音乐</a>
      </router-link>
      <router-link
        to="/friend"
        exact-active-class="active"
        tag="li"
      >
        <a href="javascript:;" >朋友</a>
      </router-link>
      <router-link
        to="/column"
        exact-active-class="active"
        tag="li"
      >
        <a href="javascript:;" >我的音乐</a>
      </router-link>
	  <router-link
	    to="/cart"
	    exact-active-class="active"
	    tag="li"
	  >
	    <a href="javascript:;" >商城</a>
	  </router-link>
      
    </ul>
  </div>
</template>

<script>
  export default {
    name:'Header',
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

<style>
  .nav{width:100%; position:fixed; top:0;left:0; z-index:2; background:#fff;}
  .nav ul{width:5.88rem;height:0.8rem; margin:0 auto;}
  .nav ul li{width:1.46rem;height:0.8rem; float:left;}
  .nav ul li a{ display:block;width:1.46rem;height:0.8rem; line-height:0.7rem; text-align:center; font-size:0.3rem; color:#9e9a95;}
  .nav ul li.active a{height:0.7rem; border-bottom:0.1rem solid red; color:indianred}
</style>
