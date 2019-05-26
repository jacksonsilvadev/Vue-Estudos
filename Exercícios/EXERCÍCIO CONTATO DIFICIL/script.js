const app = new Vue({
    el: '#app',
    data:{
       nomes: [],
       name:'',
       avisa:'',
       timer: null,
       button: false
    },
    computed: {
       
    },
    watch: {
        name: function(){
        if(this.name == null || this.name == ''){

        }else {
            this.avisa = 'Digitando...';

            if(this.timer != null){
                clearTimeout(this.timer);
            }
    
            this.timer = setTimeout(this.validation, 1000);
            }
        }

       
        
    },
    methods: {
        validation:function(){

        if(this.name.length <= 2){

            this.avisa = 'Você precisa digitar mais que dois caracteres';

        }else {
            this.avisa = '';
            this.button = true;
        }
        },
        add: function(){
            this.nomes.push(this.name);
            this.name = '';
            this.button = false;
        }
    },
})