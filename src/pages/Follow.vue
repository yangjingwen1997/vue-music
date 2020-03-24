<template>
  <div class="Follow">
	  <h2>榜单</h2>
	  <hr style="background-color: red;height:1px;">
    <div class="box">
	  <img src="../assets/img/icon1.jpg" width="150">
	  <div>
		<Bang
		   v-for="(item,index) of $store.state.follow.follow"
		   :key="item._id"
		   :data="item.one"
		   :index="index"
		   api-name="follow"
		 />
	 </div>
    </div>
	<div class="box">
	  <img src="../assets/img/icon2.jpg" width="150">
	<div>
		<Bang
		   v-for="(item,index) of $store.state.follow.follow"
		   :key="item._id"
		   :data="item.two"
		   :index="index"
		   api-name="follow"
		 />
		 </div>
	</div>
	<div class="box">
	  <img src="../assets/img/icon3.jpg" width="150">
	<div>
	 <Bang
	    v-for="(item,index) of $store.state.follow.follow"
	    :key="item._id"
	    :data="item.three"
	    :index="index"
	    api-name="follow"
	  />
	 </div>
	</div>
	<div class="box">
	  <img src="../assets/img/icon4.jpg" width="150">
	<div>
	<Bang
	   v-for="(item,index) of $store.state.follow.follow"
	   :key="item._id"
	   :data="item.four"
	   :index="index"
	   api-name="follow"
	 />	
	 </div>
	</div>
	<div class="box">
	  <img src="../assets/img/icon5.jpg" width="150">
	<div>
	<Bang
	   v-for="(item,index) of $store.state.follow.follow"
	   :key="item._id"
	   :data="item.five"
	   :index="index"
	   api-name="follow"
	 />	
	 </div>
	</div>
</div>
</template>

<script>
  import Bang from '../components/Bang.vue'
  import {mapActions} from 'vuex'
  import {FOLLOW} from '../store/types.js'
  // import axios from '../plugins/axios.js'
// console.log(data.auth)
  export default {
    name:'Follow',
    props:{},
    data(){
      return {
        follow:[]
      }
    },
    components:{
      Bang
    },
  
    updated(){},
    methods:{},
	methods:mapActions('follow',[FOLLOW]),
	activated(){
		this[this.$types.FOLLOW]()
	}
  }
</script>

<style scoped>
  .Follow{
	width: 100%;
	min-height: 15rem;
    margin-top: 1rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
  .Follow h2{
	  font-size: 0.5rem;
  }
   .Follow .box{
	  width: 100%;
	  margin: 0.2rem 0;
	  display: flex;
	  justify-content: space-between;
	  align-items: flex-start;
  }
  .box img{
	display: block;
	width: 30%;
	}
	.box div{
	    width:85%;
		margin-left: 0.2rem;
		
	}
</style>
