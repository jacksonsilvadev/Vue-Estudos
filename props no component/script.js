Vue.component('postagem', {
	data() {
		return {
			c: 0
		}
	},
	props: ['titulo'],
	template: '<div>{{titulo}}</div>'
})

let app = new Vue({
	el: '#app',
	data: {

	}
});