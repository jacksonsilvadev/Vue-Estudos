<template>
  <div class="usuario">
    <h2>Usuario</h2>

    <hr>
    <p>
      <strong>Código:</strong>
      {{id}}
    </p>
    <button @click="irParaInicio" sucesso>Voltar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  watch: {
    $route(to, form) {
      this.id = to.params.id;
    }
  },
  methods: {
    irParaInicio() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>
