// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import less from 'less'
Vue.use(less)

import vant from 'vant'
import {Toast} from 'vant'
Vue.prototype.$msg = Toast
import 'vant/lib/index.css';
Vue.use(vant)

import '@/assets/style.css'


import http from './http'
Vue.prototype.$http = http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
