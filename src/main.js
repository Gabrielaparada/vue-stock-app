import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes.js'
import store from './store/store.js'
import VueResource from 'vue-resource'


Vue.filter('currency', (value)=>{
  return '$' + value.toLocaleString();
})
Vue.use(VueResource)

Vue.http.optios.root = 'https://vuejs-stock-trader-5817f-default-rtdb.firebaseio.com/'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: routes

})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


