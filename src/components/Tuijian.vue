<template>
	<div class="pic">
		<router-link
		  to="/column"
		  exact-active-class="active"
		  tag="figure"
		>
		<img src="../assets/img/tu1.jpg">
		<figcaption>临近赤道的你...</figcaption>
		</router-link>
		<router-link
		  to="/column"
		  exact-active-class="active"
		  tag="figure"
		>
		<img src="../assets/img/tu4.jpg">
		<figcaption>民谣与烟嗓儿...</figcaption>
		</router-link>
		<router-link
		  to="/column"
		  exact-active-class="active"
		  tag="figure"
		>
		<img src="../assets/img/tu3.jpg">
		<figcaption>耳朵里的阳光...</figcaption>
		</router-link>
	</div>
</template>

<script>
	export default{
		name:'Tuijian',
		methods:{
		  
		}
	}
</script>

<style scoped>
	.pic{
		height: 2.3rem;
		display: flex;
		width: 100%;
		align-content: flex-start;
		border-bottom:1px solid #9E9A95;
	}
	.pic figure{
		width: 5%;
		margin: 0 0.3rem;
	}
	.pic figure img{width: 1.5rem;height: 1.5rem;}
	.pic figcaption{
		color: #333;
		font-size: 0.25rem;
	}

</style>
