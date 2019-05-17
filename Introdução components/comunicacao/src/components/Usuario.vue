<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <hr>
    <div class="componentes">
      <app-usuario-info :user="profile"/>
      <app-usuario-editar :user="profile"/>
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

export default {
  data() {
    return {
      profile: {
        nome: "Jackson Silva Rodrigues",
        age: 19,
        birthday: "1999-08-13"
      }
    };
  },
  components: { AppUsuarioInfo, AppUsuarioEditar }
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
