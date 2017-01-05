export default (request, next) => {
    // Do nothing with request

    const responseHeader = { status: 200 }
    const responseBody = {}

    if(request.url === 'example') {
        responseBody.name       = 'example data',
        responseBody.examples   = [
                                    {
                                        "example": "bla"
                                    },
                                    {
                                        "example": "bla"
                                    },
                                    {
                                        "example": "bla"
                                    },
                                    {
                                        "example": "bla"
                                    }
                                ]
    }

    setTimeout(function() {
        next(
            request.respondWith(responseBody, responseHeader)
        )
    }, 1000)
}
