<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr>
    <p>
      <strong>Código:</strong>
      {{id}}
    </p>
    <!-- :to="`usuario/${id}/edit`" -->
    <router-link
      :to="{name: 'editarUsuario', params: {id: id}, query: {
        complete: true, lingua: 'pt'
    }, hash:'#rodape'}"
      tag="button"
      primario
    >Editar</router-link>
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
