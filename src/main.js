import Vue from 'vue'
import VModal from 'vue-js-modal'
import VMoney from 'v-money'
import VNotifications from 'vue-notification'

import VCan from './utils/can.mixin'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = process.env === 'production'

Vue.mixin(VCan)

Vue.use(VMoney, {
  decimal: ',',
  thousands: '.',
  prefix: 'R$ ',
  precision: 2,
  masked: false
})

Vue.use(VNotifications)

Vue.use(VModal, {
  componentName: 'VModal',
  dynamicDefault: {
    adaptive: true,
    maxWidth: '100%',
    minWidth: '360px'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
