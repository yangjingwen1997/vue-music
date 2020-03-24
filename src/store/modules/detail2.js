import {get} from '../service.js'

import * as types from '../types'//整体输入，存为types对象

const state={
  detail2:{}
}

let actions = {
  [types.DETAIL2]({commit,state},{apiname,_id}){
    get({apiname,_id}).then(
      result=>commit('DETAIL2',result)
    )
  }
}

let mutations = {
  [types.DETAIL2]:(state,payload)=>state.detail2=payload,
}

export default{
  namespaced:true,//命名空间的模块。模块内部直接调用，外部需要命名空间(见组件)
  state,actions,mutations
}