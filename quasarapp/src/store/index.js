import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);

export default function (/* { store, ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      show_sidebar: true,
      is_active_header_breadcrumbs: false,
    },
    mutations: {
      sidebarShowToggle(state) {
        state.show_sidebar = ! state.show_sidebar;
      },
      IsActiveHeaderBreadcrumbsToggle(state) {
        state.is_active_header_breadcrumbs = !state.is_active_header_breadcrumbs
      }
    },
    actions: {
      sidebarShowToggle({commit}) {
        window.dispatchEvent(new Event('resize'));
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
    plugins: [createPersistedState]
  });
  return Store
}
