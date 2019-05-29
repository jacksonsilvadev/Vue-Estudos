<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat to="/">Início</v-btn>
      <v-btn flat to="/portfolio">Portfolio</v-btn>
      <v-btn flat to="/stocks">Stocks</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn @click="endDay" flat>Finalizar Dia</v-btn>
      <v-menu offset-y>
        <v-btn flat slot="activator">Salver & Carregar</v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>Salvar Dados</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Carregar Dados</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-layout align-center>
        <span class="text-uppercase grey--text text--darken-2">Saldo: {{ funds | currency }}</span>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters["funds"];
    }
  },
  methods: {
    endDay() {
      // console.log("hi");
      return this.$store.dispatch("randomizeStocks");
    }
  }
};
</script>

<style>
</style>
