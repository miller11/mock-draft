import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Amplify from 'aws-amplify';
import { components } from 'aws-amplify-vue';
import aws_exports from './aws-exports';

Vue.config.productionTip = false;

Amplify.configure(aws_exports);

Vue.use(VueRouter);

const routes = [

];

const router = new VueRouter({
  routes // short for `routes: routes`
});


new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: {
    App,
    ...components
  }
});
