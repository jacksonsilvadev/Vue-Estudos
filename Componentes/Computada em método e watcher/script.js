// const app = new Vue ({
// 	el: '#app',
// 	data: {
// 		nome: 'Jackson',
// 		num: 5
// 	}, 
// 	methods: {
// 		aleatorio: function() {
// 			const al = Math.floor(Math.random()*100);
// 			return this.num + " + " + al + " = "+(this.num + al);
// 		}
// 	},
// 	computed:{
// 		aleatorioComputed: function() {
// 			const al = Math.floor(Math.random()*100);
// 			return this.num + " + " + al + " = "+(this.num + al);
// 		}
// 	},
// 	watch: {
// 		num: function() {
// 			const al = Math.floor(Math.random()*100);
// 			return console.log(this.num + " + " + al + " = "+(this.num + al));
// 		}
// 	},
// })

const app = new Vue ({
	el: '#app',
	data: {
		nome: 'Jackson',
		num1: '',
		num2: '',
		result: '',
	}, 
	methods: {
		resultado: function(value){
			this.result =  value;
		}
	},
	watch: {
		num1:function(){
			var result = this.num1 + this.num2
			
			this.resultado(result)
		},
		num2:function(){
			var result = this.num1 + this.num2
			
			if(result !=null){
				clearTimeout(result)
			}

			setTimeout(result, 500)

			this.resultado(result)
		}
	},
})

