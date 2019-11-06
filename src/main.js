import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
 
Vue.use(VueAxios, axios)
Vue.use(VueRouter)

axios.defaults.baseURL = 'http://localhost:3000';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
