const app = new Vue({
    el: '#app',
    data:{
        primeiroNome: '',
        segundoNome: '',
        nomeCompleto:''
    },
    computed: {
        nomeComp: function(){
            return this.primeiroNome+' '+this.segundoNome
        }
    },
    watch: {
        primeiroNome:function(){
            this.nomeCompleto = this.primeiroNome+' '+this.segundoNome
        },
        segundoNome:function(){
            this.nomeCompleto = this.primeiroNome+' '+this.segundoNome
        }
        
    },
})