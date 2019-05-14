let app = new Vue({
	el: '#app',
	data: {
		busca: '',
		nomes: ['Bonieky', 'Paulo', 'Antônio', 'Fulano', 'Ciclano']
	},
	computed: {
		nomesFiltrados: function () {

			return this.busca == '' ? this.nomes : this.nomes.filter((value, index) => {

				return value.toLowerCase().indexOf(this.busca.toLowerCase()) != -1 ? value : '';
			});

		}
	}

});