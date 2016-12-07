import config from '../config'

function getMockData(request) {
    return require(`../mock-data/${request.url}-${request.method}`)
}

export default (request, next) => {

    if(config.mock) {
        console.log(`[mocking request] => ${request.method} ${request.url}`)

        const mockBody      = getMockData(request)
        const mockHeaders   = { status: 200 }

        setTimeout(() => {
            next(request.respondWith(mockBody, mockHeaders))
        }, 2000)
    } else {
        next()
    }

}
