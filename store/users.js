
import Vue from 'vue'

export const state = () => ({
    users: [],
    isAuth: false
})
  
export const mutations = {
    setUsers(state, users) {
        state.users = users
    },
    setAuth(state, auth) {
        state.isAuth = auth
    },
}

export const actions = {
    async fetch({commit}) {
        const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
        // console.log('users', users);
        commit('setUsers', users)
    },
    async create({commit}, obj) {
        const password = generatePassword(8)
        try {
            const auth = await this.$axios.$get('auth/send-temp-pass', {
                params: {
                    email: obj.email,
                    password: 'password'
                }
            })
            const res = await this.$axios.$post('auth/login', {
                username: obj.email,
                password: 'password'
            })

            commit('setAuth', res)
        } catch (e) {
            console.log(e);
            commit('setAuth', false)
            return false
        }
    },
    // Auth
    async logout({commit}) {
        try {
            await this.$axios.$get('auth/logout')
            commit('setAuth', false)
        } catch (e) {
            console.log(e);
            return false
        }
    },
    async checkAuth({commit}) {
        try {
            const res = await this.$axios.$get('auth/check')
            commit('setAuth', res)
        } catch (e) {
            console.log(e);
            return false
        }
    },
}

export const getters = {
    users: s => s.users,
    isAuth: s => s.isAuth
}

function generatePassword(length) {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let retVal = ""
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}