import * as mutations from '../../types'

/*
 *  Action to set the application to a loading state
 */
export const setLoading = ({ commit }, loading) => {
    commit(mutations.SET_LOADING, loading)
}

/*
 *  Check if a user token exists in local storage
 */
export const checkAuth = ({ commit }) => {
    const token = localStorage.getItem('user_token')

    if (!!token) {
        //Vue.http.headers.common.Authorization = `Bearer ${token}`
        commit(mutations.SET_AUTHENTICATION, token)
    }
}

/*
 *  Set the user authentication and token
 */
export const setAuth = ({ commit }, token) => {
    commit(mutations.SET_AUTHENTICATION, token)

    localStorage.setItem('user_token', token)

    //Vue.http.headers.common.Authorization = `Bearer ${token}`
}

/*
 *  Remove all traces of the user
 */
export const removeAuth = ({ commit }) => {
    commit(mutations.REMOVE_AUTHENTICATION)

    localStorage.removeItem('user_token')

    //Vue.http.headers.common.Authorization = ''
}

/*
 *  Log the user in
 */
export const login = ({ dispatch }, credentials) => {
    return new Promise((resolve, reject) => {
        dispatch('setLoading', true)

        authentication.save(credentials).then(({ body: token }) => {
            dispatch('setAuth', token)
            dispatch('setLoading', false)
            resolve()
        }).catch((err) => {
            dispatch('setLoading', false)
            reject()
        })
    })
}

/*
 *  Logout
 */
export const logout = ({ dispatch }) => {
    dispatch('removeAuth')
}
