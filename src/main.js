import Vue from 'vue'
import App from './App.vue'

//Amplify
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);


const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 1. Define route components.
// These can be imported from other files
import home from './components/Hero.vue'
import galaga from './components/Galaga.vue'
const homepage = { template: home }
const galagapage = { template: galaga }

const routes = [
  { path: '/', component: homepage },
  { path: '/galaga', component: galagapage }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
