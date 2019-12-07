import express, { json } from 'express'
import bearerToken from 'express-bearer-token'

import { GetTokenHandler, GetFavouriteStopsHandler } from "./src/api";

const app = express()

app.use(json())

app.use(bearerToken());

app.post('/token', GetTokenHandler)
app.get('/stops', GetFavouriteStopsHandler)

app.listen(3000)