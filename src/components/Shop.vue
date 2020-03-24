<template>
	<div class="shop">
			<img :src="$baseUrl + data.img" width="48%">
			<div class="button">
				<p>{{data.des}}</p>
				  <el-input-number 
				  v-model="num" 
				  @change="handleChange" 
				  :min="1" :max="10">
				  </el-input-number>
			
				<span>￥{{data.price}} &nbsp;&nbsp; <i> ￥{{data.p}}</i></span> 
			</div>
		
	</div>
</template>

<script>
	export default{
		name:'Shop',
		data(){
			return {num:1}
		},
		props:{
			data:{
				type:Object,
				required:true,
				default:function(){
					return {}
				}
			},
			apiName:{
			  type:String,
			  default:null
			}
		},
		methods:{
			handleChange(value) {
			}
		}
	}
</script>

<style scoped>
	div.shop{border-bottom: 1px dashed red;padding: 0.3rem 0;}
	div p{font-size: 0.3rem;color: #333333;text-align: center;margin-bottom: 0.2rem;}
	span{color: red;display: block;font-size: 0.4rem;margin-top: 0.2rem;}
	input{width: 40px;border-top:1px solid #999999;border-bottom:1px solid #999999;text-align: center;}
	.button{width: 50%;float: right;text-align: center;margin-top: 0.4rem;padding-left: 0.1rem;}
	i{text-decoration: line-through;color: #999;font-size: 0.3rem;}
</style>
