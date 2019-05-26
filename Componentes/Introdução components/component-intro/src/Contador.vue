<template>
  <div class="contador">
    <div>
      <h1>Contador: {{ contador }}</h1>
      <button @click="adicionar">+</button>
      <button @click="subtrair">-</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0
    };
  },
  methods: {
    adicionar() {
      return this.contador++;
    },
    subtrair() {
      return this.contador > 0 ? this.contador-- : "";
    }
  }
};
</script>

<style scoped>
.contador {
  display: flex;
}
.contador button {
  padding: 5px;
  margin: 5px;
  background-color: #000;
  color: #fff;
  border: 1px #fff dashed;
}
</style>
