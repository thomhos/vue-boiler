import { AppIndex, AppTimeline, AppTimelineDetail, LoginIndex } from '../pages'
import { auth } from './guards'

export default [
    {
        path: '/login',
        component: LoginIndex
    },
    {
        path: '/',
        component: AppIndex,
        beforeEnter: auth,
        children: [
            {
                path: '/',
                component: AppTimeline
            },
            {
                path: 'detail',
                component: AppTimelineDetail
            }
        ]
    }
]
