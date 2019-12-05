const errors = require('./errors')

module.exports.InMemRepository = class InMemRepository {

    constructor(users = {}) {
        this.users = users
    }

    getUser(username) {
        if (!this._isUserExists(username)) {
            throw new Error(errors.errUserNotExists)
        }
        return this.users[username]
    }
    getFavouriteStops(username) {
        if (!this._isUserExists(username)) {
            throw new Error(errors.errUserNotExists)
        }
        return this.users[username].favouriteStops
    }

    _isUserExists(username) {
        return username in this.users
    }
}

module.exports.MongoRepository = class MongoRepository {
    getUser(username) {}
    getFavouriteStops(username) {}
}