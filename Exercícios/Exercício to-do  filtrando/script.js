Vue.component('listToDo', {
	props: ['lista'],
	template: `
	<table>
	<thead>
		<tr>
			<td>Name</td>
			<td>Price</td>
		</tr>
	</thead>
	<tbody>
		<tr v-for="item in lista">
		<td :style="{'color': item.stock === 0 ? 'red':''}" v-text="item.name"></td>
			<td v-text="item.value"></td>
		</tr>
	</tbody>
</table>
	`
})

Vue.component('search', {
	data() {
		return {
			params: {
				search: '',
				isStocked: false
			}
		}
	},
	methods: {
		searchThis() {

			this.$emit('filtra', this.params)
		}
	},
	template: `
		<div>
			<input type="text" v-model="params.search" placeholder="Search..."> <br>
			<input type="checkbox" v-model="params.isStocked">
			Only show products in stock <br>
			<button @click="searchThis">Filtrar</button>
		</div>
		`
})

let app = new Vue({
	el: '#app',
	data: {
		lista: [{
				name: 'Football',
				stock: 2,
				value: '$49.99',
				category: 'Sporting Goods'
			},
			{
				name: 'Baseball',
				stock: 2,
				value: '$9.99',
				category: 'Sporting Goods'
			},
			{
				name: 'Basketball',
				stock: 0,
				value: '$29.99',
				category: 'Sporting Goods'
			},
			{
				name: 'iPod Touch',
				stock: 2,
				value: '$99.99',
				category: 'Electronics'
			},
			{
				name: 'iPhone 5',
				stock: 0,
				value: '$399.99',
				category: 'Electronics'
			},
			{
				name: 'Nexus 7',
				stock: 2,
				value: '$199.99',
				category: 'Electronics'
			},
		]
	},
	methods: {
		listaFiltro(v) {

			if (v === undefined) {
				return this.lista
			} else if (v.search && v.isStocked == false) {

				return this.lista.filter((item) => {
					return item.name.toLowerCase().indexOf(v.search.toLowerCase()) != 1 ? item : ''
				})

			}
		}
	}
});