import Vue from 'vue'
import App from './views/App.vue'
import Login from "./views/Login.vue";
import store from "./store";

import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(store.getters.isLogged ? App : Login)
})

