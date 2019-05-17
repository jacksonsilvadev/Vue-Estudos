<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Nome: {{ user.nome }}</p>
    <p>Age: {{user.age}}</p>
    <p>Birthday: {{user.birthday}}</p>
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
