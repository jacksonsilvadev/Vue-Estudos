<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
	
		<b-card>
			<b-form-group label="Nome: ">
				<b-form-input type="text" size="lg"
				v-model="usuario.nome"
				placeholder="Insira seu nome"></b-form-input>
			</b-form-group>

			<b-form-group label="E-mail: ">
				<b-form-input type="email" size="lg"
				v-model="usuario.email"
				placeholder="Insira seu e-mail"></b-form-input>
			</b-form-group>
			<hr>
			<b-button size="lg" variant="success" @click="salvar"> Salvar </b-button>
		</b-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	// created() {
	// 	this.$http.post('usuario.json', {
	// 		nome: 'Maria',
	// 		email: 'maria_maria@gmail.com'
	// 	}).then(res => {
	// 		console.log(res)
	// 	})
	// },
	methods: {
		salvar() {
			this.$http.post('usuario.json', this.usuario)
			.then(res => {
				this.usuario.nome = ''
				this.usuario.email = ''
			})
			.catch(err => console.log(err.message))
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
