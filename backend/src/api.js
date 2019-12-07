import { getToken, getFavouriteStops } from './dependencies'

export function GetTokenHandler(req, res) {
    const { username, password } = req.body
    getToken.call(username, password).then(
        token => { res.send(token) },
        error => {
            res.status(500)
            res.send(error.message) 
        }
    )
}
export function GetFavouriteStopsHandler(req, res) {
    getFavouriteStops.call(req.token).then(
        stops => { res.send(stops) },
        error => { 
            res.status(500)
            res.send(error) 
        }
    )
}