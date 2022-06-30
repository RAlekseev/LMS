import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate"
import auth from '../modules/auth/store';

Vue.use(Vuex);

export default function (/* { store, ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      show_sidebar: false,
      is_active_header_breadcrumbs: false,
    },
    mutations: {
      sidebarShowToggle(state) {
        state.show_sidebar = !state.show_sidebar;
      },
      IsActiveHeaderBreadcrumbsToggle(state) {
        state.is_active_header_breadcrumbs = !state.is_active_header_breadcrumbs
      }
    },
    actions: {
      sidebarShowToggle({commit}) {
        commit('sidebarShowToggle')
      },
      IsActiveHeaderBreadcrumbsToggle({commit}) {
        commit('IsActiveHeaderBreadcrumbsToggle')
      }
    },
    getters: {
      show_sidebar: state => state.show_sidebar,
      is_active_header_breadcrumbs: state => state.is_active_header_breadcrumbs,
    },
    modules: {
      auth,
    },
    plugins: [createPersistedState]
  });
  return Store
}
