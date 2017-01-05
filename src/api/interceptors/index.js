/*
 *  Import the interceptors
 */
import authInterceptor from './auth'
import mockInterceptor from './mock'

export default [
    mockInterceptor,
    authInterceptor
]
