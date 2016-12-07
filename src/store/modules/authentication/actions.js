import Vue              from 'vue'
import * as mutations   from '../../types'

/*
 *  Action to set the authentication state in the application
 */
export const setAuth = ({ commit }, token) => {
    // Set the token in local storage
    localStorage.setItem('user_token', token)

    // Update the header in the http module
    Vue.http.headers.common.Authorization = `Bearer ${token}`

    // Commit the mutation to the state
    commit(mutations.SET_AUTHENTICATION, token)
}

/*
 *  Action to remove the authentication state in the application
 */
export const removeAuth = ({ commit }) => {
    // Remove the token in local storage
    localStorage.removeItem('user_token')

    // Remove the header in the http module
    Vue.http.headers.common.Authorization = ''

    // Remove the auth state
    commit(mutations.REMOVE_AUTHENTICATION)
}

/*
 *  Action to check if there is a usertoken in the localStorage,
 *  and update the app accordingly.
 */
export const checkAuth = ({ dispatch }) => {
    // Check if there is a token in the local storage
    const token = localStorage.getItem('user_token') || null

    // If there is a token set it in the state and http module
    if(token) {
        Vue.http.headers.common.Authorization = `Bearer ${token}`
        dispatch('setAuth', token)
    }
}
