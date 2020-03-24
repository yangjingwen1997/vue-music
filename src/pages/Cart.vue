<template>
  <div class="Cart">
	  <img src="../assets/img/shop1.jpg" width="50%">
	  <img src="../assets/img/shop2.jpg" width="50%">
	  
	  <h2>编辑推荐 > </h2>
	  <hr style="background-color: red;height:1px;">
	  <Shop
	  v-for="item of $store.state.cart.cart"
	  :data="item"
	  :key="item._id"
	  api-name="cart"
	  />

  </div>
</template>

<script>
  import Shop from '../components/Shop'
  export default {
    name:'Cart',
    props:{},
    data(){
      return {
        cart:[]
      }
    },
    components:{
      Shop
    },
	activated(){
		this.$store.dispatch('cart/'+this.$types.CART)   //->actions
    },
    // mounted(){
    //     this.$axios({
    //     url:'/api/goods/cart',
    //     params:{_page:1,_limit:6},
    //   }).then(
    //     res=>this.cart = res.data.data
    //   )
    // },
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .Cart{
    margin-top: .6rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
	height: 18rem;
  }
  .Cart>img{margin-top: 0.5rem;}
  .Cart div p{font-size: 0.3rem;color: #333333;text-align: center;}
  .Cart p span{color: red;}
</style>
