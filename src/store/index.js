import Vue from "vue";
import Vuex from "vuex";
// we first import the module
import auth from "./auth";
import createPersistedState from "vuex-persistedstate";
// Use a new variable and export values to change default behaviour.
let store = null;
Vue.use(Vuex);

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
      // then we reference it
      auth
    },

    strict: process.env.DEV
  });

  /*
    if we want some HMR magic for it, we handle
    the hot update like below. Notice we guard this
    code with "process.env.DEV" -- so this doesn't
    get into our production build (and it shouldn't).
  */

  if (process.env.DEV && module.hot) {
    module.hot.accept(["./auth"], () => {
      const newAuth = require("./auth").default;
      Store.hotUpdate({ modules: { auth: newAuth } });
    });
  }
  // add this so that we export store
  store = Store;

  return Store;
}

export { store };
