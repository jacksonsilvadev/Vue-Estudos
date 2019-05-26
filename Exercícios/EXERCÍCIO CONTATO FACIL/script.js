let app = new Vue({
	el:'#app',
	data:{
		name: []
	},
	methods: {
		add: function(){
		
		var value = document.getElementById('1').value;
		if(value != ''){
			this.name.push(value);
			document.getElementById('1').value = ""
		}
	}
	}

});