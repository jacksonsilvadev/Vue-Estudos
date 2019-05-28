<template>
  <div class="usuario">
    <h2>Usuario</h2>

    <hr>

    <button @click="irParaInicio" sucesso>Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    irParaInicio() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>
