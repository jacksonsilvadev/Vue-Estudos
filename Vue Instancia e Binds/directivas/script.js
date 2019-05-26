let app = new Vue({
	el:'#app',
	data:{
		
		selectA: true,
	},
	methods: {
		options: function() {
			return  [
				{text: 'True', value: true},
				{text: 'False', value: false}
			]
		}
	}

});