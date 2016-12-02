export default (request, next) => {
    // Do nothing with request

    next((response) => {
        if(response.status === 401) {
            console.log('request is not allowed, return to login..')
        }
    })
}
