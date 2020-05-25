import Vue from 'vue'
import App from './App.vue'
import overAll from './components'
Vue.config.productionTip = false
// import 'normalize.css/normalize.css'
import 'normalize.css'
Vue.use(overAll)
new Vue({
  render: h => h(App),
  overAll
}).$mount('#app')
