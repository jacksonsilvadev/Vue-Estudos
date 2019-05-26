<template>
  <div id="app">
    <contador></contador>
  </div>
</template>

<script>
import Contador from "./Contador";

export default {
  data() {
    return {
      contador: 0
    };
  },
  components: {
    Contador
  }
};
</script>

<style>
</style>
