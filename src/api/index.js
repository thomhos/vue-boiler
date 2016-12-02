import config       from './config'
import Vue          from 'vue'
import VueResource  from 'vue-resource'
import interceptors from './interceptors'

/*
 *  Tell Vue to use VueResource
 */
Vue.use(VueResource)

/*
 *  Configure VueResource
 */
Vue.http.options.root           = config.root
Vue.http.headers.common.Accept  = 'application/json'

/*
 *  Register the interceptors
 */
Vue.http.interceptors.push(...interceptors)
