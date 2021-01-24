import api from '@/services/api'

const state = () => ({
  token: '',
  user: null
})

const mutations = {
  authenticate_user (state, user) {
    state.user = user
  },

  clear_user (state) {
    state.user = null
  }
}

const actions = {
  async login ({ commit }, { email, password }) {
    const { data } = await api.get('/users', { params: { email } })
    if (data.length) {
      commit('authenticate_user', data.find(Boolean))
    } else {
      throw new Error('Incorrect e-mail/password combination')
    }
  },

  async logout ({ commit }) {
    commit('clear_user')
  }
}

const getters = {
  isAuthenticated: state => !!state.user,
  user: state => state.user
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
