/* eslint-disable */
import stockFilling from '../../mock'

const state = {
  ...stockFilling
}

const getters = {
  getSells: state => state.sells ? state.sells : null,
  getStock: state => state.stock ? state.stock : null,
  getTodaySells: state => {
    if (state.sells) {
      let today = new Date()
      const sellsToday = []
      state.sells.forEach(el => {
        const insideDate = new Date(el.day)
        if (insideDate.getDay() === today.getDay() && insideDate.getMonth() === today.getMonth() && insideDate.getFullYear() === today.getFullYear()) {
          sellsToday.push(el)
        }
      })
      return sellsToday
    }
    return null
  }
}

const actions = {
  pushSale: ({ commit, state }, payload) => {
    payload.items.forEach(el => {
      state.stock[el.name].quantity -= Number(el.quantity) // eslint-disable-line
    })
    commit('PUSH_SALE', payload)
  },
  editDrug: ({ commit, state }, payload) => {
    delete state.stock[payload.oldName]
    commit('EDIT_DRUG', payload)
  },
  addDrug: ( { commit }, payload) => {
    commit('ADD_DRUG', payload)
  },
  populate_store: ({ commit }, payload) => {
    console.log(payload)
    commit('INSERT_DATA', payload)
  }
}

const mutations = {
  PUSH_SALE: (state, payload) => {
    state.sells.push(payload)
  },
  INSERT_DATA: (state, payload) => {
    state.sells = payload.sells
    state.stock = payload.drugs
  },
  ADD_DRUG: (state, payload) => {
    state.stock[payload.name] = {
      price: payload.price,
      quantity: payload.quantity
    }
  },
  EDIT_DRUG: (state, payload) => {
    state.stock[payload.name] = {
      price: payload.price,
      quantity: payload.quantity
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}