<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr>
    <b-button class="my-3" @click="exibir = !exibir" variant="primary">Mostrar mensagem</b-button>
    <transition>
      <b-alert variant="info" v-if="exibir" show>{{ msg }}</b-alert>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Uma mensagem de informação para o usuário",
      exibir: false
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}
</style>
