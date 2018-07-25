import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import axios from 'axios';
import ElementUI from 'element-ui';
// 默认主题
import 'element-ui/lib/theme-chalk/index.css';  

import "../public/css/main.css";
import "../public/css/color-dark.css";
import "./assets/css/common.css";
Vue.use(ElementUI, { size: 'small' });
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
