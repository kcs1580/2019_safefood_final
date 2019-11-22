import Vue from "vue";
import App from "./App.vue";
import router from './router'
import './plugins/element.js'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css' 
import axios from 'axios'


Vue.config.productionTip = false;
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
