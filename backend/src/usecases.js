import { errInvalidCredentials } from './errors'

export class GetFavouriteStops {
    constructor(repository, security) {
        this.repository = repository
        this.security = security
    }

    call(token) {
        return new Promise(async (resolve, reject) => {
            try {
                const username = this.security.verifyToken(token)
                const user = await this.repository.getUser(username)
                resolve(user.favouriteStops)
            } catch(e) {
                reject(e)
            }
        })
    }
}

export class GetToken {
    constructor(repository, security) {
        this.repository = repository
        this.security = security
    }

    call(username, password) {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await this.repository.getUser(username)

                if (user.password != password) {
                    reject(new Error(errInvalidCredentials))
                }
                const token = this.security.getToken(user.username, user.password)
                resolve(token)
            } catch (e) {
                reject(e)
            }
        })
    }
}