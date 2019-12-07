import { MongoClient } from 'mongodb'

import { errUserNotExists, errConnectingToDatabase, errFetchingData } from './errors'
import { rejects } from 'assert'

export class InMemRepository {
    
    constructor(users = []) {
        this.users = users
    }
    
    async getUser(username) {
        if (username in this.users) {
            return this.users[username]
        } 
        throw new Error(errUserNotExists)
    }
}

const dbName = "users"
const collectionName = "users"
const defaultURL  = "mongodb://localhost:27017"

export class MongoRepository {

    constructor(url = defaultURL) {
        this.client = MongoClient(url, { useUnifiedTopology: true })
    }

    async getUser(username) {
        const connectedClient = await this.client.connect()
        if (connectedClient == null) {
            throw new Error(`${errConnectingToDatabase}: ${error.message}`)
        }
        const user = await this.client.db(dbName).collection(collectionName).findOne({username})
        if (user == null) {
            throw new Error(errUserNotExists)
        }
        return user
    }
}