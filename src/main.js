import Vue from 'vue'
import App from './App.vue'

//Amplify
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

//Fullpage.js
import 'fullpage.js/vendors/scrolloverflow.min.js'
import VueFullPage from 'vue-fullpage.js'

import vuetify from './plugins/vuetify';
Vue.use(VueFullPage);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
