// require('@babel/polyfill')
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  render: r => r(App),
  router
}).$mount('#app')

