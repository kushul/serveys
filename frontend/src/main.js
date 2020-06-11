import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import axios from "axios";

import NoData from "./components/shared/NoDataAlert.vue";
Vue.component("no-data", NoData);

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
