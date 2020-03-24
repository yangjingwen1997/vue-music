<template>
  <div class="Friend">
	  <h2>
		  <i>动态</i>
	  <img src="../assets/img/dongtai.png" width="40%">
	  </h2>
	  <hr style="background-color: red;height:1px;">
    <Share
      v-for="(item,index) of $store.state.friend.friend"
      :key="item._id"
      :data="item"
      :index="index"
      api-name="friend"
    />
  </div>
</template>

<script>
  import Share from '../components/Share.vue'
  import {mapActions} from 'vuex'
  import {FRIEND} from '../store/types.js'
  // import axios from '../plugins/axios.js'
  export default {
    name:'Friend',
    props:{},
    // data(){
    //   return {
    //     friend:[]
    //   }
    // },
    components:{
      Share
    },
    mounted(){
      // this.$root.bLoading=true;
      axios({
        url:'/api/goods/friend',
        params:{_page:1,_limit:8},
      }).then(
        res=>{
          // this.$root.bLoading=false;
          this.friend = res.data.data
        }
      )
    },
    updated(){},
    methods:{},
	// methods:mapActions('firend',[FRIEND]),
	// activated(){
	// 	this[this.$types.FRIEND]()
	// },
	activated(){
		this.$store.dispatch('friend/'+this.$types.FRIEND) // dispatch->actions  commit->mutations
	},
  }
</script>

<style scoped>
  .Friend{
	width: 100%;
	background-color: #fff;
	height: 18rem;
    margin: 0 auto;
	margin-top: 0.9rem;
  }
  h2 i{font-size: 0.35rem;font-style: normal;padding-top: 0.1rem;}
  h2 img{float:right;}
</style>
