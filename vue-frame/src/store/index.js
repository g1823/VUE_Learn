//本文件用于创建vuex中的核心：store

//引入Vuex
import Vuex from 'vuex'
//引入Vue
import Vue from 'vue'

//使用vuex插件
Vue.use(Vuex)

//准备actions:用于响应组件中的动作
const actions = {

}

//准备mutations:用于操作数据(state状态)
const mutations = {

}

//准备state:用于存储数据(状态)
const state = {

}

//创建Store并暴露
export default new Vuex.Store({
    actions:actions,
    //重名了直接简写
    mutations,
    state
})