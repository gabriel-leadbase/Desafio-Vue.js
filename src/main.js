import Vue from 'vue'
import VModal from 'vue-js-modal'
import VMoney from 'v-money'
import VNotifications from 'vue-notification'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VMoney, {
  decimal: ',',
  thousands: '.',
  prefix: 'R$ ',
  precision: 2,
  masked: false
})

Vue.use(VNotifications)

Vue.use(VModal, {
  componentName: 'VModal'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
