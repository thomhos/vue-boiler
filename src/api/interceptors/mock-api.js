import config from '../config'

function getMockData(resource) {
    return require(`../mock-data/${resource}`)
}

export default (request, next) => {

    if(config.mock) {
        console.log('[mocking request] => ', request.url)

        const mockBody      = getMockData(request.url)
        const mockHeaders   = { status: 200 }

        setTimeout(() => {
            next(request.respondWith(mockBody, mockHeaders))
        }, 2000)
    } else {
        next()
    }

}
