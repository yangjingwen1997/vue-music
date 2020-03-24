<template>
  <div class="cell" @click="getDetail">
    <p><span v-show="index!=null">{{index + 1}} . {{data.des}}</span>
	<b>{{data.auth}}</b>
	</p>
  </div>
 
</template>

<script>
  export default {
    name:'Bang',
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
      getDetail(){
        if(this.apiName){
          console.log('跳转详情',this.apiName);
          // '路由跳转':'/detail/23423423443?apiname=column'
          this.$router.push(`/detail/${this.data._id}?apiName=${this.apiName}`);//编程式跳转
        }
      }
    }
  }
</script>

<style scoped>
  .cell {font-size:0.2rem;border-bottom:1px dashed #ccc;width:100%;clear: both;}
  .cell p{display:block;color:#666666;width:100%;display: inline-block;padding-bottom: 0.02rem;}
  span{color: #494D4D;float: left; font-size: 0.25rem;}
  b{color: #494D4D;float: right;font-size: 0.2rem;}
</style>
