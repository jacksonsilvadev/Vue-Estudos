<template>
	<div id="app">
		<h1>Tarefas</h1>
		<progress-bar :percentage="percentage"></progress-bar>
		<add-list @addTaskToFather="addToList"></add-list>
		<list-tasks @changeToCompleted="changeTask" :lists="lists"></list-tasks>
	</div>
</template>

<script>
import ProgressBar from './components/ProgressBar'
import AddList from './components/AddList'
import ListTasks from './components/ListTasks'
export default {
	data() {
		return {
			percentage: 20,
			lists: [
				{name: 'Lavar louça', completed: false},
				{name: 'Lavar louça', completed: false}
				]
		}
	},
	components: {
		ProgressBar, AddList,ListTasks
	},
	methods: {
		addToList(task) {
			this.lists.push(task)
		},
		changeTask(index) {

			this.lists[index].completed = !this.lists[index].completed
		}
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.newtask, .bar {
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
		border: 1px solid #AAA;
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
