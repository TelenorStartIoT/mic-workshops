import Vue from 'vue'
import attachCognitoModule from '@vuetify/vuex-cognito-module'
import store from '@/store'
import App from '@/App.vue'

import '@mdi/font/css/materialdesignicons.css'
import '@/plugins/vuetify'

/* Attach Cognito module to Vuex store.
 * This gives the application a module in our 'central state'
 * with information about the user / session. It also gives
 * us actions that we can dispatch to login/logout.
 */
attachCognitoModule(store, {
  userPoolId: process.env.VUE_APP_USER_POOL_ID,
  identityPoolId: process.env.VUE_APP_IDENTITY_POOL_ID,
  userPoolWebClientId: process.env.VUE_APP_CLIENT_ID,
  region: process.env.VUE_APP_REGION
}, 'Cognito') // The name of the module

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
