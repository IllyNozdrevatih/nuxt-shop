export const getters = {
  isAuthenticated(state) {
    return state.isAuth
  },

  loggedInUser(state) {
    return state.auth.user
  }    
}


export const state = () => ({
  isAuth: false
})

export const mutations = {
  setAuth(state, value) {
      state.isAuth = value
  },
}