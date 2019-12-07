<template>
    <vue-good-table 
        :columns="columns" 
        :rows="rows"
        :row-style-class="rowStyleClassFn"
        :search-options="{ enabled: true }"
        max-height="50vh"
        theme="nocturnal"
        @on-row-click="onRowClick" />
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

import store from "../store"

export default {
    name: "StopsList",
    created: () => {
        store.dispatch('fetchStops')
        store.dispatch('fetchFavourites')
    },
    data: () => ({
        columns: [
        {
            label: 'Name',
            field: 'stopName',
        },
        {
            label: 'City',
            field: 'zoneName',
        },
      ],
    }),
    computed: {
        rows() { return store.state.stops },
        favourites() { return store.state.favouriteStops },
        selectedStop() { return store.state.selectedStop }
    },
    methods: {
        onRowClick(params) {
            store.dispatch('setSelectedStop', params.row)
        },
        rowStyleClassFn(row) {
            return row.stopId === this.selectedStop.stopId ? 'selected' : null;
        },
    },
    components: {
        VueGoodTable
    },
}
</script>

<style>
.selected {
    background: cadetblue;
}
</style>