import Vue      from 'vue'
import Vuex     from 'vuex'
import modules  from './modules'

/*
 *  Tell vue it should use Vuex as store.
 *  https://vuex.vuejs.org/en/
 */
Vue.use(Vuex)

/*
 *  Set up the store with separate modules.
 */
const store = new Vuex.Store({
    modules
})

export default store
