<template>
    <div class="newtask">
        <input type="text" placeholder="Nova tarefa?" @keyup.enter="addTask" v-model="task.name" class="form-element">
        <button @click="addTask" class="form-element">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            task: {
                name: '',
                completed: false
            }
           
        }
    },
    methods: {
        addTask() {
            this.$emit('addTaskToFather',this.task)
            this.task ={
                name: '',
                completed: false
            }
        }
    }
}
</script>

<style scoped>
input.form-element {
    width: 500px;
    background: #FFF2;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}
button.form-element {
    border-left: none;
    background-color: #2196F3;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}

.form-element {
    outline: none;
    font-size: 2rem;
    border: 1px solid #FFF;
    padding: 5px 10px 8px;
    color: #FFF;
}
</style>
