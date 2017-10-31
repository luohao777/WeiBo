// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Lazyload } from 'mint-ui';
import './assets/base.css'
import './assets/css/iconfont.css'
import VueTouch from 'vue-touch'
import vuePicturePreview from 'vue-picture-preview'
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(Lazyload);
Vue.use(vuePicturePreview)


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
