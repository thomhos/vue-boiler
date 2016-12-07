import { SET_EXAMPLE_DATA } from '../../types'

/*
 *  All actions related to the authentication state module
 */
export default {

    // Update the authentication state
    [SET_EXAMPLE_DATA](state, data) {
        state.exampleData = data
    }

}
