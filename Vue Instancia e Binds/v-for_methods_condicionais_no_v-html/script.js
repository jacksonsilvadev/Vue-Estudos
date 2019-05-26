function bandeira(pais){
    return '<img src="paises/'+pais+'.png" />';
};

function nome(nome){
    return '<p>' + nome + '</p>';
};

let app = new Vue({
    el: '#app',
    data: {
        argentina:bandeira('argentina'),
        argentinanome:nome('Argentina'),
        brazil:bandeira('brazil'),
        brazilnome:nome('Brazil'),
        china:bandeira('china'),
        chinanome:nome('China'),
        uk:bandeira('uk'),
        uknome:nome('Inglaterra'),
        usa:bandeira('usa'),
        usanome:nome('Estados Unidas'),

    },
    methods:{
        paises: function(){
            return [
                {bandeira: this.argentina ,nome: this.argentinanome},
                {bandeira: this.brazil ,nome: this.brazilnome},
                {bandeira: this.china ,nome: this.chinanome},
                {bandeira: this.uk ,nome: this.uknome},
                {bandeira: this.usa ,nome: this.usanome},
            ]
        }
    }
});


