import * as mutations   from '../../types'
import { example }      from '../../../api/resources'

/*
 *  Action to get exampledata
 */
export const getExampleData = ({ commit, dispatch }) => {

    dispatch('setLoading', true)

    example.get().then(({ body }) => {
        // Commit the mutation to the state
        commit(mutations.SET_EXAMPLE_DATA, body)
        dispatch('setLoading', false)
    }, (err) => {
        // Log the error in the app
        dispatch('setError', err)
        dispatch('setLoading', false)
    })

}
