<template>
	<div class="friend" @click="getDetail2">
	 <img width="40" :src="$baseUrl + data.detail.auth_icon" alt=""/>
	 <span>{{data.detail.auth}}</span>
	 <span style="color: #666666;">分享单曲</span>
	 <div class="con">
		  <p style="color: #333333;font-size: 0.3rem;">{{data.des}}</p>
		  <img width="120" :src="$baseUrl +data.img">
	 </div>
	 <div class="zan">
		 <i><img src="../assets/img/zan.png" alt=""/></i>
		 <i><img src="../assets/img/aixin.png" alt=""/></i>
		 <i><img src="../assets/img/zhuan.png" alt=""/></i>
	 </div>
	</div>
</template>
<script>
  export default {
    name:'Friend',
    props:{
      data:{
        type:Object,
        required:true,
        default:function(){ //props类型是个对象，默认值要是一个函数，最后需要返回对象
          //...
          return {}
        }
      },
      apiName:{
        type:String,
        default:null
      }
    },
 
    components:{},
    mounted(){},
    updated(){},
    methods:{
      getDetail2(){
        if(this.apiName){
          // console.log('跳转详情',this.apiName);
          this.$router.push(`/detail2/${this.data._id}?apiName=${this.apiName}`);//编程式跳转
        }
      }
    }
  }
</script>

<style scoped>
  .friend { color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
  .friend span{font-size: 0.35rem; color: #5477B2;margin-left: 0.2rem;vertical-align:top;}
  .friend .con{margin-left: 0.8rem;}
  .friend h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
  .friend p{padding-bottom: 0.1rem;}
  .friend{clear:both;}
  .zan{text-align: right;}
  .zan i{width:0.34rem;height:0.24rem;display:inline-block;margin-left: 0.2rem;}
  .zan i img{width:100%;}
</style>
