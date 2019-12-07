<template>
  <div>
    <div class="logoutBtn">
      <b-button variant="dark" v-on:click="logout">Wyloguj</b-button>
    </div>
    <StopDetails />
    <StopsList />
  </div>
</template>

<script>

//import store from "../store"
import StopsList from "../components/StopsList"
import StopDetails from "../components/StopDetails"
import store from "../store"

export default {
  name: "App",
  mounted() {},
  data: () => ({ }),
  methods: { 
    logout() {
      store.dispatch('logout')
    }
  },
  components: {
      StopsList,
      StopDetails
  }
}
</script>

<style scoped>
.logoutBtn {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>
