import Vue from 'vue';
import App from './App.vue';
import router from './router';
Vue.config.productionTip = false;
import 'amfe-flexible';
import './assets/less/style.less';
import { List } from 'vant';
Vue.use(List);
new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
