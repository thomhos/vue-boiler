import store from '../../store'

/*
 *  Check the state for the authentication status.
 *  Redirect to login if doesn't exist.
 */
export default (to, from, next) => {
    if(!store.state.authentication.authenticated) {
        next('/login')
    }
    next()
}