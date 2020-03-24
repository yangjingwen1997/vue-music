import {get} from '../service.js'
import * as types from '../types.js'

const state={
	friend:[]
}

let actions={
	[types.FRIEND]({commit,state},payload){
		get({apiname:'friend',params:{_page:1,_limit:8}}).then(
			result=>commit('FRIEND',result)
		)
	},
}
let mutations={
	[types.FRIEND]:(state,payload)=>state.friend=payload,
}
export default {
	namespaced:true,
	state,actions,mutations
}