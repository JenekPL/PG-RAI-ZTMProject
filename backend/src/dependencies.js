import { GetFavouriteStops, GetToken } from './usecases'
import { Security } from './security'
import { MongoRepository } from './repositories'

export const mongoReposiotory = new MongoRepository()
export const security = new Security()
export const getFavouriteStops = new GetFavouriteStops(mongoReposiotory, security)
export const getToken = new GetToken(MongoRepository, security)