import { Notify } from 'quasar'

import axios from 'axios'
export default {
  state: {
    user: null,
  },

  mutations: {
    setUserData(state, userData) {
      state.user = userData.user;
      localStorage.setItem('user', JSON.stringify(userData));
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
    },

    clearUserData(state) {
      state.user = null;
      localStorage.removeItem('user');
      location.reload()
    },
  },

  actions: {
    login({commit}, credentials) {
      return axios
        .post('http://localhost:8098/api/auth/login', credentials)
        .then((data) => {
          commit('setUserData', data.data)
        })
        .catch(error => {
          Notify.create({
            icon: 'warning',
            color: 'negative',
            message: error.response?.data.message || error.message,
          })
        });
    },
    logout({commit}) {
      axios
        .post(`http://localhost:8098/api/auth/logout`)
        .catch(error => {
          commit('addError', error.response.data.message || error.message)
        });
      commit('clearUserData')
    }
  },

  getters: {
    isLogged: state => !!state.user,
    authUser: state => state.user,
    can: state => (...perms) => state.user && state.user.permissions.filter(x => perms.includes(x)).length,
  }
}
