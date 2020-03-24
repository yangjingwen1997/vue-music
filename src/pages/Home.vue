<template>
  <div class="Home">
    
    <swiper
      :data="$store.state.banner.banner"
      apiName="banner"
    />
    <div class="fm">
			<router-link
			  to="/column"
			  exact-active-class="active"
			  class="cir"
			>
			<img src="../assets/img/icon-1.png">
			<span class="word">私人</span>
			</router-link>
			<router-link
			  to="/friend"
			  exact-active-class="active"
			  class="cir"
			>
			<img src="../assets/img/icon-2.png">
			<span class="word">推荐</span>
			</router-link>
			<router-link
			  to="/follow"
			  exact-active-class="active"
			  class="cir"
			>
			<img src="../assets/img/icon-3.png">
			<span class="word">歌单</span>
			</router-link
			>
			</router-link>
			<router-link
			  to="/follow"
			  exact-active-class="active"
			  class="cir"
			>
			<img src="../assets/img/paihangbang.png">
			<span class="word">排行</span>
			</router-link>
			
		
	</div>
	
	<p class="tuij">推荐歌单 ></p>
	<Tuijian></Tuijian>
    <div class="home-m-l-r">
      <Cell
        v-for="(item,index) of $store.state.home.home"
        :key="item._id"
        :data="item"
        :index="index"
        api-name="home"
      />
    </div>
    
    
  </div>
</template>

<script>
  import swiper from '../components/swiper.vue'
  import Cell from '../components/Cell.vue'
  import Tuijian from '../components/Tuijian.vue'
  export default {
    name:'Home',
    props:{},
    // data(){
    //   return {
    //     list:[],
    //     home:[]
    //   }
    // },
    components:{
      swiper,Cell,Tuijian
    },
	activated(){
	//封装axios->services.js
		this.$store.dispatch('home/'+this.$types.HOME)
		this.$store.dispatch(`banner/${this.$types.BANNER}`)
	},
 
    updated(){},
    methods:{},
  }
</script>

<style scoped>

  .Home{
    /* background: #999999; */
	min-height:13rem;
  }
  .home-m-l-r{
    margin: 0 0.4rem;
	height: 8rem;
  }
  .tuij{
  	height: 0.4rem;
	width: 100%;
	overflow: hidden;
  	line-height: 0.4rem;
  	padding-left: 0.1rem;
	padding-top: 0.1rem;
  	color: #333333;
  	margin:0.15rem 0;
  	font-size: 0.3rem;
  	border-left: 3px solid #D43C33;
  }
  .fm{
  	height: 1.2rem;
	border-bottom: 1px solid #9E9A95;
	width: 100%;
	float: left;
	padding: 0.2rem;
  }
  .fm .cir{
  	width: 0.8rem;
  	height: 0.8rem;
	float: left;
	margin-left: 0.5rem;
  	border: 1px solid #D43C33;
  	border-radius: 50%;
  }
  .fm .cir img{
	width: 0.5rem;
	height: 0.5rem;
  	margin-top: 0.15rem;
  	margin-left: 0.16rem;
  }
  .fm .cir .word{
	font-size: 0.25rem;
	display: inline-block;
	margin-left: 0.15rem;
  	margin-top: 0.15rem;
 }

</style>
