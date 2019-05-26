const app = new Vue ({
	el: '#app',
	data: {
		nome: 'Jackson',
	}, 
	methods: {

	},
	computed:{
		nomeInvertido: function() {
			return	this.nome.split('').reverse().join('')
		}
	}
})

