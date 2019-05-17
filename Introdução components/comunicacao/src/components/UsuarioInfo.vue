<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p v-for="(value,key,index) in user">Nome: {{value}}</p>
  </div>
</template>

<script>
export default {
  props: ["user"]
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
