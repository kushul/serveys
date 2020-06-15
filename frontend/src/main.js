import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';

import NoData from "./components/shared/NoDataAlert.vue";
Vue.component("no-data", NoData);

import Loading from "./components/shared/Loading.vue";
Vue.component("loading", Loading);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
