// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import store from './store';
import App from './App';

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App },
});
