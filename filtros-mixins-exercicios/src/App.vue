<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<!-- Passando pipe para chamar um filter -->
		<p>{{ cpfDoAluno | cpf | inverter}}</p>
		<input name="" id="" class="btn btn-primary" type="text" :value="cpfDoAluno | cpf">

		<hr>
		<frutas></frutas>
		<hr>
		<div id="app">
		<ul>
            <li v-for="fruta in frutas">{{fruta}}</li>
        </ul>
        <input name="" id="" class="btn btn-primary" type="text" value="" v-model="fruta" @keyup.enter="add">
	</div>
	</div>
</template>

<script>

import Frutas from './Frutas.vue'
import frutasMixin from './FrutasMixin'

export default {
	filters: {
		cpf(valor) {
			const arr = valor.split('');
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			// Retornando valor do CPF em máscara
			return arr.join('')
		}
	},
	mixins: [frutasMixin],
		data() {
			return {
				cpfDoAluno: '60070080090',
				fruta: '',
                frutas: ['banana','maça','laranja']
			}
		},
		methods: {
            add() {
                this.frutas.push(this.fruta);
                this.fruta = ''
            }
        },
	
	components: {
		Frutas
		}
	}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
