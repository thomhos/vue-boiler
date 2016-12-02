import Vue from 'vue';
import {
  SET_AUTHENTICATION,
  REMOVE_AUTHENTICATION,
  UPDATE_AUTHENTICATION
} from '../../types';

export default {
    [SET_AUTHENTICATION](state, token) {
        state.authenticated = true
        localStorage.setItem('user_token', token)
        console.log('setting auth status in mutation')
        Vue.http.headers.common.Authorization = `Bearer ${token}`;
    },

    [REMOVE_AUTHENTICATION](state) {
        state.authenticated = false
        localStorage.removeItem('user_token')
        console.log('removing auth status in mutation')
        Vue.http.headers.common.Authorization = ''
    },

    [UPDATE_AUTHENTICATION](state) {
        state.authenticated = !!localStorage.getItem('user_token')

        if (state.authenticated) {
            Vue.http.headers.common.Authorization = `Bearer ${localStorage.getItem('user_token')}`
        }
    }
}
