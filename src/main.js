import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$angle = 0

new Vue({
  render: h => h(App),
}).$mount('#app')
