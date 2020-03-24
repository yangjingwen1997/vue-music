<template>
 <div class="cell" @click="gomusic">
    
	<div v-show="index!=null">{{index + 1}} . {{data.title}}</div>
	<div>{{data.time}}</div>
	<div>{{data.auth}}</div>
	
  </div>
</template>

<script>
  export default {
    name:'Music',
	
    props:{
      data:{
        type:Object,
        required:true,
        default:function(){ //props类型是个对象，默认值要是一个函数，最后需要返回对象
          //...
          return {}
        }
      },
      index:{
        type:Number,
        default:null
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
	  gomusic(){
	    if(this.apiName){
	      console.log('跳转详情',this.apiName);
	      this.$router.push(`/detail/${this.data._id}?apiName=${this.apiName}`);//编程式跳转
	    }
	  }
	}
    
  }
</script>

<style scoped>

  .cell { color:#494d4d; padding:0.2rem 0;width: 100%;}
  .cell div{font-size:0.25rem;width:32%;display: inline-block;text-align: center;}
  .cell div:nth-child(1){text-align: left;padding-left: 0.1rem;}
</style>

