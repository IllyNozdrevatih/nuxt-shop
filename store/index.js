export const getters = {
  isAuthenticated(state) {
    return state.isAuth
  },

  loggedInUser(state) {
    return state.auth.user
  }    
}

export const actions = {
  setAuth({commit}, val){
    commit('setAuth', val)
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