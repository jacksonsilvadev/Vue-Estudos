<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>
      Nome:
      <input type="text" v-model="user.nome">
    </p>
    <p>
      Age:
      <input type="number" v-model.number="user.age">
    </p>
    <p>
      Nome:
      <input type="date" v-model="user.birthday">
    </p>
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
  background-color: #98b99a;
  color: #fff;
}
</style>
