import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'hash',
  base: window.location.pathname,
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
