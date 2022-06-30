import axios from 'axios'
import store from '../store'
export default ({ /* app, router, Vue, ... */ }) => {
  const userInfo = localStorage.getItem('user');
  if (userInfo) {
    store().commit('setUserData', JSON.parse(userInfo));
  }
  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        this.$store.dispatch('logout')
      }
      return Promise.reject(error)
    }
  )
}
