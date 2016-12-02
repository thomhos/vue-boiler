import Vue from 'vue'
import * as mutations from '../../types'

// Auth
export const setLoading = ({ commit }, loading) => {
    commit(mutations.SET_LOADING, loading)
}

export const setError = ({ commit }, error) => {
    commit(mutations.SET_ERROR, error)
}

export const removeError = ({ commit }, index) => {
    commit(mutations.REMOVE_ERROR, index)
}

export const clearErrors = ({ commit }) => {
    commit(mutations.CLEAR_ERRORS)
}
