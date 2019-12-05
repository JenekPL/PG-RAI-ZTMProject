<template>
  <b-list-group>
    <b-list-group-item :key="stop.stopId" v-for="stop in stops" :active="activeStopID === stop.stopId" v-on:click="(_) => onItemClick(stop.stopId)"> 
        <StopItem :name="stop.stopName" :isInFavourites="favourites.includes(stop.stopId)" :zone="stop.zoneName"/>
    </b-list-group-item>
</b-list-group>
</template>

<script>

import StopItem from "./StopItem";
// eslint-disable-next-line no-unused-vars
import store from "../store"

export default {
    name: "StopsList",
    data: () => ({
        activeStopID: 8227,
    }),
    created: () => {
        store.dispatch('fetchStops')
        store.dispatch('fetchFavourites')

    },
    methods: {
        onItemClick(stopId) {
            this.activeStopID = stopId
        }
    },
    components: {
        StopItem
    },
    computed: {
        stops() {
            return store.getters.stops
        },
        favourites() {
            return store.getters.favouriteStops
        },
    }
}
</script>