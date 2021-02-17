import Vue from 'vue'
import Vuex from 'vuex'
import Store from './modules/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Store
  }
})