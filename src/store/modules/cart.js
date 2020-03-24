import {get} from '../service.js'
import * as types from '../types.js'

const state={
	cart:[]
}
const actions={
	[types.CART]({commit,state},payload){
		get({apiname:'cart',params:{_page:1,_limit:10}}).then(
		result=>commit('CART',result)
		)
	},
}

const mutations={
	[types.CART]:(state,payload)=>state.cart=payload,
}

export default {
	namespaced:true,
	state,actions,mutations
}