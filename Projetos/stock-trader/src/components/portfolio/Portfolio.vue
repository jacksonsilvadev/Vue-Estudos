<template>
  <v-layout row wrap>
    <Stock v-for="stock in stockPortfolio" :key="stock.id" :stock="stock"></Stock>
  </v-layout>
</template>

<script>
import Stock from "./Stock";
export default {
  components: { Stock },
  computed: {
    stockPortfolio() {
      return this.$store.getters["stockPortfolio"];
    }
  }
};
</script>

<style>
</style>
