Vue.component('toDoAdicionar', {
	data() {
		return {
			nome: ''
		}
	},
	methods: {
		add() {

			this.$emit('add', this.nome);
			this.nome = ''

		}
	},
	template: `
	<div>
		<input type="text" v-model="nome">
		<button @click="add"> Adicionar </button>
	</div>
	`
})

Vue.component('toDoList', {
	data() {
		return {

		}
	},
	props: ['lista'],
	template: `
	<div>
		<ul>
			<li v-for="item in lista">{{item}}</li>
		</ul>
	</div>
	`
})

let header = new Vue({
	el: '#header',
	data: {

	},
	methods: {
		addTodo(i) {
			sideBar.lista.push(i)
		}
	}
});

let sideBar = new Vue({
	el: '#sidebar',
	data: {
		lista: ['Jackson']
	}
});