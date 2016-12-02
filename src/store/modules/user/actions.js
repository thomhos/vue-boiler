import * as mutations from '../../types'

// User
export const getUser = ({ commit }, user) => {
    commit(mutations.SET_USER, user)
}
