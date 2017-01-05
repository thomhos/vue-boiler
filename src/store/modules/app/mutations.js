import Vue          from 'vue'
import * as types   from '../../types'

/*
 *  Mutations that directly affect the app state.
 */
export default {
    // Set the app to loading
    [types.SET_LOADING](state, loading) {
        state.loading = loading
    },


    [types.SET_AUTHENTICATION](state, token) {
        state.token         = token
        state.authenticated = true
    },

    [types.REMOVE_AUTHENTICATION](state) {
        state.token         = null
        state.authenticated = false
    }
}
