import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL='http://localhost:8081'
// axios.defaults.headers.post['Content-Type']='application/json;charset=utf-8'
Vue.use(ElementUI)
Vue.use(router)
Vue.use(axios)
// axios.defaults.baseURL='http://116.62.144.88:8081'

// 自定义全局聚焦函数
Vue.directive('focus',{
  inserted: function(el){
    el.focus()
  }
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
