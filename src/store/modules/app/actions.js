import * as mutations from '../../types'

/*
 *  Action to set the application to a loading state
 */
export const setLoading = ({ commit }, loading) => {
    commit(mutations.SET_LOADING, loading)
}

/*
 *  Action to log an error in the application.
 *  Here you could also connect some external error logger.
 */
export const setError = ({ commit }, error) => {
    commit(mutations.SET_ERROR, error)
}

/*
 *  Action to remove an individual error,
 *  Imagine you show all errors in an overview somewhere,
 *  The user could remove individual errors
 */
export const removeError = ({ commit }, index) => {
    commit(mutations.REMOVE_ERROR, index)
}

/*
 *  Action to clear all errors in the app.
 */
export const clearErrors = ({ commit }) => {
    commit(mutations.CLEAR_ERRORS)
}
