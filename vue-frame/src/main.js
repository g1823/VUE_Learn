//引入运行版本vue
import Vue from 'vue'
//引入父组件App.vue
import App from './App.vue'
//引入路由router
import VueRouter from 'vue-router'
//引入自己创建的路由器
import router from './router/index'

//引入ElemnetUI组件库
import ElementUI from 'element-ui'
//引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css'


//关闭生产环境提醒
Vue.config.productionTip = false
//应用router插件
Vue.use(VueRouter)
//应用ElemnetUI
Vue.use(ElementUI)
//创建Vue实例
new Vue({
  el:"#app",
  render: h => h(App),
  router:router,
  beforeCreate(){
      Vue.prototype.$bus = this
  }
})
