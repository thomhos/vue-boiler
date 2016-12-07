import Vue          from 'vue'
import api          from './api'
import store        from './store'
import router       from './router'

import Root         from './components/root.vue'

/*
 *  create the app instance.
 *  here we inject the router and store to all child components,
 *  making them available everywhere as `this.$router` and `this.$store`.
 */
const app = new Vue(Vue.util.extend({ router, store }, Root))

/*
 *  Mount the app in the dom.
 *  This will replace the selected node with the root component
 */
app.$mount('#app')

/*
 *  Mount the service worker we have in a prod build (webpack sw precache plugin)
 */
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
}
