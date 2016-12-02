import Vue from 'vue'
import * as mutations from '../../types'

// Auth
export const setAuth = ({ commit }, token) => {
    commit(mutations.SET_AUTHENTICATION, token)
}

export const removeAuth = ({ commit }) => {
    commit(mutations.REMOVE_AUTHENTICATION)
}

export const updateAuth = ({ commit }) => {
    commit(mutations.UPDATE_AUTHENTICATION)
}
