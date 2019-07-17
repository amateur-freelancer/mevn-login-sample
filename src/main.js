import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import router from './router';
import Autocomplete from 'v-autocomplete';

Vue.use(VeeValidate);
Vue.use(Autocomplete);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
