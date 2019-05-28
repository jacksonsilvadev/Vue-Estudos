<template>
  <nav class="menu">
    <ul>
      <router-link to="/" tag="li" exact-active-class="active">
        <a>Home</a>
      </router-link>

      <router-link to="/usuario/10" tag="li" exact-active-class="active">
        <a>Usuario 1</a>
      </router-link>

      <router-link to="/usuario/20" tag="li" exact-active-class="active">
        <a>Usuario 2</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>

