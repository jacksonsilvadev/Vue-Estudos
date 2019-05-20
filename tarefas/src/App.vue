<template>
  <div id="app">
    <h1>Tarefas</h1>
    <progress-bar :percentage="percentage"></progress-bar>
    <add-list @addTaskToFather="addToList"></add-list>
    <list-tasks @callRemove="removeTask" @changeToCompleted="changeTask" :lists="lists"></list-tasks>
  </div>
</template>

<script>
import ProgressBar from "./components/ProgressBar";
import AddList from "./components/AddList";
import ListTasks from "./components/ListTasks";
export default {
  data() {
    return {
      lists: []
    };
  },
  components: {
    ProgressBar,
    AddList,
    ListTasks
  },
  watch: {
    lists: function(novo, antigo) {
      return localStorage.setItem("lists", JSON.stringify(this.lists));
    }
  },
  computed: {
    percentage() {
      const total = this.lists.length;
      const done = this.lists.filter(t => t.completed).length;

      return Math.round((done / total) * 100 || 0);
    }
  },
  methods: {
    addToList(task) {
      var validation = this.lists.filter(item => {
        return item.name == task.name;
      });

      if (validation == "") return this.lists.push(task);
    },
    changeTask(index) {
      return (this.lists[index].completed = !this.lists[index].completed);
    },
    removeTask(i) {
      return this.lists.splice(i, 1);
    }
  },
  created() {
    var lista = JSON.parse(localStorage.getItem("lists"));
    this.lists = lista;
  }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.newtask,
.bar {
  margin-top: 20px;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}

.bar {
  width: 80%;
  height: 20px;
  border: 1px solid #aaa;
  border-radius: 10px;
}
.bar .percentage {
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: green;
  border-radius: 10px;
}
</style>
