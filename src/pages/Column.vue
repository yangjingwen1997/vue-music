<template>
  <div class="Column">
	  <br>
	  <img src="../assets/img/1.jpg" width="100%">
	<div class="play">
		<img src="../assets/img/play.png"/>
		<i>播放全部</i>
	</div>

	 <tr>
		 <div> &nbsp; </div>
		 <div class="wp" >歌曲标题</div>
		 <div class="wp" >时长</div>
		 <div class="wp" >歌手</div>
	  </tr>
	
	  
		   <Music
     v-for="(item,index) of $store.state.column.column"
     :key="item._id"
     :data="item"
	 :index="index"
     api-name="column"
   />
	  
  
  </div>
</template>

<script>
  import Music from '../components/Music'
  export default {
    name:'Column',
    props:{},
    data(){
      return {
        column:[]
      }
    },
    components:{
      Music
    },
	activated(){
		this.$store.dispatch('column/'+this.$types.COLUMN) // dispatch->actions  commit->mutations
	},
  
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .Column{
	width: 100%;
    margin: 0.6rem auto;
  }
  .play{height: 1.5rem;}
  tr{
	  width: 100%;
	  float: left;
	  border-bottom: 1px solid #999;
	  border-top: 2px solid red;
	  margin-bottom: 0.2rem;
  }
  .play{
	  width: 100%;
	  height: 1%;
	  margin-bottom: 0.2rem;
	  overflow: hidden;
	  }
 .play i{
	  display: inline-block;
	  margin-top: 0.1rem;
	  width: 90%;
	  float: right;
	  font-size: 0.3rem;
	  color: #7B7C7C;
  }
  .play img{width: 5%;margin-top:0.1rem;display: inline-block;}
  .wp{
	  float: left;
	  width: 33%;
	  font-size: 0.3rem;
	  text-align: center;
  }
  .wp:nth-child(3){border-right: 1px solid #9E9A95;border-left: 1px solid #9E9A95;}
</style>
