import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import './mock/mock.js'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view';
import * as echarts from 'echarts'

Vue.use(dataV)
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
