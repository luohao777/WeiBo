// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import VueTouch from 'vue-touch'
import { InfiniteScroll  } from 'mint-ui'
import 'iview/dist/styles/iview.css';
import { Input } from 'iview';

import 'mint-ui/lib/style.css'
import './assets/base.css'
import './assets/css/iconfont.css'

Vue.component('Input',Input);

Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(InfiniteScroll)


Vue.prototype.$http = axios
Vue.config.productionTip = false
// Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
