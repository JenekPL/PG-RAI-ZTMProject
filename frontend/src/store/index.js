import Vue from "vue"
import Vuex from "vuex"
import AuthService from '&services/auth.service'
import ZTMService from '&services/ztm.service';
import FavouriteService from '&services/favourite.service';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: null,
        stops: [],
        favouriteStops: [],
    },

    getters: {
        isLogged(state) {
            return state.token !== null
        },
        stops(state) {
            return state.stops
        },
        favouriteStops(state) {
            return state.favouriteStops
        },
    },

    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setStops(state, stops) {
            state.stops = stops
        },
        setFavouriteStops(state, stops) {
            state.favouriteStops = stops
        },
    },

    actions: {
        login({commit}, {login, password}) {
            AuthService.getToken(login, password).then(token => {
                commit("setToken", token)
            })
        },
        logout({commit}) {
            commit("setToken", null)
        },
        fetchStops({commit}) {
            ZTMService.getStops().then(stops => {
                commit("setStops", stops)
            })
        },
        fetchFavourites({commit}) {
            FavouriteService.getStops().then(stops => {
                commit('setFavouriteStops', stops)
            })
        },
    }
})

export default store