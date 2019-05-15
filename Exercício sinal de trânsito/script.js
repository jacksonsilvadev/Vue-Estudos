Vue.component('luz', {
	props: ['cor'],
	template: `
		<span class="luz" :style="{'background-color': cor}"></span>
	`
})

let app = new Vue({
	el: '#app',
	data: {
		cor: ['red', 'green', 'yellow', '#696969'],
		yellow: false,
		red: false,
		green: true,
		sinal: true,
		showSinalChange: true
	},
	methods: {
		mudarSinal() {
			var vm = this
			if (this.sinal) {
				this.showSinalChange = !this.showSinalChange
				this.sinal = !this.sinal
				this.green = false
				this.yellow = true

				setTimeout(() => {
					vm.yellow = false;
					vm.red = true;
					vm.green = false;

					vm.showSinalChange = !this.showSinalChange
				}, 2000)
			} else {
				this.showSinalChange = !this.showSinalChange
				this.sinal = !this.sinal
				this.red = false
				this.green = true
				this.showSinalChange = !this.showSinalChange
			}

		}
	},
})