/*
 *  Import the interceptors
 */
import authInterceptor from './auth'
import mockInterceptor from './mock-api'

export default [
    mockInterceptor,
    authInterceptor
]
