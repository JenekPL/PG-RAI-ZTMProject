<template>
<div class="details d-flex">
    <b-table class="mx-auto align-self-center table" dark :items="delays" :fields="fields">
        <template v-slot:cell(estimatedTime)="data">
            <b class="text-info">{{ timeFromNow(data.value) }}</b>
        </template>
    </b-table>
</div>
</template>

<script>
import store from "../store"

export default {
    name: "Details",
    data() {
      return {
        fields: [
          {
            key: 'headsign',
            label: 'direction',
            sortable: true
          },
          {
            key: 'routeId',
            label: 'Vehicle number',
            sortable: true
          },
          {
            key: 'estimatedTime',
            label: "To arrive",
            sortable: false,
          }
        ],
      }
    },
    computed: {
        delays() { return store.state.delays },
    },
    methods: {
        timeFromNow(estimatedTime) {
            var date = new Date()
            var time = estimatedTime.split(":")

            date.setHours(time[0]);
            date.setMinutes(time[1]);
            date.setSeconds(0)

            var delta = date - new Date()
            if (delta < 0) {
                return "Too late :("
            }
            return (new Date(delta)).toISOString().slice(11,19);
        }
    }
}
</script>

<style scoped>
.details {
    height: 50vh;
    padding: 5rem;
}

.table {
    max-width: 30rem;
}
</style>