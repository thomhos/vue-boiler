import Vue          from 'vue'
import Router       from 'vue-router'
import store        from '../store'
import routes       from './routes'
import { sync }     from 'vuex-router-sync'

/*
 *  Tell Vue that it should use Router
 */
Vue.use(Router)

/*
 *  Get the initial state before we hook up the routes
 *  Necessary to get the auth state in the store
 */
store.dispatch('checkAuth')

/*
 *  Create the router instance
 */
const router = new Router({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes
})

/*
 *  Sync the store and router,
 *  this adds the router module in the store.
 */
sync(store, router)

export default router
