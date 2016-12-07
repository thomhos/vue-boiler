import {
  SET_AUTHENTICATION,
  REMOVE_AUTHENTICATION
} from '../../types'

/*
 *  All actions related to the authentication state module
 */
export default {

    // Update the authentication state
    [SET_AUTHENTICATION](state) {
        state.authenticated = true
    },

    // Update the authentication state
    [REMOVE_AUTHENTICATION](state) {
        state.authenticated = false
    }
}
