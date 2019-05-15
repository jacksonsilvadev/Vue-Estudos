Vue.component('contador', {
	data() {
		return {
			c: 0
		}
	},
	template: '<div><span>{{c}} x</span> <button @click="c++">Aumentar</button></div>'
})

let app = new Vue({
	el: '#app',
	data: {

	}
});