import Vue from 'vue';
import {
  SET_LOADING,
  SET_ERROR,
  REMOVE_ERROR,
  CLEAR_ERRORS
} from '../../types';

/*
 *  Mutations that directly affect the app state.
 */
export default {
    // Set the app to loading
    [SET_LOADING](state, loading) {
        state.loading = loading
    },

    // Add an error
    [SET_ERROR](state, error) {
        state.errors.push(error)
    },

    // Remove an error
    [REMOVE_ERROR](state, index) {
        state.errors.splice(index, 1)
    },

    // Remove all errors
    [CLEAR_ERRORS](state) {
        state.errors = []
    }
}
