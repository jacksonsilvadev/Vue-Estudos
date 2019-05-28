<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr>
    <p>
      <strong>Código:</strong>
      {{id}}
    </p>

    <router-link :to="`usuario/${id}/edit`" tag="button" primario>Editar</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"]
  //   data() {
  //     return {
  //       id: this.$route.params.id
  //     };
  //   },
  //   watch: {
  //     $route(to, form) {
  //       this.id = to.params.id;
  //     }
  //   },
};
</script>

<style>
</style>
