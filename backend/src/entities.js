export class User {
    constructor(username, password, favouriteStops = []){
        this.username = username
        this.password = password
        this.favouriteStops = favouriteStops
    }
}