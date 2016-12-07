import layouts  from '../layouts'
import pages    from '../pages'
import { auth } from './guards'

/*
 *  Definition of all routes and components.
 */
export default [
    {
        path: '/login',
        component: layouts.login,
        children: [
            {
                path: '',
                component: pages.loginIndex
            }
        ]
    },
    {
        path: '/',
        component: layouts.loggedin,
        beforeEnter: auth,
        children: [
            {
                path: '',
                component: pages.dashboardIndex
            },
            {
                path: 'detail',
                component: pages.dashboardDetail
            }
        ]
    }
]
