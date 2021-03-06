// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component('todo-item', {
  template: '<h4>내용을입력해볼까?</h4>'
})
Vue.component('child', {
  // JavaScript는 camelCase
  props: ['myMessage'],
  template: '<div><h1>{{ myMessage }}</h1><span>{{ myMessage }}1234</span></div>'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
