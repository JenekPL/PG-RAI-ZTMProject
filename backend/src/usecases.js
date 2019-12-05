const errors = require('./errors')

class GetFavouriteStops {
    constructor(repository, security) {
        this.repository = repository
        this.security = security
    }

    call(token) {
        var username = this.security.verifyToken(token)
        return this.repository.getFavouriteStops(username)
    }
}

class Authorize {
    constructor(repository, security) {
        this.repository = repository
        this.security = security
    }

    call(username, password) {
        var user = this.repository.getUser(username)
        if (user.password != password) {
            throw new Error(errors.invalidCredentials)
        }

        return this.security.getToken(user.username, password.password)

    }
}

module.exports = { GetFavouriteStops, Authorize }