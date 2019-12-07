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
        selectedStop: 8227,
        delays: []
    },

    getters: {
        isLogged(state) {
            return state.token !== null
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
        setSelectedStop(state, stop) {
            state.selectedStop = stop
        },
        setDelays(state, delays) {
            state.delays = delays
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
        fetchDelays({commit}, stopId) {
            ZTMService.getDelays(stopId).then(delays => {
                commit('setDelays', delays)
            })
        },
        setSelectedStop({commit, dispatch}, stop) {
            commit('setSelectedStop', stop)
            dispatch('fetchDelays', stop.stopId)
        },
    }
})

export default store