import Vue from 'vue';
import {
  SET_LOADING,
  SET_ERROR,
  REMOVE_ERROR,
  CLEAR_ERRORS
} from '../../types';

export default {
    [SET_LOADING](state, loading) {
        state.loading = loading
    },

    [SET_ERROR](state, error) {
        state.errors.push(error)
    },

    [REMOVE_ERROR](state, index) {
        state.errors.splice(index, 1)
    },

    [CLEAR_ERRORS](state) {
        state.errors = []
    }
}
