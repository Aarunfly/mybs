import Vue from 'vue'
import VueRouter from 'vue-router';
import router from './router/index'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from './axios';//通过import引入
import store from './store';//通过import引入

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(iView);
new Vue({
  render: h => h(App),
  axios,
  router,
  store
}).$mount('#app')
