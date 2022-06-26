import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);

export default function (/* { store, ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      show_sidebar: true,
    },
    getters: {
      show_sidebar: state => state.show_sidebar,
    },
    mutations: {
      sidebarShowToggle(state) {
        state.show_sidebar = ! state.show_sidebar;
      },
    },
    actions: {
      sidebarShowToggle({commit}) {
        commit('sidebarShowToggle')
      },
    },
  });
  return Store
}
