<template>
  <div class="detail">
    <uc-nav/>
    <div class="content" v-if="detail2.title">
      <div class="header clear">
        <h2><img width="50" :src="$baseUrl + detail2.detail.auth_icon" alt=""/></h2>
        <p>{{detail2.detail.auth}}</p>
      </div>
      <div class="cont">
        <h3>{{detail2.title}}</h3>
		<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width='100%' height=100 src="//music.163.com/outchain/player?type=3&id=2066040073&auto=0&height=66"></iframe>
        <div class="text-box" v-html="detail2.detail.content"></div>
      </div>
    </div>
    <frame-screen v-else></frame-screen>
    <uc-toolbar/>
  </div>
</template>

<script>
  import UcNav from '../components/uc-nav'
  import UcToolbar from '../components/uc-toolbar.vue'
  import FrameScreen from '../components/frame-screen.vue'
  import {mapState} from 'vuex'
  export default {
    name: 'Detail2',
    props: {},
    // data() {
    //   return {
    //     detail2:{}
    //   }
    // },
    components: {
      UcNav,UcToolbar,FrameScreen
    },
	activated(){
		let apiname=this.$route.query.apiName
		let _id = this.$route.params._id
		this.$store.dispatch(`detail2/${this.$types.DETAIL2}`,{apiname,_id})
		// this.$store.dispatch(this.$types.DETAIL2,{apiname,_id})
	},
  
	computed:mapState('detail2',['detail2']),
    updated() {},
    methods: {},
    // filters:{
    //   date(time){
        
    //     let fillzero = n => n < 10 ? '0' + n : '' + n;
        
    //     let d=new Date();
    //     d.setTime(time)
    //     let year = d.getFullYear();
    //     let month = d.getMonth()+1;
    //     let date = d.getDate();
    //     let hour = d.getHours();
    //     let min = d.getMinutes();
    //     let sec = d.getSeconds();
    //     return `${year}年${fillzero(month)}月${fillzero(date)}日 ${fillzero(hour)}:${fillzero(min)}:${fillzero(sec)}`
    //   }
    // }
  }
</script>

<style scoped>
  html,body{ overflow-x: hidden; }
  .detail{width: 100%;margin: 0 auto;}
  .nav{width:100%; position:fixed;top:0;left:0; background:#fff; border-bottom:1px solid #e8eaec; z-index:99;}
  .nav ul{width:6.4rem;height:0.45rem; padding-top:0.15rem; margin:0 auto;}
  .nav ul li{width:0.29rem;height:0.31rem; background:url(../assets/img/history.png) no-repeat 0 0; background-size:100%; margin:0 0 0 0.38rem;}
  
  .content{max-width:6.4rem; margin:0 auto; margin-top:0.6rem; background:#f2f4f5; padding-bottom:0.85rem;}
  .content .header{ padding:0.39rem 0.28rem 0.15rem 0.28rem; height:auto; background: none}
  .header h2{ float:left; margin-right:0.18rem;}
  .header p{ float:left; margin-top:0.18rem; font-size:0.3rem;}
  
  .content .cont{ padding:0 0.38rem; color:#494d4d;}
  .cont h3{ font-size:0.4rem; line-height:0.6rem; padding-bottom:0.25rem; border-bottom:1px solid #494d4d;}
  .cont .time{height:0.24rem; line-height:0.24rem; margin:0.26rem 0; }
  .time p{ float:left;position:relative;}
  .time span{width:0.33rem;height:0.32rem; position:absolute; top:-0.02rem;right:-0.35rem;}
  .time span img{width:100%;height:100%;}
  
  .cont .text-box{ font-size:0.25rem;}
  .text-box p{ line-height:0.45rem; margin-bottom:0.1rem;}
  
</style>
