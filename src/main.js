import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Input,Row,Col,Tabs,message } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tabs)

Vue.prototype.$message = message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
