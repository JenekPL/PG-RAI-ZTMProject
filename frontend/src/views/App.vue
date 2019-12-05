<template>
  <b-container class="my-5">
    <b-row>
      <b-col cols="6">
        <StopsList :stops="stops" :activeStopID="activeStopID" :onItemClick="onItemClick"/>
      </b-col>
      <b-col cols="6">XD</b-col>
    </b-row>
  </b-container>
</template>

<script>

//import store from "../store"
import StopsList from "../components/StopsList"

export default {
  name: "App",
  mounted() {},
  data: () => ({
    activeStopID: 0,
    stops: [
      {
        id: 0,
        name: "Miszewskiego",
        isFavourite: true
      },
      {
        id: 1,
        name: "Brama wyżynna",
        isFavourite: false
      },
      {
        id: 2,
        name: "Firoga",
        isFavourite: true
      }
    ]
  }),
  methods: {
      onItemClick(stopID) {
            this.activeStopID = stopID
        }

  },
  components: {
      StopsList
  }
};
</script>

<style scoped></style>
