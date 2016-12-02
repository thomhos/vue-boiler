import {
    SET_USER
} from '../../types'

export default {
    [SET_USER](state, user) {
        state.user = user
    }
}
