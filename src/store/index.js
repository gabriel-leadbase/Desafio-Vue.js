import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

import auth from './auth.module'

Vue.use(Vuex)

const persitence = createPersistedState({
  key: 'drugsky@state'
})

export default new Vuex.Store({
  modules: {
    auth
  },
  plugins: [
    persitence
  ]
})
